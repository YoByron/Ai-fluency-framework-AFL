 # Dashboard Guide (Healthcare)
 
 Use appointments_sample.csv to monitor waits and throughputs.
 
 1) Import CSV as table.
 2) Pivot 1: Rows: dept; Values: average wait_min, count of visit_type.
 3) Pivot 2: Rows: date (group by day/week); Values: average wait_min.
 4) Charts: bar (avg wait by dept), line (wait trend over time).
 5) Add Slicers: visit_type, language.
 
 Notes: High-stakes domain—treat dashboards as operational aids with clinician oversight.

## Formula examples

```
# Avg wait by dept
=AVERAGEIFS(Table1[wait_min], Table1[dept], $A2)

# Daily average wait
=AVERAGEIFS(Table1[wait_min], Table1[date], $A2)
```
