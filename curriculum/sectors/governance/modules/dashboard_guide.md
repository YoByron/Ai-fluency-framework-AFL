 # Dashboard Guide (Governance)
 
 Use grievances_sample.csv to create a service dashboard.
 
 1) Import CSV and format as table.
 2) Pivot 1 (Workload): Rows: department; Columns: state; Values: count of ticket_id; Filter: status.
 3) Pivot 2 (Aging): Add calculated field or use helper column for opened vs closed; chart weekly trends.
 4) Charts: stacked column (by state), line (weekly openings vs closures).
 5) Add Slicers: category, priority, status.
 
 Notes: Ensure audit logs for any shared reports; mask PII if present.

## Formula examples

```
# Count tickets by department and state
=COUNTIFS(Table1[department], $A2, Table1[state], B$1)

# Weekly opened vs closed (helper column WeekNum from created_at)
=COUNTIFS(Table1[WeekNum], $A2, Table1[status], "Open")
=COUNTIFS(Table1[WeekNum], $A2, Table1[status], "Closed")
```
