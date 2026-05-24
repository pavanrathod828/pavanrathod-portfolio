// Minimal HAST → React renderer. Used by HypeOnCodeBlock and MlEvalBlock
// to render shiki's `codeToHast` output directly as type-safe React
// elements (no raw HTML injection). Handles the small subset of HAST that
// shiki emits: element / text / root nodes, string-form CSS in `style`
// properties, array-form class names.

import React from "react";
import type { ReactNode } from "react";
import type { Root, Element, Text, Properties } from "hast";

type Node = Root | Element | Text;

export function renderHast(node: Node, key?: string | number): ReactNode {
  if (node.type === "text") {
    return node.value;
  }
  if (node.type === "root") {
    return node.children.map((c, i) => renderHast(c as Node, i));
  }
  // Element
  const { tagName, properties, children } = node;
  const props = mapProperties(properties ?? {});
  if (key !== undefined) props.key = key;
  return React.createElement(
    tagName,
    props,
    children.map((c, i) => renderHast(c as Node, i)),
  );
}

function mapProperties(p: Properties): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [rawKey, value] of Object.entries(p)) {
    if (value === undefined || value === null || value === false) continue;
    if (rawKey === "class" || rawKey === "className") {
      out.className = Array.isArray(value) ? value.join(" ") : String(value);
    } else if (rawKey === "style" && typeof value === "string") {
      out.style = parseStyleString(value);
    } else if (rawKey === "tabindex" || rawKey === "tabIndex") {
      out.tabIndex = Number(value);
    } else if (rawKey === "for") {
      out.htmlFor = value;
    } else {
      out[rawKey] = value;
    }
  }
  return out;
}

function parseStyleString(s: string): React.CSSProperties {
  const obj: Record<string, string> = {};
  for (const decl of s.split(";")) {
    const colon = decl.indexOf(":");
    if (colon === -1) continue;
    const key = decl.slice(0, colon).trim();
    const val = decl.slice(colon + 1).trim();
    if (!key || !val) continue;
    const camel = key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    obj[camel] = val;
  }
  return obj as React.CSSProperties;
}
