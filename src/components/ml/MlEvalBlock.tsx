// Server component — renders an illustrative RAG eval-output JSON snippet
// via shiki at build time. The `_note` key at the top of the JSON is the
// screenshot-resistant disclosure (travels with the block even if the
// figcaption gets cropped).
//
// Numbers here are PLACEHOLDER illustrative values pending the real Week 4
// eval run (PORTFOLIO_PLAN.md §6 Week 3). The amber caption + the inline
// `_note` together make the honesty disclosure unambiguous.
//
// elevated bg, ~6% lift from --bg #0a0a0a; not in tokens — flagged for
// future docs/design-tokens.md update

import { codeToHast } from "shiki";
import type { Root } from "hast";
import { portfolioTheme } from "@/lib/shikiTheme";
import { renderHast } from "@/lib/hastToReact";

const EVAL_JSON = `{
  "_note": "illustrative — pending Week 4",
  "model": "bge-small-en-v1.5",
  "corpus": "amazon-reviews-2018 (subset, n=50000)",
  "queries": 250,
  "metrics": {
    "recall@5": 0.62,
    "recall@10": 0.74,
    "mrr@10": 0.48,
    "latency_p50_ms": 23,
    "latency_p95_ms": 71
  },
  "rerank": {
    "enabled": false,
    "note": "baseline before reranker pass"
  }
}`;

export default async function MlEvalBlock() {
  const hast = (await codeToHast(EVAL_JSON, {
    lang: "json",
    theme: portfolioTheme,
  })) as Root;

  return (
    <div className="code-block">
      <figure className="code-block-figure">{renderHast(hast)}</figure>
      <p className="code-block-caption code-block-caption--amber">
        ILLUSTRATIVE EVAL OUTPUT · ACTUAL RUN PENDING WEEK 4
      </p>
    </div>
  );
}
