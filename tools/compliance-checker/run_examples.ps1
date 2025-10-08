 $dir = Split-Path -Parent $MyInvocation.MyCommand.Definition
 Write-Host "== Compliance Check =="
 Get-Content "$dir/examples/check_payload.json" | python "$dir/checker.py"
 Write-Host "`n== Bias Detect =="
 Get-Content "$dir/examples/bias_dataset.json" | python "$dir/bias_detect.py"
 Write-Host "`n== Explain =="
 Get-Content "$dir/examples/explain_payload.json" | python "$dir/explain.py"
