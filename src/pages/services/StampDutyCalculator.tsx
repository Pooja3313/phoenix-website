import { useMemo, useState, type FormEvent } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  FileText,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";

type HomeNation = "england_northern_ireland" | "wales";

type StampDutyBand = {
  from: number;
  to: number | null; // null => no upper bound
  rate: number; // percentage
  label: string;
  amount: number; // GBP
};

type StampDutyBreakdown = {
  total: number; // GBP
  bands: StampDutyBand[];
};

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function calculateSDLT_ENG_WALES_LIKE({
  value,
  firstTimeBuyer,
}: {
  value: number;
  firstTimeBuyer: boolean;
}): StampDutyBreakdown {

  const bands: Array<{
    from: number;
    to: number | null;
    rate: number;
    label: string;
  }> = firstTimeBuyer
    ? [
        {
          from: 0,
          to: 425000,
          rate: 0,
          label: "0% (first-time buyer threshold)",
        },
        { from: 425000, to: 625000, rate: 5, label: "5% (first-time buyer)" },
        { from: 625000, to: 925000, rate: 10, label: "10% (upper band)" },
        {
          from: 925000,
          to: 1500000,
          rate: 12,
          label: "12% (high value portion)",
        },
        { from: 1500000, to: null, rate: 12, label: "12% (over Â£1.5m)" },
      ]
    : [
        { from: 0, to: 250000, rate: 0, label: "0% (up to Â£250k)" },
        {
          from: 250000,
          to: 925000,
          rate: 5,
          label: "5% (from Â£250k to Â£925k)",
        },
        {
          from: 925000,
          to: 1500000,
          rate: 10,
          label: "10% (from Â£925k to Â£1.5m)",
        },
        { from: 1500000, to: null, rate: 12, label: "12% (over Â£1.5m)" },
      ];

  const remaining = clamp(value, 0, 999999999);
  const computedBands: StampDutyBand[] = [];
  let total = 0;

  for (const band of bands) {
    const bandFrom = band.from;
    const bandTo = band.to ?? remaining;
    if (remaining <= bandFrom) continue;

    const sliceTo = Math.min(remaining, bandTo);
    const sliceAmount = Math.max(0, sliceTo - bandFrom);
    const amount = (sliceAmount * band.rate) / 100;

    computedBands.push({
      from: band.from,
      to: band.to,
      rate: band.rate,
      label: band.label,
      amount,
    });
    total += amount;
  }

  return {
    total: Math.round(total),
    bands: computedBands.filter((b) => b.amount > 0 || b.rate === 0),
  };
}

