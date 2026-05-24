// Server component — renders a syntax-highlighted Flask + Pydantic snippet
// via shiki at build time. No "use client" directive on purpose: the
// `await codeToHast(...)` call requires a React Server Component context,
// and rendering the resulting HAST through React ships zero client-side JS.
//
// Per Yash boundary (PORTFOLIO_PLAN.md §8): the snippet is category-
// canonical (the first chapter of any Flask tutorial), not HypeOn-specific.
//
// elevated bg, ~6% lift from --bg #0a0a0a; not in tokens — flagged for
// future docs/design-tokens.md update

import { codeToHast } from "shiki";
import type { Root } from "hast";
import { portfolioTheme } from "@/lib/shikiTheme";
import { renderHast } from "@/lib/hastToReact";

const FLASK_CODE = `from flask import Flask, request, jsonify
from pydantic import BaseModel, ValidationError

app = Flask(__name__)

class Item(BaseModel):
    name: str
    quantity: int

@app.post("/items")
def create_item():
    try:
        item = Item(**request.get_json())
    except ValidationError as e:
        return jsonify(e.errors()), 422
    return jsonify(item.model_dump()), 201`;

export default async function HypeOnCodeBlock() {
  const hast = (await codeToHast(FLASK_CODE, {
    lang: "python",
    theme: portfolioTheme,
  })) as Root;

  return (
    <div className="code-block">
      <figure className="code-block-figure">{renderHast(hast)}</figure>
      <p className="code-block-caption">POST /items · Flask + Pydantic</p>
    </div>
  );
}
