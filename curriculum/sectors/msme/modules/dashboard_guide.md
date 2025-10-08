 # Dashboard Guide (MSME)
 
 Use sales_history_sample.csv to track sales and forecasting inputs.
 
 1) Import CSV as table; add helper column revenue = units*price.
 2) Pivot 1: Rows: date (group by week); Values: sum units, sum revenue.
 3) Pivot 2: Rows: sku; Values: sum units; show top 5 products.
 4) Charts: line (weekly revenue), bar (top SKUs).
 5) Add Slicers: SKU, month.
 
 Notes: Keep raw data separate; document any manual adjustments.

## Formula examples

```
# Revenue helper
=[@units]*[@price]

# Weekly revenue (Sheets example with WEEKNUM)
=SUMIFS(Table1[revenue], WEEKNUM(Table1[date]), $A2)

# Top SKU units
=SUMIFS(Table1[units], Table1[sku], $A2)
```
