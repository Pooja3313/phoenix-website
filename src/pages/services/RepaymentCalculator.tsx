import {
  ArrowRight,
  PoundSterling,
  TrendingUp,
  Percent,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const RepaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [term, setTerm] = useState(25);
  const [repaymentType, setRepaymentType] = useState<
    "repayment" | "interest-only"
  >("repayment");

  // Validation limits ? calculation still runs, sirf warning dikhti hai
  const MAX_LOAN = 99999999;
  const MAX_TERM = 40;
  const MAX_RATE = 50;

  const loanWarning = loanAmount < 1 ? "Loan amount must be at least  £1" : loanAmount > MAX_LOAN ? "Loan amount cannot exceed  £99,999,999" : "";
  const termWarning = term < 1 ? "Term must be between 1 year and 40 years" : term > MAX_TERM ? "Maximum term is 40 years" : "";
  const rateWarning = interestRate < 0 ? "Interest rate must be between 0% and 50%" : interestRate > MAX_RATE ? "Maximum interest rate is 50%" : "";

  // Monthly repayment calculation ? standard amortisation formula
  // (same formula used by WealthMax: M = P * [r(1+r)^n] / [(1+r)^n - 1])
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = term * 12;

  let monthlyPayment = 0;
  let totalRepaid = 0;
  let totalInterest = 0;

  if (repaymentType === "repayment" && monthlyRate > 0 && loanAmount > 0) {
    monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
    totalRepaid = monthlyPayment * totalPayments;
    totalInterest = totalRepaid - loanAmount;
  } else if (repaymentType === "interest-only" && loanAmount > 0) {
    monthlyPayment = loanAmount * monthlyRate;
    totalInterest = monthlyPayment * totalPayments;
    totalRepaid = totalInterest + loanAmount;
  }

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          <img
            src="/images/mortgage/Repayments Calculator.webp"
            alt="Repayment calculator"
            loading="eager"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />
          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
             £
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <AnimatedSection delay={0.3}>
                <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                  Tools
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffd700] mb-4">
                  Mortgage{" "}
                  <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary pen-underline2">
                    Repayments Calculator
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mx-auto text-center">
                  Use our calculator to estimate your monthly mortgage
                  repayments and understand what you could afford.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-background">
          <AnimatedSection delay={0.2} animation="animate-fade-scale">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Inputs */}
                <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Calculate your Mortgage Rates and Repayments Now!
                  </h2>

                  {/* Loan Amount */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <PoundSterling
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className={`w-full pl-9 pr-4 py-3 border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all ${
                          loanWarning ? "border-red-500" : "border-border"
                        }`}
                      />
                    </div>
                    {loanWarning && (
                      <p className="text-red-500 text-xs mt-1">{loanWarning}</p>
                    )}
                  
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Interest Rate (%)
                    </label>
                    <div className="relative">
                      <Percent
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        type="number"
                        step={0.1}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className={`w-full pl-9 pr-4 py-3 border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all ${
                          rateWarning ? "border-red-500" : "border-border"
                        }`}
                      />
                    </div>
                    {rateWarning && (
                      <p className="text-red-500 text-xs mt-1">{rateWarning}</p>
                    )}
                  </div>

                  {/* Mortgage Term */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mortgage Term (years)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        value={term}
                        onChange={(e) => setTerm(Number(e.target.value))}
                        className={`w-full px-4 py-3 border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all ${
                          termWarning ? "border-red-500" : "border-border"
                        }`}
                      />
                      <span className="text-muted-foreground text-sm whitespace-nowrap">
                        {term} years
                      </span>
                    </div>
                    {termWarning && (
                      <p className="text-red-500 text-xs mt-1">{termWarning}</p>
                    )}
                    <input
                      type="range"
                      min={5}
                      max={40}
                      step={1}
                      value={Math.min(term, 40)}
                      onChange={(e) => setTerm(Number(e.target.value))}
                      className="w-full mt-2 accent-primary"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary to-phoenix-orange-dark text-primary-foreground rounded-2xl p-8">
                    <p className="text-primary-foreground/70 text-sm mb-1">
                      Monthly Repayment
                    </p>
                    <p className="text-4xl md:text-5xl font-bold mb-6">
                      {formatCurrency(monthlyPayment)}
                    </p>
                  </div>

                  {/* Visual bar */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-bold text-foreground mb-4">
                      Cost Breakdown
                    </h3>
                    <div className="h-6 rounded-full overflow-hidden flex bg-muted">
                      <div
                        className="bg-accent h-full transition-all duration-500"
                        style={{
                          width: `${totalRepaid > 0 ? (loanAmount / totalRepaid) * 100 : 0}%`,
                        }}
                      />
                      <div
                        className="bg-primary h-full transition-all duration-500"
                        style={{
                          width: `${totalRepaid > 0 ? (totalInterest / totalRepaid) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-muted-foreground">
                          Principal ({formatCurrency(loanAmount)})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          Interest ({formatCurrency(totalInterest)})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <TrendingUp size={20} className="text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          Important Note
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          This calculator provides an estimate only. Actual
                          rates and repayments may vary. Contact our advisers
                          for a personalised mortgage quote tailored to your
                          circumstances.
                        </p>
                      </div>
                    </div>
                  </div> */}

                  <NavLink
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Speak to an Adviser <ArrowRight size={18} />
                  </NavLink>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
};

export default RepaymentCalculator;


