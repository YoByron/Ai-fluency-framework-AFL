 # CACF Compliance Checker (Demo Stubs)

Lightweight scripts to demonstrate CACF endpoints locally.

## Usage

Compliance check:
```
echo '{"input": {"text": "..", "metadata": {"language": "en"}}, "output": {"text": ".."}}' | \
python tools/compliance-checker/checker.py
```

Bias detect (pass a small test_dataset):
```
echo '{"test_dataset": [{"input": {}, "demographic_attributes": {"language": "hi"}}, {"input": {}, "demographic_attributes": {"language": "en"}}]}' | \
python tools/compliance-checker/bias_detect.py
```

Explainability:
```
echo '{"decision": {"label": "approve"}, "context": {"features": {"income": 400000, "region": "rural"}}}' | \
python tools/compliance-checker/explain.py
```

Notes: These are illustrative only; replace with real checks for production.

Quick run:
- Bash: sh tools/compliance-checker/run_examples.sh
- PowerShell: tools\compliance-checker\run_examples.ps1
