 #!/usr/bin/env python3
 """
 CACF explain (demo):
 Accepts a decision and context, returns a simple factor-weight explanation.
 """
 import json, sys

def explain(decision, context):
    feats = (context or {}).get("features", {})
    weights = []
    for k, v in feats.items():
        w = 0.2 if isinstance(v, (int, float)) else 0.1
        weights.append({"factor": k, "weight": round(w, 2), "contribution": "positive"})
    return {
        "explanation": {
            "primary_factors": weights[:5],
            "confidence": 0.85,
            "alternative_outcomes": []
        },
        "human_readable": "Decision influenced by a small set of input features; human review advised for high-stakes.",
        "technical_details": {"feature_count": len(feats)},
        "constitutional_basis": "Article 21"
    }

if __name__ == "__main__":
    data = json.load(sys.stdin)
    print(json.dumps(explain(data.get("decision"), data.get("context")), ensure_ascii=False, indent=2))
