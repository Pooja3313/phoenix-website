import { useMemo, useState, type FormEvent } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Building2, ChevronRight, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type MortgagePurpose = "purchase" | "remortgage";
type PaymentType = "repayment" | "interest-only";
type ApplicantType = "first-time-buyer" | "home-mover" | "remortgage";
type MortgageClass = "all" | "residential" | "buy-to-let";
type RatePeriod = "any" | "2" | "3" | "5";
type TotalCostOption = "initial" | "term";

type BestBuyDealsPayload = {
  mortgagePurpose: MortgagePurpose;
  propertyValue: number;
  paymentType: PaymentType;
  applicantType: ApplicantType;
  loanAmount: number;
  termYears: number;
  mortgageClass: MortgageClass;
  initialRatePeriodYears: RatePeriod;
  totalCost: TotalCostOption;
  lender: string;
};

type BestBuyDeal = {
  id: string;
  lender: string;
  productName: string;
  rateApr: number; // percentage
  monthlyPayment: number; // GBP
  termYears: number;
  initialRatePeriodYears: number;
  standardVariableRate: number;
  totalFees: number; // GBP (estimate)
};

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

export default function BestBuyCalculator() {
  const [mortgagePurpose, setMortgagePurpose] =
    useState<MortgagePurpose>("purchase");
  const [propertyValue, setPropertyValue] = useState(250000);
  const [paymentType, setPaymentType] = useState<PaymentType>("repayment");
  const [applicantType, setApplicantType] =
    useState<ApplicantType>("first-time-buyer");
  const [loanAmount, setLoanAmount] = useState(150000);
  const [termYears, setTermYears] = useState(20);
  const [mortgageClass, setMortgageClass] = useState<MortgageClass>("all");
  const [initialRatePeriodYears, setInitialRatePeriodYears] =
    useState<RatePeriod>("any");
  //  New fields
  const [totalCost, setTotalCost] = useState<TotalCostOption>("initial");
  const [selectedLender, setSelectedLender] = useState<string>("all");

  const deposit = useMemo(
    () => Math.max(0, propertyValue - loanAmount),
    [propertyValue, loanAmount],
  );
  const ltv = useMemo(() => {
    if (!propertyValue) return 0;
    return Number(((loanAmount / propertyValue) * 100).toFixed(1));
  }, [loanAmount, propertyValue]);

  const payload: BestBuyDealsPayload = useMemo(
    () => ({
      mortgagePurpose,
      paymentType,
      applicantType,
      propertyValue,
      loanAmount,
      termYears,
      mortgageClass,
      initialRatePeriodYears,
      totalCost,
      lender: selectedLender,
    }),
    [
      mortgagePurpose,
      paymentType,
      applicantType,
      propertyValue,
      loanAmount,
      termYears,
      mortgageClass,
      initialRatePeriodYears,
      totalCost,
      selectedLender,
    ],
  );

  const [loading, setLoading] = useState(false);
  const [deals, setDeals] = useState<BestBuyDeal[]>([]);
  const [error, setError] = useState<string | null>(null);

  const mockAPR = useMemo(() => {
    const classBoost =
      mortgageClass === "buy-to-let"
        ? 0.65
        : mortgageClass === "residential"
          ? 0.2
          : 0.35;
    const purposeBoost = mortgagePurpose === "remortgage" ? 0.25 : 0.0;
    const ltvBoost = ltv > 85 ? 1.25 : ltv > 75 ? 0.7 : ltv > 60 ? 0.35 : 0.1;
    const periodBoost =
      initialRatePeriodYears === "any"
        ? 0.18
        : initialRatePeriodYears === "5"
          ? 0.05
          : initialRatePeriodYears === "3"
            ? 0.18
            : 0.28;
    const paymentBoost = paymentType === "interest-only" ? 0.35 : 0.0;
    const applicantBoost =
      applicantType === "first-time-buyer"
        ? 0.1
        : applicantType === "home-mover"
          ? 0.2
          : 0.35;
    return (
      3.6 +
      classBoost +
      purposeBoost +
      ltvBoost +
      periodBoost +
      paymentBoost +
      applicantBoost
    );
  }, [
    initialRatePeriodYears,
    ltv,
    mortgageClass,
    mortgagePurpose,
    paymentType,
    applicantType,
  ]);

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // ?? Removed fetch / dummyjson ?? now pure mock logic only

    const calcMonthlyPayment = (apr: number) => {
      const principal = loanAmount;
      const monthlyRate = apr / 100 / 12;
      const n = termYears * 12;
      if (monthlyRate <= 0 || n <= 0) return 0;
      if (paymentType === "interest-only") return principal * monthlyRate;
      return (
        (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1)
      );
    };

    const base = mockAPR;
    const step = 0.18;
    const rateChoices = [base, base + step, base + step * 2].map((r) =>
      Number(r.toFixed(2)),
    );

    const resolvedInitialPeriods = [2, 3, 5];

    const mockLenders = [
      "Halifax",
      "AIB",
      "Barclays",
      "Accord",
      "Aldermore",
      "Atom Bank",
    ];

    const computedDeals: BestBuyDeal[] = rateChoices.map((rate, idx) => {
      const lender =
        selectedLender !== "all"
          ? selectedLender
          : mockLenders[idx % mockLenders.length] || "Halifax";

      const resolvedInitial =
        initialRatePeriodYears === "any"
          ? resolvedInitialPeriods[idx]
          : Number(initialRatePeriodYears);
      const totalFees = Math.round(199 + idx * 150 + Math.random() * 400);

      const standardVariableRate = Number(
        (rate + 1.35 + idx * 0.15).toFixed(2),
      );

      return {
        id: `deal-${idx}`,
        lender,
        productName:
          idx === 0
            ? "Best Buy Fixed Rate"
            : idx === 1
              ? "Competitive Variable Options"
              : "Flexible Initial Period Deal",
        rateApr: rate,
        monthlyPayment: Math.round(calcMonthlyPayment(rate)),
        termYears,
        initialRatePeriodYears: resolvedInitial,
        standardVariableRate,
        totalFees,
      };
    });

    // Simulate slight delay
    setTimeout(() => {
      setDeals(computedDeals);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero - simplified, orange/green theme */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/mortgage/Best-Buy-Calculator.jpg')`,
            }}
          />

          {/* Dark Overlay - Ensures text is readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />

          {/* Subtle Accent Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />

          {/* Floating £ Symbol */}
          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
            Â£
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <p className="text-white font-semibold text-md uppercase tracking-widest mb-3">
                  Mortgage Tools
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#ffd700] mb-4">
                  Best Buy{" "}
                  <span className="text-primary font-handwritten pen-underline2">
                    Calculator
                  </span>
                </h1>
                <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
                  Compare potential deals based on your inputs. Ready for live
                  API integration.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <AnimatedSection animation="animate-fade-scale" delay={0.3}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Enter Your Details
                  </h2>
                  <p className="text-gray-600 mt-3 max-w-2xl">
                    Adjust values ? click Search to see estimated deals (mock
                    mode).
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-start">
                {/* Form */}
                <div className="w-full lg:max-w-[620px]">
                  <form
                    onSubmit={handleCalculate}
                    className="bg-white border border-gray-200 rounded-3xl p-6 space-y-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Mortgage Inputs
                        </h3>
                        <p className="text-gray-600 mt-2">
                          Adjust values to see deal preview update.
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                        <Search className="text-orange-600" size={24} />
                      </div>
                    </div>

                    {/* Existing selects */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Mortgage Purpose
                        </label>
                        <select
                          value={mortgagePurpose}
                          onChange={(e) =>
                            setMortgagePurpose(
                              e.target.value as MortgagePurpose,
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        >
                          <option value="purchase">Purchase</option>
                          <option value="remortgage">Remortgage</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Mortgage Class
                        </label>
                        <select
                          value={mortgageClass}
                          onChange={(e) =>
                            setMortgageClass(e.target.value as MortgageClass)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        >
                          <option value="all">All</option>
                          <option value="residential">Residential</option>
                          <option value="buy-to-let">Buy-to-let</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Payment Type
                        </label>
                        <select
                          value={paymentType}
                          onChange={(e) =>
                            setPaymentType(e.target.value as PaymentType)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        >
                          <option value="repayment">Repayment</option>
                          <option value="interest-only">Interest Only</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Applicant Type
                        </label>
                        <select
                          value={applicantType}
                          onChange={(e) =>
                            setApplicantType(e.target.value as ApplicantType)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        >
                          <option value="first-time-buyer">
                            First Time Buyer
                          </option>
                          <option value="home-mover">Home Mover</option>
                          <option value="remortgage">Remortgage</option>
                        </select>
                      </div>
                    </div>

                    {/* Property Value */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Property Value
                      </label>
                      <div className="grid sm:grid-cols-[1fr,180px] gap-4 items-center">
                        <input
                          type="number"
                          value={propertyValue}
                          onChange={(e) =>
                            setPropertyValue(Number(e.target.value))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        />
                        <input
                          type="range"
                          min={50000}
                          max={2000000}
                          step={5000}
                          value={propertyValue}
                          onChange={(e) =>
                            setPropertyValue(Number(e.target.value))
                          }
                          className="w-full accent-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Loan Amount
                        </label>
                        <input
                          type="number"
                          value={loanAmount}
                          onChange={(e) =>
                            setLoanAmount(
                              Math.min(Number(e.target.value), propertyValue),
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Est. Deposit: {formatCurrency(deposit)}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Term (years)
                        </label>
                        <input
                          type="number"
                          min={5}
                          max={40}
                          value={termYears}
                          onChange={(e) => setTermYears(Number(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                        />
                      </div>
                    </div>

                    {/* Group 4: Periods + Total Cost + Lender + APR */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-2">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Initial Rate Period
                        </label>
                        <select
                          value={initialRatePeriodYears}
                          onChange={(e) =>
                            setInitialRatePeriodYears(
                              e.target.value as RatePeriod,
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
                        >
                          <option value="any">Any Period</option>
                          <option value="2">2 Years</option>
                          <option value="3">3 Years</option>
                          <option value="5">5 Years</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Total Cost
                        </label>
                        <select
                          value={totalCost}
                          onChange={(e) =>
                            setTotalCost(e.target.value as TotalCostOption)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
                        >
                          <option value="initial">Initial Period</option>
                          <option value="term">Term Period</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Lender
                        </label>
                        <select
                          value={selectedLender}
                          onChange={(e) => setSelectedLender(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
                        >
                          <option value="all">All</option>
                          <option value="Accord">Accord</option>
                          <option value="AIB">AIB</option>
                          <option value="Aldermore Mortgages">
                            Aldermore Mortgages
                          </option>
                          <option value="Atom Bank">Atom Bank</option>
                          <option value="Barclays Bank">Barclays Bank</option>
                          <option value="Halifax">Halifax</option>
                          {/* ? Add more lenders here when you have the full list */}
                        </select>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? "Searching..." : "Search"}
                        <ChevronRight size={18} />
                      </button>
                      <NavLink
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-gray-300 hover:border-orange-300 bg-white hover:bg-orange-50 text-gray-800 font-semibold px-8 py-3 rounded-xl transition-colors"
                      >
                        Speak to an Adviser <ArrowRight size={18} />
                      </NavLink>
                    </div>

                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                        {error}
                      </div>
                    )}
                  </form>
                </div>

                {/* Results - same as before, minor color tweaks */}
                <div className="w-full lg:max-w-[520px]">
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Deal Preview
                        </h3>
                        <p className="text-gray-600 mt-1 text-sm">
                          Results update after you click Search.
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-green-100 flex items-center justify-center">
                        <Building2 className="text-green-600" size={20} />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {deals.length === 0 ? (
                        <div className="border border-gray-200 rounded-2xl p-5 text-center text-gray-500">
                          Choose inputs and click Search to see deal cards.
                        </div>
                      ) : (
                        deals.map((deal) => (
                          <div
                            key={deal.id}
                            className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-orange-300 transition-colors shadow-sm"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  {deal.lender}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {deal.productName}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">APR</p>
                                <p className="text-2xl font-bold text-orange-600">
                                  {deal.rateApr.toFixed(2)}%
                                </p>
                              </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <p className="text-sm text-gray-500">
                                Monthly (est.)
                              </p>
                              <p className="text-lg font-bold text-gray-900">
                                {formatCurrency(deal.monthlyPayment)}
                              </p>
                            </div>

                            <div className="mt-2 flex items-center justify-between">
                              <p className="text-sm text-gray-500">
                                SVR (demo)
                              </p>
                              <p className="text-sm font-semibold text-gray-900">
                                {deal.standardVariableRate.toFixed(2)}%
                              </p>
                            </div>

                            <div className="mt-1 flex items-center justify-between">
                              <p className="text-sm text-gray-500">
                                Total fees (est.)
                              </p>
                              <p className="text-sm font-semibold text-gray-900">
                                {formatCurrency(deal.totalFees)}
                              </p>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="text-xs px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700">
                                {deal.termYears}y
                              </span>
                              <span className="text-xs px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700">
                                {deal.initialRatePeriodYears}y fixed
                              </span>
                            </div>

                            <NavLink
                              to="/contact"
                              className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 shadow-sm transition-colors"
                            >
                              Enquire <ArrowRight size={16} />
                            </NavLink>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5">
                      <p className="text-sm font-semibold text-gray-800">
                        Important Note
                      </p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        This is a UI estimate for now. When your API is
                        connected, these cards will show live lender data.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl border border-gray-200 bg-white/60 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gray-900">
                      Why Best Buy?
                    </p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      We help you compare options fast, so you can focus on
                      affordability and long-term confidence.
                    </p>
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
