 #!/usr/bin/env python3
 """
 Simple Monte Carlo for economic impact.
 Samples adoption and hours factors to estimate distribution of outcomes.
 """
 import random, statistics
 from economic_impact.productivity_calculator import compute_total, SCENARIOS
 
 def run(iterations=2000, scenario="base", investment_crores=8000, years=5):
     base = SCENARIOS[scenario]
     totals = []
     for _ in range(iterations):
         adoption = min(0.90, max(0.30, random.triangular(0.40, 0.75, base["adoption"])) )
         hours_factor = min(1.30, max(0.70, random.gauss(base["hours_factor"], 0.10)))
         total, _ = compute_total(adoption=adoption, hours_factor=hours_factor)
         totals.append(total * years)
     crores = 10_000_000
     inv = investment_crores * crores
     rois = [t / inv for t in totals]
     def pct(xs, p):
         k = int(len(xs)*p)
         return sorted(xs)[k]
     summary = {
         "median_crores": statistics.median(totals)/crores,
         "p10_crores": pct(totals, 0.10)/crores,
         "p90_crores": pct(totals, 0.90)/crores,
         "median_roi_x": statistics.median(rois),
         "p10_roi_x": pct(rois, 0.10),
         "p90_roi_x": pct(rois, 0.90),
     }
     return summary
 
 if __name__ == "__main__":
     s = run()
     print("5-year cumulative (Cr) and ROI (x):")
     for k,v in s.items():
         print(f" - {k}: {v:,.2f}")
 
