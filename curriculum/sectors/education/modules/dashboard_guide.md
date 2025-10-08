 # Dashboard Guide (Education)
 
 Build a simple spreadsheet dashboard from admin_reports_template.csv.
 
 1) Import CSV (Excel/Sheets) and format as table.
 2) Insert Pivot Table:
    - Rows: parent_language
    - Values: count of student_id, average of attendance_pct
    - Filters: month
 3) Add Chart: clustered column (attendance by language).
 4) Add Slicer (month) for easy filtering.
 5) Create a second pivot:
    - Rows: student_name
    - Values: average attendance_pct
    - Filter top/bottom 5 to focus interventions.
 
 Notes: Anonymize IDs when sharing. Respect privacy; do not publish personal data.

## Formula examples (Excel/Sheets)

Use these if you prefer formulas instead of pivots:

```
# Average attendance by language and month
=AVERAGEIFS(Table1[attendance_pct], Table1[parent_language], H2, Table1[month], $H$1)

# Count of students by language
=COUNTIFS(Table1[parent_language], H2)

# Top-5 by attendance (use SORT and TAKE in Sheets)
=TAKE(SORT(UNIQUE(Table1[student_name]), 1, TRUE), 5)
```
