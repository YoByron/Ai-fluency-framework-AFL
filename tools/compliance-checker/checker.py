 #!/usr/bin/env python3
 """
 CACF compliance checker (stub) for demos.
 Reads a JSON with input/output/user_attributes and prints a mock compliance result.
 """
 import json, sys

 def check(payload):
     text = (payload.get("output", {}) or {}).get("text", "")
     lang = (payload.get("input", {}) or {}).get("metadata", {}).get("language", "en")
     # naive heuristics for demo
     bias_score = 0.02 if all(x not in text.lower() for x in ["stereotype", "bias"]) else 0.08
     equality = 0.97 if lang in ("en", "hi") else 0.95
     explain = 0.85
     status = "pass" if equality >= 0.95 and bias_score <= 0.05 and explain >= 0.80 else "review"
     return {
         "compliance_status": status,
         "scores": {
             "equality_score": round(equality, 2),
             "bias_score": round(bias_score, 2),
             "explainability_score": round(explain, 2),
             "fairness_score": round(equality, 2),
         },
         "flags": [] if status == "pass" else [{"type": "language_bias", "severity": "medium"}],
     }

 if __name__ == "__main__":
     data = json.load(sys.stdin)
     print(json.dumps(check(data), ensure_ascii=False, indent=2))
