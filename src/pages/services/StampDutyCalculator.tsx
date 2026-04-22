import { useMemo, useState } from "react";
import { FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type HomeNation = "england_northern_ireland" | "wales";

type StampDutyBand = {
  from: number;
  to: number | null;
  rate: number;
  label: string;
  amount: number;
};

type StampDutyBreakdown = {
  total: number;
  bands: StampDutyBand[];
};

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

function computeBands(
  value: number,
  bands: Array<{
    from: number;
    to: number | null;
    rate: number;
    label: string;
  }>,
): StampDutyBreakdown {
  const computedBands: StampDutyBand[] = [];
  let total = 0;

  for (const band of bands) {
    const bandTo = band.to ?? value;
    if (value <= band.from) continue;
    const sliceTo = Math.min(value, bandTo);
    const sliceAmount = Math.max(0, sliceTo - band.from);
      const amount = Math.round((sliceAmount * band.rate) / 100 * 100) / 100;
    computedBands.push({ ...band, amount });
    total += amount;
  }

  return {
      total: Math.round(total),
    bands: computedBands,
  };
}

function calculateSDLT({
  value,
  firstTimeBuyer,
  onlyProperty,
}: {
  value: number;
  firstTimeBuyer: boolean;
  onlyProperty: boolean;
}): StampDutyBreakdown {
  const isAdditional = !firstTimeBuyer && !onlyProperty;

  let bands: Array<{
    from: number;
    to: number | null;
    rate: number;
    label: string;
  }>;

  if (firstTimeBuyer) {
    if (value <= 500000) {
      bands = [
        {
          from: 0,
          to: 300000,
          rate: 0,
          label: "0% (first-time buyer relief up to £300k)",
        },
        { from: 300000, to: 500000, rate: 5, label: "5% (£300k?£500k)" },
      ];
    } else {
      bands = [
        { from: 0, to: 125000, rate: 0, label: "0% (up to £125k)" },
        { from: 125000, to: 250000, rate: 2, label: "2% (£125k?£250k)" },
        { from: 250000, to: 925000, rate: 5, label: "5% (£250k?£925k)" },
        { from: 925000, to: 1500000, rate: 10, label: "10% (£925k?£1.5m)" },
        { from: 1500000, to: null, rate: 12, label: "12% (over £1.5m)" },
      ];
    }
  } else if (isAdditional) {
    bands = [
      { from: 0, to: 125000, rate: 5, label: "5% (up to £125k)" },
      { from: 125000, to: 250000, rate: 7, label: "7% (£125k?£250k)" },
      { from: 250000, to: 925000, rate: 10, label: "10% (£250k?£925k)" },
      { from: 925000, to: 1500000, rate: 15, label: "15% (£925k?£1.5m)" },
      { from: 1500000, to: null, rate: 17, label: "17% (over £1.5m)" },
    ];
  } else {
    bands = [
      { from: 0, to: 125000, rate: 0, label: "0% (up to £125k)" },
      { from: 125000, to: 250000, rate: 2, label: "2% (£125k?£250k)" },
      { from: 250000, to: 925000, rate: 5, label: "5% (£250k?£925k)" },
      { from: 925000, to: 1500000, rate: 10, label: "10% (£925k?£1.5m)" },
      { from: 1500000, to: null, rate: 12, label: "12% (over £1.5m)" },
    ];
  }

  return computeBands(value, bands);
}

function calculateLTT({
  value,
  onlyProperty,
}: {
  value: number;
  onlyProperty: boolean;
}): StampDutyBreakdown {
 const standardBands = [
  { from: 0, to: 225000, rate: 0, label: "0% (up to £225k)" },
  { from: 225000, to: 400000, rate: 6, label: "6% (£225k - £400k)" },
  { from: 400000, to: 750000, rate: 7.5, label: "7.5% (£400k - £750k)" },
  { from: 750000, to: 1500000, rate: 10, label: "10% (£750k - £1.5m)" },
  { from: 1500000, to: null, rate: 12, label: "12% (over £1.5m)" },
];
const additionalBands = [
  { from: 0, to: 180000, rate: 5, label: "5% (up to £180k)" },
  { from: 180000, to: 250000, rate: 8.5, label: "8.5% (£180k - £250k)" },
  { from: 250000, to: 400000, rate: 10, label: "10% (£250k - £400k)" },
  { from: 400000, to: 750000, rate: 12.5, label: "12.5% (£400k - £750k)" },
  { from: 750000, to: 1500000, rate: 15, label: "15% (£750k - £1.5m)" },
  { from: 1500000, to: null, rate: 17, label: "17% (over £1.5m)" },
];

  const bands = onlyProperty ? standardBands : additionalBands;
  return computeBands(value, bands);
}

const MIN_PRICE = 1;
const MAX_PRICE = 99_999_999;

export default function StampDutyCalculator() {
  const [nation, setNation] = useState<HomeNation>("england_northern_ireland");
  const [propertyValue, setPropertyValue] = useState(300000);
  const [priceError, setPriceError] = useState<string>("");
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(true);
  const [isOnlyProperty, setIsOnlyProperty] = useState(true);

  const effectiveOnlyProperty = isFirstTimeBuyer ? true : isOnlyProperty;

  const handlePriceChange = (val: number) => {
    setPropertyValue(val);
    if (val < MIN_PRICE) {
      setPriceError("Property price must be at least  Â£1");
    } else if (val > MAX_PRICE) {
      setPriceError("Property price cannot exceed  Â£99,999,999");
    } else {
      // MIN_PRICE <= val <= MAX_PRICE  ?  valid
      setPriceError("");
    }
  };

  // ? FIXED: valid when 1 <= val <= 99,999,999
  const isValidPrice = propertyValue >= MIN_PRICE && propertyValue <= MAX_PRICE;

  const result = useMemo<StampDutyBreakdown>(() => {
    if (nation === "wales") {
      return calculateLTT({
        value: propertyValue,
        onlyProperty: effectiveOnlyProperty,
      });
    }
    return calculateSDLT({
      value: propertyValue,
      firstTimeBuyer: isFirstTimeBuyer,
      onlyProperty: effectiveOnlyProperty,
    });
  }, [
    isFirstTimeBuyer,
    effectiveOnlyProperty,
    nation,
    propertyValue,
    isValidPrice,
  ]);

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero  */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          <img
            src="/images/mortgage/stamp1.webp"
            alt="Stamp duty calculator"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />
          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold select-none pointer-events-none">
            Â£
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
                  Get a fast estimate of stamp duty based on current SDLT / LTT
                  bands (April 2025).
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Calculator  */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={0.6} animation="animate-fade-scale">
              <div className="max-w-2xl mx-auto">
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        Your Details
                      </h2>
                      <p className="text-muted-foreground mt-1 text-sm">
                        Calculate your Stamp Duty Now!
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                      <FileText className="text-accent" size={24} />
                    </div>
                  </div>

                  {/* Property Price */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      What is the property price?
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-semibold">
                        Â£
                      </span>
                      <input
                        type="number"
                        value={propertyValue}
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        onChange={(e) =>
                          handlePriceChange(Number(e.target.value))
                        }
                        className={`w-full pl-8 pr-4 py-3 border rounded-xl bg-muted focus:ring-2 outline-none text-foreground transition-colors ${
                          priceError
                            ? "border-red-500 focus:ring-red-300 focus:border-red-500"
                            : "border-border focus:ring-primary/30 focus:border-primary"
                        }`}
                      />
                    </div>

                    {/* Error message */}
                    {priceError && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {priceError}
                      </p>
                    )}

                    {/* Range slider ? clamped to valid range */}
                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      step={5000}
                      value={
                        propertyValue < MIN_PRICE
                          ? MIN_PRICE
                          : propertyValue > MAX_PRICE
                            ? MAX_PRICE
                            : propertyValue
                      }
                      onChange={(e) =>
                        handlePriceChange(Number(e.target.value))
                      }
                      className="w-full mt-3 accent-primary"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span> Â£1</span>
                      <span> Â£99,999,999</span>
                    </div>
                  </div>

                  {/* Nation */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Where are you buying?
                    </label>
                    <div className="space-y-2">
                      {[
                        {
                          value: "england_northern_ireland",
                          label: "England or Northern Ireland",
                        },
                        { value: "wales", label: "Wales" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="nation"
                            value={opt.value}
                            checked={nation === opt.value}
                            onChange={() => setNation(opt.value as HomeNation)}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                              nation === opt.value
                                ? "border-phoenix-orange"
                                : "border-gray-300"
                            }`}
                          >
                            {nation === opt.value && (
                              <div className="w-2 h-2 rounded-full bg-phoenix-orange" />
                            )}
                          </div>
                          <span className="text-sm text-foreground  transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* First Time Buyer */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Are you a first time buyer?
                    </label>
                    <div className="flex gap-6">
                      {[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" },
                      ].map((opt) => (
                        <label
                          key={String(opt.value)}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="firstTimeBuyer"
                            checked={isFirstTimeBuyer === opt.value}
                            onChange={() => setIsFirstTimeBuyer(opt.value)}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isFirstTimeBuyer === opt.value
                                ? "border-phoenix-orange"
                                : "border-gray-300"
                            }`}
                          >
                            {isFirstTimeBuyer === opt.value && (
                              <div className="w-2 h-2 rounded-full bg-phoenix-orange" />
                            )}
                          </div>
                          <span className="text-sm text-foreground  transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Only Property ? visible only when NOT first-time buyer */}
                  {!isFirstTimeBuyer && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Will this be your only property?
                      </label>
                      <div className="flex gap-6">
                        {[
                          { value: true, label: "Yes" },
                          { value: false, label: "No" },
                        ].map((opt) => (
                          <label
                            key={String(opt.value)}
                            className="flex items-center gap-2 cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="onlyProperty"
                              checked={isOnlyProperty === opt.value}
                              onChange={() => setIsOnlyProperty(opt.value)}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                                isOnlyProperty === opt.value
                                  ? "border-phoenix-orange"
                                  : "border-gray-300"
                              }`}
                            >
                              {isOnlyProperty === opt.value && (
                                <div className="w-2 h-2 rounded-full bg-phoenix-orange" />
                              )}
                            </div>
                            <span className="text-sm text-foreground  transition-colors">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Result Box */}
                  <div className="bg-gradient-to-br from-primary to-phoenix-orange-dark text-primary-foreground  text-3xl rounded-2xl p-6 text-center">
                    <p className="text-primary-foreground/80 text-xl mb-3">
                      Stamp duty to pay
                    </p>
                    {formatCurrency(result.total)}
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
