 # Dashboard Guide (Financial Services)
 
 Use transactions_sample.csv to monitor ops and flags.
 
 1) Import CSV as table.
 2) Pivot 1: Rows: state; Columns: flag_reason; Values: count of txn_id.
 3) Pivot 2: Rows: merchant; Values: sum amount; Filter: flag_reason (blank vs flagged).
 4) Charts: stacked column (flags by state), bar (top merchants by volume).
 5) Add Slicers: channel, flag_reason.
 
 Notes: Do not include customer PII; align with compliance retention policy.

## Formula examples

```
# Flags by state
=COUNTIFS(Table1[state], $A2, Table1[flag_reason], B$1)

# Volume by merchant (flagged only)
=SUMIFS(Table1[amount], Table1[merchant], $A2, Table1[flag_reason], "<>")
```
