// Custom shiki theme matching the portfolio's locked palette
// (docs/design-tokens.md). Shared by HypeOnCodeBlock (python) and
// MlEvalBlock (json). Token-color rules are scoped to TextMate
// grammars so the same theme renders both languages with the right
// accents:
//   - Python keywords + control flow      → --teal
//   - Python strings                       → warm muted
//   - JSON keys                            → warm muted
//   - JSON numbers                         → --amber (ML "in progress" accent)
//   - JSON null/true/false                 → --muted
//   - Class / function names               → near-white
//   - Punctuation                          → --muted
// Background uses #111114 (no --bg-2 token exists in design-tokens.md —
// flagged for future addition).

import type { ThemeRegistration } from "shiki";

const TEAL = "#2aa88a";
const AMBER = "#f0a820";
const WARM_MUTED = "#cba36a";
const TEXT = "#ededed";
const NEAR_WHITE = "#e6e6e6";
const MUTED = "#909090";
const BG = "#111114";

export const portfolioTheme: ThemeRegistration = {
  name: "pavanrathod-portfolio",
  type: "dark",
  colors: {
    "editor.background": BG,
    "editor.foreground": TEXT,
  },
  tokenColors: [
    // Python keywords (from, import, class, def, return, try, except, etc.)
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage.type",
        "storage.modifier",
        "keyword.operator.new",
      ],
      settings: { foreground: TEAL },
    },
    // JSON property names (keys) — more specific scope wins over plain `string`
    {
      scope: [
        "support.type.property-name",
        "support.type.property-name.json",
        "meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: { foreground: WARM_MUTED },
    },
    // Python strings AND JSON string values
    {
      scope: [
        "string",
        "string.quoted",
        "string.quoted.single",
        "string.quoted.double",
      ],
      settings: { foreground: WARM_MUTED },
    },
    // JSON numbers — amber (ML in-progress accent)
    {
      scope: ["constant.numeric", "constant.numeric.json"],
      settings: { foreground: AMBER },
    },
    // JSON constants: null / true / false
    {
      scope: ["constant.language", "constant.language.json"],
      settings: { foreground: MUTED },
    },
    // Class names + function definitions + decorators
    {
      scope: [
        "entity.name.class",
        "entity.name.function",
        "entity.name.type",
        "support.class",
        "support.function",
        "meta.function-call entity.name.function",
        "entity.name.function.decorator",
      ],
      settings: { foreground: NEAR_WHITE },
    },
    // Variables / parameters
    {
      scope: ["variable", "variable.parameter", "meta.parameters variable"],
      settings: { foreground: TEXT },
    },
    // Comments (none in current snippets — future-proofing)
    {
      scope: ["comment", "comment.line", "comment.block"],
      settings: { foreground: MUTED, fontStyle: "italic" },
    },
    // Punctuation
    {
      scope: [
        "punctuation",
        "punctuation.separator",
        "punctuation.terminator",
        "meta.brace",
      ],
      settings: { foreground: MUTED },
    },
  ],
};
