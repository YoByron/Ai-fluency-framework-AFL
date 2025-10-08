 #!/usr/bin/env bash
 set -euo pipefail
 DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
 echo "== Compliance Check =="
 python "$DIR/checker.py" < "$DIR/examples/check_payload.json"
 echo "\n== Bias Detect =="
 python "$DIR/bias_detect.py" < "$DIR/examples/bias_dataset.json"
 echo "\n== Explain =="
 python "$DIR/explain.py" < "$DIR/examples/explain_payload.json"
