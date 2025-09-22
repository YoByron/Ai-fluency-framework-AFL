#!/usr/bin/env python3
"""
Simple productivity calculator to reproduce sector examples from the paper and run sensitivity scenarios.

Usage:
  python productivity_calculator.py
Adjust parameters in SECTORS dict or run programmatically.
"""
from dataclasses import dataclass
from typing import Dict

@dataclass
class Sector:
    name: str
    workers: int
    hours_saved_per_week: float
    hourly_rate: float
    weeks_per_year: int = 50

    def annual_value_per_worker(self):
        return self.hours_saved_per_week * self.weeks_per_year * self.hourly_rate

    def total_annual_value(self):
        return self.annual_value_per_worker() * self.workers

SECTORS: Dict[str, Sector] = {
    "Education": Sector("Education", workers=10_000_000, hours_saved_per_week=3.5, hourly_rate=600),
    "Governance": Sector("Governance", workers=3_000_000, hours_saved_per_week=18, hourly_rate=800),
    "Agriculture": Sector("Agriculture", workers=5_000_000, hours_saved_per_week=2.5, hourly_rate=250),
    "MSMEs": Sector("MSMEs", workers=2_000_000, hours_saved_per_week=10, hourly_rate=400),
    "Healthcare": Sector("Healthcare", workers=500_000, hours_saved_per_week=2, hourly_rate=1000),
    "Financial": Sector("Financial", workers=500_000, hours_saved_per_week=8, hourly_rate=500)
}

def compute_total(sectors=SECTORS):
    total = 0
    per_sector = {}
    for k,s in sectors.items():
        val = s.total_annual_value()
        per_sector[k] = val
        total += val
    return total, per_sector

if __name__ == "__main__":
    total, per_sector = compute_total()
    print("Annual estimated economic value by sector (INR):")
    for k,v in per_sector.items():
        print(f" - {k}: {v:,.0f}")
    print(f"Total: {total:,.0f}")
    # quick ROI example
    investment = 1_000 * 1_00_00_000  # ₹1,000 Cr -> ₹1,000 * 1e7? Using rupee crore conversion (simplify)
    # For clarity use crores: investment_crores = 1000
    print("\nNote: adjust parameters for conservative/optimistic scenarios in code.")