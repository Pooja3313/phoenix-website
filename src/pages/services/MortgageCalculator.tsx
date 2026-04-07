import { Calculator, ChevronRight, Search, FileText } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const MortgageCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(250000);
  const [deposit, setDeposit] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [term, setTerm] = useState(25);
  const [repaymentType, setRepaymentType] = useState<"repayment" | "interest-only">("repayment");

  const loanAmount = propertyValue - deposit;
  const ltv = propertyValue > 0 ? ((loanAmount / propertyValue) * 100).toFixed(1) : "0";
  
  // Monthly repayment calculation
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = term * 12;
  
  let monthlyPayment = 0;
  let totalRepaid = 0;
  let totalInterest = 0;

  if (repaymentType === "repayment" && monthlyRate > 0) {
    monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    totalRepaid = monthlyPayment * totalPayments;
    totalInterest = totalRepaid - loanAmount;
  } else if (repaymentType === "interest-only") {
    monthlyPayment = loanAmount * monthlyRate;
    totalInterest = monthlyPayment * totalPayments;
    totalRepaid = totalInterest + loanAmount;
  }

  const formatCurrency = (n: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

  return (
    <div className="min-h-screen">
  
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/mortgage/mortgage_calculator.jpg')`
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
            <AnimatedSection>
              <div className="flex flex-col items-center text-center">
                <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                  Tools
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Mortgage{" "}
                  <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-[#ffd700] highlighter-mark">
                    Calculator
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                  Use our calculator to estimate your monthly mortgage repayments and understand what you could afford.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* Mortgage Calculator */}
        <section className="py-16 bg-gradient-to-br from-phoenix-gray-light/40 to-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto" animation="animate-fade-scale">
              <NavLink
                to="/mortgage/mortgagecalculator/best-buy"
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-accent/30 group"
              >
                <Search size={40} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Best Buy Calculator</h3>
                <p className="text-muted-foreground text-sm">
                  Compare mortgage rates with top lenders and find the mortgage deal that?s right for you.
                </p>
                <div className="flex items-center justify-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now <ChevronRight size={16} />
                </div>
              </NavLink>
              <NavLink
                to="/mortgage/mortgagecalculator/repayment-calculator"
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-primary/30 group block"
              >
                <Calculator size={40} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Mortgage rates and repayments</h3>
                <p className="text-muted-foreground text-sm">
                  Compare mortgage deals and find out what your interest rate and monthly repayments could be.
                </p>
                <div className="flex items-center justify-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now <ChevronRight size={16} />
                </div>
              </NavLink>
              <NavLink
                to="/mortgage/mortgagecalculator/stamp-duty"
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-accent/30 group"
              >
                <FileText size={40} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Stamp Duty Calculator</h3>
                <p className="text-muted-foreground text-sm">
                  Whether you?re a first-time buyer, moving to a new home, or purchasing an additional property, find out exactly what you have to pay.
                </p>
                <div className="flex items-center justify-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now <ChevronRight size={16} />
                </div>
              </NavLink>
            </AnimatedSection>
          </div>
        </section>
      
      </main>
 
    </div>
  );
};

export default MortgageCalculator;
