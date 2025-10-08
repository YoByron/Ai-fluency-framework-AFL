#!/usr/bin/env python3
"""
Productivity calculator to reproduce sector examples and run simple scenarios.

Usage:
  python productivity_calculator.py --scenario base --years 5 --investment-crores 8000 --crores
"""
from dataclasses import dataclass
from typing import Dict, Tuple
import argparse

@dataclass
class Sector:
    name: str
    workers: int
    hours_saved_per_week: float
    hourly_rate: float
    weeks_per_year: int = 50
    extra_annual_value: float = 0.0  # optional additive (e.g., agriculture income)

    def annual_value_per_worker(self):
        return self.hours_saved_per_week * self.weeks_per_year * self.hourly_rate

    def total_annual_value(self):
        return self.annual_value_per_worker() * self.workers + self.extra_annual_value

SECTORS: Dict[str, Sector] = {
    "Education": Sector("Education", workers=10_000_000, hours_saved_per_week=3.5, hourly_rate=600),
    "Governance": Sector("Governance", workers=3_000_000, hours_saved_per_week=18, hourly_rate=800),
    # For Agriculture, include an optional additive annual income component (base case from paper ~₹21,625 Cr)
    "Agriculture": Sector("Agriculture", workers=5_000_000, hours_saved_per_week=2.5, hourly_rate=250),
    "MSMEs": Sector("MSMEs", workers=2_000_000, hours_saved_per_week=10, hourly_rate=400),
    "Healthcare": Sector("Healthcare", workers=500_000, hours_saved_per_week=2, hourly_rate=1000),
    "Financial": Sector("Financial", workers=500_000, hours_saved_per_week=8, hourly_rate=500)
}

SCENARIOS = {
    "conservative": {"adoption": 0.40, "hours_factor": 0.85},
    "base": {"adoption": 0.60, "hours_factor": 1.00},
    "optimistic": {"adoption": 0.75, "hours_factor": 1.15},
}

CRORE = 10_000_000

def compute_total(sectors=SECTORS, adoption: float = 1.0, hours_factor: float = 1.0) -> Tuple[float, Dict[str, float]]:
    total = 0.0
    per_sector: Dict[str, float] = {}
    for k, s in sectors.items():
        effective = Sector(
            name=s.name,
            workers=int(s.workers * adoption),
            hours_saved_per_week=s.hours_saved_per_week * hours_factor,
            hourly_rate=s.hourly_rate,
            weeks_per_year=s.weeks_per_year,
            extra_annual_value=s.extra_annual_value * adoption,
        )
        val = effective.total_annual_value()
        per_sector[k] = val
        total += val
    return total, per_sector

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--scenario", choices=list(SCENARIOS.keys()), default="base")
    p.add_argument("--years", type=int, default=5)
    p.add_argument("--investment-crores", type=float, default=8000)
    p.add_argument("--crores", action="store_true")
    args = p.parse_args()

    sconf = SCENARIOS[args.scenario]
    total, per_sector = compute_total(adoption=sconf["adoption"], hours_factor=sconf["hours_factor"])

    def fmt(x: float) -> str:
        return f"{x/CRORE:,.2f} Cr" if args.crores else f"₹{x:,.0f}"

    print(f"Scenario: {args.scenario} | Adoption={sconf['adoption']:.0%} | Hours factor={sconf['hours_factor']:.2f}")
    print("Annual estimated value by sector:")
    for k, v in per_sector.items():
        print(f" - {k}: {fmt(v)}")
    print(f"Annual total: {fmt(total)}")

    cumulative = total * args.years
    investment_rupees = args.investment_crores * CRORE
    roi = cumulative / investment_rupees if investment_rupees else 0.0
    print(f"{args.years}-year cumulative: {fmt(cumulative)}")
    print(f"Investment: {args.investment_crores:,.0f} Cr | ROI (x): {roi:,.1f}")