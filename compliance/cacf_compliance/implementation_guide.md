# CACF — Implementation Guide (operational)

Purpose:
Make Articles 14, 15, 21 operational through measurable APIs, monitoring, and governance steps.

Core components:
1. Compliance API spec (lightweight)
2. Automated fairness/bias pipeline
3. Auditing and immutable logging
4. Grievance and redress flow

Sample Compliance API (HTTP JSON)
- endpoint: POST /api/v1/cacf/check
- payload:
  {
    "system_id": "string",
    "request_id": "string",
    "input_sample": {...},
    "output": {...},
    "user_attributes": {"gender":"M","caste":"OBC","language":"hi","region":"UP"}
  }
- response:
  {
    "equality_score": 0.97,
    "bias_flags": ["gender_wording_bias"],
    "explainability": 0.82,
    "compliance_status": "pass"
  }

Example monitoring integration (Python snippet)
```python
# cacf_compliance example: simple fairness check hook
from fairness import FairnessAuditor

def run_cacf_check(system_id, request_id, input_sample, output, user_attrs):
    auditor = FairnessAuditor()
    equality = auditor.statistical_parity(output, user_attrs)
    explain = auditor.explainability_score(output)
    bias_flags = auditor.detect_bias(output, user_attrs)
    status = "pass" if equality >= 0.95 and not bias_flags else "review"
    return {
        "system_id": system_id,
        "request_id": request_id,
        "equality_score": equality,
        "bias_flags": bias_flags,
        "explainability": explain,
        "compliance_status": status
    }