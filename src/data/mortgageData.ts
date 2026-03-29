import { Percent, Clock, PiggyBank, Landmark, Award, House, TrendingUp, Shield, Users } from "lucide-react";
export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;   // iconMap ke liye key
}

export interface ServiceItem {
  slug: string;
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  benefitsTitle: string;           // ? New
  benefitItems: BenefitItem[];
  features: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  heroImage: string;
  whyChooseImage: string;
  benefitsImage?: string;
}

export const benefitIconMap: Record<string, any> = {
  "Interest Rates": Percent,
  "Loan Term": Clock,
  "Deposit Size": PiggyBank,
  "Government Schemes": Landmark,
  "Specialist Mortgages": Award,
  "Better Interest Rates": TrendingUp,
  "Improved Cash Flow": PiggyBank,
  "Access to Equity": Shield,
  "Additional Perks": Award,
  "Adaptability": Users,
  "Financial Assessment": Users,
  "Additional Costs": PiggyBank,
  "Research Options": Percent,
  "Long term Planning": Clock,
  "Portfolio Diversification": TrendingUp,
  "Inflation Protection": Shield,
  "Tax Advantages": Award,
};


export const mortgageServices: ServiceItem[] = [
  {
    slug: "buy-to-let-mortgage",
    title: "Buy to Let Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Whether you're new to property investment or an experienced landlord, explore the financial freedom offered by buy-to-let mortgages, with competitive rates and lucrative investment opportunities in the UK property market.",
    whyTitle: "Why Choose Phoenix Finserv for Buy to Let Mortgages?",
    heroImage: "/images/mortgage/buy-to-let-mortgage.jpg",
    whyChooseImage: "/images/mortgage/buy-to-let-mortgage1.jpg",
    whyContent: [
      "Buy-to-let mortgages are specifically designed for properties you intend to rent out. They typically require a larger deposit than residential mortgages — usually at least 25% of the property value — and the rental income must usually cover 125-145% of the monthly mortgage payments.",
      "At Phoenix Finserv, we have extensive experience in the buy-to-let market and work with a wide range of specialist lenders. Whether you're purchasing your first investment property or expanding an existing portfolio, we can help you find the right mortgage deal.",
      "Our advisers understand the complexities of buy-to-let lending, including the tax implications of property investment, the different types of tenancy agreements, and the regulatory requirements for landlords. We provide clear, practical advice to help you make informed decisions."
    ],
    benefitsTitle: "What are Benefits of Buy to Let Mortgage?",
    benefitItems: [
      {
        title: "Portfolio Diversification",
        description: "When you spread your investment risk across multiple properties, you'll reduce your vulnerability to market fluctuations.",
        iconName: "Portfolio Diversification"
      },
      {
        title: "Inflation Protection",
        description: "Property does not guarantee protection against inflation but a diversified buy-to-let portfolio has historically shown resilience over the long term.",
        iconName: "Inflation Protection"
      },
      {
        title: "Tax Advantages",
        description: "As a buy-to-let landlord you get access to tax deductions on mortgage interest payments and expenses, potentially reducing your tax liabilities.",
        iconName: "Tax Advantages"
      }
    ],
    benefitsImage: "/images/Buy-to-Let-Finance/buy-to-let-finance.jpg",
    features: [
      { title: "First-Time Landlord Mortgages", description: "Specialist products for those entering the buy-to-let market for the first time, with competitive rates and flexible terms." },
      { title: "Portfolio Landlord Mortgages", description: "Tailored solutions for landlords with four or more mortgaged properties, taking into account your full portfolio when assessing affordability." },
      { title: "HMO Mortgages", description: "Financing for Houses in Multiple Occupation, which can offer higher rental yields but require specialist lending arrangements." },
      { title: "Limited Company Buy-to-Let", description: "Increasingly popular for tax efficiency, we can arrange mortgages for properties purchased through a Special Purpose Vehicle (SPV) company." },
    ],
    ctaTitle: "Ready to Invest in Property?",
    ctaDescription: "Our buy-to-let mortgage advisers can help you find the right deal for your investment goals. Book a free consultation today."
  },
  {
    slug: "first-time-buyer-mortgage",
    title: "First Time Buyer Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Buying your first home is an exciting step and Phoenix Finserv is here to guide you through it. We'll explain how first-time buyer mortgages work, what to consider, and the steps involved.",
    whyTitle: "Why Choose Phoenix Finserv for First Time Buyer Mortgages?",
    heroImage: "/images/mortgage/first-time-buyer-mortgage.jpg",
    whyChooseImage: "/images/mortgage/first-time-buyer-mortgage1.jpg",
    whyContent: [
      "Buying your first home is one of the most significant financial decisions you'll ever make. The mortgage market can be overwhelming, with thousands of products available from hundreds of lenders. That's where Phoenix Finserv comes in.",
      "Our experienced mortgage advisers specialise in helping first-time buyers navigate the process from start to finish. We'll help you understand how much you can borrow, what deposit you'll need, and which mortgage type is best suited to your circumstances.",
      "We have access to exclusive deals not available on the high street, and we'll handle the application process on your behalf, liaising with the lender, solicitor, and estate agent to make the journey as smooth as possible."
    ],
    benefitsTitle: "What are Benefits of First Time Buyer Mortgage?",
    benefitItems: [
      {
        title: "Financial Assessment",
        description: "They'll evaluate your income, savings and credit score to determine what you can afford.",
        iconName: "Financial Assessment"
      },
      {
        title: "Additional Costs",
        description: "You'll find out about other expenses such as stamp duty, legal fees and insurance premiums.",
        iconName: "Additional Costs"
      },
      {
        title: "Research Options",
        description: "They'll explore various mortgage types, including fixed-rate, variable-rate and Help to Buy schemes.",
        iconName: "Research Options"
      },
      {
        title: "Long term Planning",
        description: "Your adviser will ensure the mortgage you opt for aligns with your future financial goals for stability and growth.",
        iconName: "Long term Planning"
      }
    ],
    benefitsImage: "/images/services/first-time-buyer-benefits.jpg",
    features: [
      { title: "Deposit Guidance", description: "We'll help you understand how much deposit you need and explore options such as Help to Buy ISAs and Lifetime ISAs to boost your savings." },
      { title: "Government Schemes", description: "Access to shared ownership, First Homes, and other government-backed schemes designed to help first-time buyers get on the property ladder." },
      { title: "Mortgage in Principle", description: "We'll help you obtain a mortgage in principle so you can house hunt with confidence, knowing exactly how much you can afford." },
      { title: "Full Application Support", description: "From finding the right deal to completion, we manage the entire mortgage application process, keeping you informed at every stage." },
    ],
    ctaTitle: "Ready to Buy Your First Home?",
    ctaDescription: "Take the first step on the property ladder with expert guidance from Phoenix Finserv. Book your free mortgage consultation today."
  },
  {
    slug: "residential-mortgage",
    title: "Residential Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Start your journey to home ownership with support from Phoenix Finserv. We work with a wide range of UK lenders to help you find a suitable mortgage and guide you through the process with confidence.",
    whyTitle: "Why Choose Phoenix Finserv for Residential Mortgages?",
    heroImage: "/images/mortgage/residential-mortgage.jpg",
    whyChooseImage: "/images/mortgage/residential-mortgage1.jpg",

    whyContent: [
      "Whether you're moving home, looking to upsize, or purchasing a property for the first time, finding the right residential mortgage is essential. With so many options available — fixed rates, variable rates, tracker mortgages, and more — it can be difficult to know where to start.",
      "At Phoenix Finserv, we simplify the process. Our mortgage advisers will assess your financial situation, explain the different mortgage types available, and recommend products that are suitable for your needs and circumstances.",
      "We have relationships with a wide panel of UK lenders, including high street banks, building societies, and specialist lenders. This means we can often find deals that you wouldn't be able to access directly, potentially saving you thousands over the life of your mortgage."
    ],
    benefitsTitle: "What are Benefits of Residential Mortgage?",
    benefitItems: [
      {
        title: "Interest Rates",
        description: "You'll encounter Fixed-rate, variable-rate, or tracker options that all offer different levels of stability and flexibility.",
        iconName: "Interest Rates"
      },
      {
        title: "Loan Term",
        description: "Shorter mortgage terms may mean higher monthly payments but lower overall interest costs.",
        iconName: "Loan Term"
      },
      {
        title: "Deposit Size",
        description: "Larger deposits often result in better rates and lower monthly payments, as the amount being borrowed is lower.",
        iconName: "Deposit Size"
      },
      {
        title: "Government Schemes",
        description: "You can explore Help to Buy or shared ownership schemes for assistance with deposits.",
        iconName: "Government Schemes"
      },
      {
        title: "Specialist Mortgages",
        description: "There are also options for self-employed individuals or those with unique circumstances.",
        iconName: "Specialist Mortgages"
      }
    ],
    benefitsImage: "/images/services/residential-benefits.jpg",
    features: [
      { title: "Fixed Rate Mortgages", description: "Lock in your monthly payments for a set period (typically 2-5 years), giving you certainty and protection against interest rate rises." },
      { title: "Variable Rate Mortgages", description: "Benefit from potentially lower initial rates that move with the lender's standard variable rate or the Bank of England base rate." },
      { title: "Tracker Mortgages", description: "Your rate tracks the Bank of England base rate plus a set percentage, offering transparency about how your rate is calculated." },
      { title: "Offset Mortgages", description: "Link your savings to your mortgage to reduce the interest you pay, while still having access to your savings when you need them." },
    ],
    ctaTitle: "Looking for a Residential Mortgage?",
    ctaDescription: "Find the right mortgage for your home purchase with expert advice from Phoenix Finserv. Contact us for a free consultation."
  },
  {
    slug: "remortgage",
    title: "Remortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Optimise your finances with a remortgage. The Phoenix Finserv team can help you find competitive rates, flexible terms and expert guidance to achieve your financial goals.",
    whyTitle: "Why Choose Phoenix Finserv for Remortgaging?",
    heroImage: "/images/mortgage/remortgage.jpg",
    whyChooseImage: "/images/mortgage/remortgage1.jpg",
    whyContent: [
      "Remortgaging involves switching your existing mortgage to a new deal — either with your current lender or a different one. There are many reasons why people choose to remortgage, and it can be a smart financial move when done at the right time.",
      "Common reasons for remortgaging include: your current deal is coming to an end, you want to secure a lower interest rate, you need to release equity from your property, you want to consolidate debts, or your circumstances have changed and you need more flexible terms.",
      "At Phoenix Finserv, we'll review your current mortgage arrangement, assess your financial goals, and search the market to find a remortgage deal that works for you. We handle the entire process, making the switch as smooth and stress-free as possible."
    ],
    benefitsTitle: "What are Benefits of Remortgage?",
    benefitItems: [
      {
        title: "Better Interest Rates",
        description: "The mortgage market offers a wide range of interest rates. Moving to a new lender or securing a better deal could help lower your monthly mortgage payments.",
        iconName: "Better Interest Rates"
      },
      {
        title: "Improved Cash Flow",
        description: "By extending the term and potentially reducing monthly payments, homeowners can enhance their cash flow, enabling them to allocate funds towards other investments or financial goals.",
        iconName: "Improved Cash Flow"
      },
      {
        title: "Access to Equity",
        description: "Using a remortgage to consolidate debt is increasingly common. You may be able to release funds through your mortgage to pay off other loans, leaving you with a single monthly payment.",
        iconName: "Access to Equity"
      },
      {
        title: "Additional Perks",
        description: "Switching to a new mortgage deal may offer added benefits such as lower fees, improved terms, or enhanced features.",
        iconName: "Additional Perks"
      },
      {
        title: "Adaptability",
        description: "Remortgaging can provide the flexibility to move to a mortgage deal that better aligns with your current circumstances.",
        iconName: "Adaptability"
      }
    ],
    benefitsImage: "/images/services/remortgage-benefits.jpg",
    features: [
      { title: "Rate Switch", description: "Move to a lower interest rate to reduce your monthly payments and save money over the life of your mortgage." },
      { title: "Equity Release", description: "Access the equity in your property for home improvements, investments, or other financial needs without selling your home." },
      { title: "Debt Consolidation", description: "Combine multiple debts into your mortgage for a single, more manageable monthly payment — though be aware this may increase the total amount you repay." },
      { title: "Term Adjustment", description: "Extend or reduce your mortgage term to adjust your monthly payments to suit your current financial situation." },
    ],
    ctaTitle: "Thinking About Remortgaging?",
    ctaDescription: "Don't stay on a rate that's costing you money. Our advisers can help you find a better deal. Book your free remortgage review today."
  },
];


