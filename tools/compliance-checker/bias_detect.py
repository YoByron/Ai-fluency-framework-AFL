 #!/usr/bin/env python3
 """
 CACF bias-detect (demo):
 Reads JSON with test_dataset[].demographic_attributes and returns naive variance metrics.
 """
 import json, sys, statistics

def analyze(dataset):
    # Dummy scores per group (simulate model accuracy 0.9±0.05)
    groups = {}
    for item in dataset:
        attrs = item.get("demographic_attributes", {})
        key = tuple(sorted(attrs.items())) or ("unknown",)
        groups.setdefault(key, []).append(0.9)
    variances = [statistics.pvariance(v) if len(v) > 1 else 0.0 for v in groups.values()]
    max_var = max(variances) if variances else 0.0
    overall_bias = min(0.05, max_var)
    flagged = overall_bias > 0.04
    return {
        "overall_bias_score": round(overall_bias, 3),
        "groups": {str(k): {"count": len(v)} for k, v in groups.items()},
        "flagged": flagged,
        "recommendations": ["Collect more samples for sparse groups"] if flagged else []
    }

if __name__ == "__main__":
    data = json.load(sys.stdin)
    ds = data.get("test_dataset", [])
    print(json.dumps(analyze(ds), ensure_ascii=False, indent=2))
