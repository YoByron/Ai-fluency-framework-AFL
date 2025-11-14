#!/bin/sh

# A simple linter to enforce repository conventions.

echo "Running repository linter..."
EXIT_CODE=0

# Rule 1: Check for misplaced curriculum files.
# Files like 'afl-X.md' should be in a directory like 'aflX/'.
echo "Checking curriculum file placement..."
find curriculum -type f -name "afl-*.md" | while read -r filepath; do
  # Extract number from filename, e.g., afl-3.md -> 3
  filename=$(basename "$filepath")
  file_num=$(echo "$filename" | sed -n 's/afl-\([0-9]\+\)\.md/\1/p')

  # Extract number from directory path, e.g., curriculum/afl3 -> 3
  dir_path=$(dirname "$filepath")
  dir_num=$(echo "$dir_path" | sed -n 's/.*afl\([0-9]\+\).*/\1/p')

  if [ -n "$file_num" ] && [ -n "$dir_num" ] && [ "$file_num" -ne "$dir_num" ]; then
    echo "Linter Error: Misplaced curriculum file."
    echo "File '$filepath' should be in a directory matching its AFL level 'afl$file_num'."
    EXIT_CODE=1
  fi
done

if [ "$EXIT_CODE" -eq 0 ]; then
  echo "All checks passed!"
else
  echo "Linter checks failed."
fi

exit $EXIT_CODE
