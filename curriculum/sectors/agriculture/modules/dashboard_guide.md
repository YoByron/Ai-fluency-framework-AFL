 # Dashboard Guide (Agriculture)
 
 Use mandi_prices_sample.csv and climate_risk_template.csv.
 
 1) Import both CSVs into separate sheets.
 2) Pivot (Prices): Rows: date; Columns: commodity; Values: average price_rs_per_kg; Filter: market.
 3) Chart: line chart showing price trends by commodity.
 4) Climate view: create a heat map table from climate_risk_template.csv to flag high-risk months.
 5) Combine into a single sheet with slicers for market/commodity.
 
 Notes: Always verify with official market boards and local advisories.

## Formula examples

```
# Average price by date and commodity
=AVERAGEIFS(Table1[price_rs_per_kg], Table1[date], $A2, Table1[commodity], B$1)

# Simple sell/hold indicator (compare to 7-day avg)
=IF([@price_rs_per_kg] > AVERAGE(OFFSET([@price_rs_per_kg],-6,0,7,1)), "Sell", "Hold")
```