export default function StampDutyCalculator() {
  const [nation, setNation] = useState<HomeNation>("england_northern_ireland");
  const [propertyValue, setPropertyValue] = useState(300000);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(true);
  const [loading, setLoading] = useState(false);

  const result = useMemo<StampDutyBreakdown | null>(() => {
    if (nation !== "england_northern_ireland") return null;
    return calculateSDLT_ENG_WALES_LIKE({
      value: propertyValue,
      firstTimeBuyer: isFirstTimeBuyer,
    });
  }, [isFirstTimeBuyer, nation, propertyValue]);

  const handleCalculate = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // UI-only. For Wales and any future surcharge rules,
      // connect an API and return authoritative breakdown.
      await new Promise((r) => setTimeout(r, 400));
    } finally {
      setLoading(false);
    }
  };

  const payload = {
    nation,
    propertyValue,
    isFirstTimeBuyer,
  };

  return (
    <div className="min-h-screen animate-page-enter">
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/mortgage/stamp1.jpg')`,
            }}
          />

          {/* Dark Overlay - Ensures text is readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />

          {/* Subtle Accent Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />

          {/* Floating � Symbol */}
          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
            £
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <AnimatedSection delay={0.4}>
                <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                  UK Costs
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffd700] mb-4">
                  Stamp Duty{" "}
                  <span className="text-primary font-handwritten pen-underline2">
                    Calculator
                  </span>
                </h1>
                <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                  Get a fast estimate of stamp duty based on common SDLT bands.
                  Connect your official calculation API later to make it 100%
                  accurate.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={0.5} animation="animate-fade-scale">
              <div className="grid lg:grid-cols-6 gap-10 items-start">
                {/* Form */}
                <div className="lg:col-span-3">
                  <form
                    onSubmit={handleCalculate}
                    className="bg-card border border-border rounded-3xl p-8 space-y-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">
                          Your Details
                        </h2>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Choose inputs to preview your breakdown.
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <FileText className="text-accent" size={24} />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nation
                      </label>
                      <select
                        value={nation}
                        onChange={(e) =>
                          setNation(e.target.value as HomeNation)
                        }
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                      >
                        <option value="england_northern_ireland">
                          England & Northern Ireland
                        </option>
                        <option value="wales">Wales</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Property Price (GBP)
                      </label>
                      <input
                        type="number"
                        value={propertyValue}
                        onChange={(e) =>
                          setPropertyValue(Number(e.target.value))
                        }
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                      />
                      <input
                        type="range"
                        min={50000}
                        max={2500000}
                        step={5000}
                        value={propertyValue}
                        onChange={(e) =>
                          setPropertyValue(Number(e.target.value))
                        }
                        className="w-full mt-2 accent-primary"
                      />
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isFirstTimeBuyer}
                          onChange={(e) =>
                            setIsFirstTimeBuyer(e.target.checked)
                          }
                          className="accent-primary"
                        />
                        <span className="text-sm font-semibold text-foreground">
                          I'm a first-time buyer
                        </span>
                      </label>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        Estimates only. Future API can apply any additional
                        rules (e.g. additional properties).
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Calculating..." : "Calculate Stamp Duty"}
                      <ArrowRight size={18} />
                    </button>

                    <NavLink
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full border border-border hover:border-accent/30 bg-background hover:bg-card transition-colors font-semibold px-8 py-3 rounded-xl"
                    >
                      Talk to an Adviser <ChevronRight size={18} />
                    </NavLink>

                    <div className="hidden">{JSON.stringify(payload)}</div>
                  </form>
                </div>

                {/* Results */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="bg-gradient-to-br from-primary to-phoenix-orange-dark text-primary-foreground rounded-3xl p-8">
                    <p className="text-primary-foreground/70 text-sm mb-1">
                      Estimated Total
                    </p>
                    <p className="text-4xl font-bold">
                      {nation === "england_northern_ireland" && result
                        ? formatCurrency(result.total)
                        : "â"}
                    </p>
                    <p className="text-sm text-primary-foreground/80 mt-3 max-w-xl">
                      This preview is based on simplified bands for England &
                      Northern Ireland.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-3xl p-7">
                    <div className="flex items-start gap-3">
                      <BadgeCheck
                        className="text-accent shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Breakdown
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                          API-ready structure: `bands[]` with `label`, `rate`,
                          and `amount`.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      {nation !== "england_northern_ireland" ? (
                        <div className="rounded-2xl border border-border bg-background p-5 flex items-start gap-3">
                          <HelpCircle
                            className="text-accent shrink-0 mt-1"
                            size={18}
                          />
                          <div>
                            <p className="font-semibold text-foreground">
                              Wales coming soon
                            </p>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                              Wales uses Land Transaction Tax rules. Plug in
                              your API response for a full breakdown.
                            </p>
                          </div>
                        </div>
                      ) : result ? (
                        <div className="space-y-4">
                          {result.bands.map((band, idx) => (
                            <div
                              key={`${band.label}-${idx}`}
                              className="rounded-2xl border border-border bg-background p-5 hover:border-accent/30 transition-colors"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-sm font-semibold text-foreground">
                                    {band.label}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {formatCurrency(band.from)} -{" "}
                                    {band.to === null
                                      ? "Above"
                                      : formatCurrency(band.to)}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-muted-foreground">
                                    Rate
                                  </p>
                                  <p className="text-2xl font-bold text-accent">
                                    {band.rate}%
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  Band Amount
                                </span>
                                <span className="text-lg font-bold text-foreground">
                                  {formatCurrency(band.amount)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="border border-border rounded-2xl p-5 text-muted-foreground text-center">
                          Select inputs and calculate to see a breakdown.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-accent/20 bg-accent/5 p-7 flex items-start gap-3">
                    <ShieldCheck
                      className="text-accent shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-foreground">Important</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        For accurate SDLT/LTT calculations, connect your
                        official data and rules API. This UI is designed so you
                        can swap `result` with your API response easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}
