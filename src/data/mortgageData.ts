export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  benefitsTitle: string;           
  benefitItems: BenefitItem[];
  features: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  heroImage: string;
  // whyChooseImage: string;
  benefitsImage?: string;
  benefitSubtitle?: string;
}




export const mortgageServices: ServiceItem[] = [
  {
    slug: "buy-to-let-mortgage",
    title: "Buy to Let Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Whether you're new to property investment or an experienced landlord, explore the financial freedom offered by buy-to-let mortgages, with competitive rates and lucrative investment opportunities in the UK property market.",
    whyTitle: "Why have Buy to Let Mortgage?",
    heroImage: "/images/mortgage/buy-to-let-mortgage.jpg",
    // whyChooseImage: "/images/mortgage/buy-to-let-mortgage1.jpg",
    whyContent: [
      "Do you have an existing mortgage rate you're not happy with? Do you need to release equity to access funds for home improvements? There can be multiple reasons why a remortgage might be the path for you, but it's important to know the ramifications of doing so. That's where Wealthmax Financial advisers can assist. Our team can help you compare mortgage deals and advise you on associated aspects like valuations, the fees involved and whether it makes financial sense for you. Remortgaging offers financial flexibility and we can give you the reassurance that it's the right decision for your unique set of circumstances.",

    ],
    benefitsTitle: "What are Benefits of Buy to Let Mortgage?",
    benefitSubtitle: "Obtaining a buy to let mortgage gives you a range of investor benefits, meaning that you'll benefit beyond a monthly rental income and property appreciation",
    benefitItems: [
      {
        title: "Portfolio Diversification",
        description: "When you spread your investment risk across multiple properties, you'll reduce your vulnerability to market fluctuations.",
        icon: "TrendingUp"
      },
      {
        title: "Inflation Protection",
        description: "Property does not guarantee protection against inflation but a diversified buy-to-let portfolio has historically shown resilience over the long term.",
        icon: "Shield"
      },
      {
        title: "Tax Advantages",
        description: "As a buy-to-let landlord you get access to tax deductions on mortgage interest payments and expenses, potentially reducing your tax liabilities.",
        icon: "Award"
      }
    ],
    benefitsImage: "/images/mortgage/buy-to-let-mortgage1.jpg",
    features: [
      { title: "First-Time Landlord Mortgages", description: "Specialist products for those entering the buy-to-let market for the first time, with competitive rates and flexible terms." },
      { title: "Portfolio Landlord Mortgages", description: "Tailored solutions for landlords with four or more mortgaged properties, taking into account your full portfolio when assessing affordability." },
      { title: "HMO Mortgages", description: "Financing for Houses in Multiple Occupation, which can offer higher rental yields but require specialist lending arrangements." },
      { title: "Limited Company Buy-to-Let", description: "Increasingly popular for tax efficiency, we can arrange mortgages for properties purchased through a Special Purpose Vehicle (SPV) company." },
    ],
    faqs: [
      {
        question: "How many buy to let mortgages can I have?",
        answer: "There is no strict maximum limit on the number of buy-to-let mortgages you can have. However, most lenders will assess your portfolio as a whole, considering total borrowing, rental income and your experience as a landlord."
      },
      {
        question: "Do I need to have a minimum income?",
        answer: "Yes, most lenders require a minimum personal income (typically £25,000?£30,000 per year) in addition to the rental income from the property. This helps demonstrate your ability to manage the mortgage if the property is vacant."
      },
      {
        question: "Can I get a buy to let mortgage as a first-time buyer?",
        answer: "Yes, it is possible for first-time buyers to get a buy-to-let mortgage, but it can be more challenging. Lenders usually prefer applicants with some property or letting experience. Specialist lenders may consider you if you have a strong income and deposit."
      },
      {
        question: "Can I live in a buy-to-let property?",
        answer: "No. Buy-to-let mortgages are for properties that will be rented out. Living in the property yourself may breach the mortgage terms and could lead to the loan being called in."
      }
    ],
    ctaTitle: "Ready to Invest in Property?",
    ctaDescription: "Our buy-to-let mortgage advisers can help you find the right deal for your investment goals. Book a free consultation today."
  },
  {
    slug: "first-time-buyer-mortgage",
    title: "First Time Buyer Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Buying your first home is an exciting step and Phoenix Finserv is here to guide you through it. We'll explain how first-time buyer mortgages work, what to consider, and the steps involved.",
    whyTitle: "Why Choose First Time Buyer Mortgage?",
    heroImage: "/images/mortgage/first-time-buyer-mortgage.jpg",
    // whyChooseImage: "/images/mortgage/first-time-buyer-mortgage1.jpg",
    whyContent: [
      "Buying your first home can feel both exciting and overwhelming, which is why having expert guidance can make the process easier. At Wealthmax, we provide mortgage advice for first time buyers and will take the time to explain your options clearly, based on your circumstances.We work with a wide range of lenders, including many of the UK?s largest mortgage providers, to help identify products that may be suitable for your needs. Our aim is to support you in navigating the mortgage process with confidence, so you can take your next steps toward home ownership.",
    ],

    benefitsTitle: "What are Benefits of First Time Buyer Mortgage?",
    benefitSubtitle:
      "A first-time buyer mortgage opens the door to home ownership and provides guidance, affordability checks, and access to schemes that make buying your first home easier.",

    benefitItems: [
      {
        title: "Financial Assessment",
        description:
          "They'll evaluate your income, savings and credit score to determine what you can afford.",
        icon: "FileText"
      },
      {
        title: "Interest Rates",
        description:
          "Choose between fixed-rate, variable-rate or tracker mortgages based on your preference for stability or flexibility.",
        icon: "TrendingUp"
      },
      {
        title: "Loan Term",
        description:
          "Flexible repayment terms allow you to spread the cost over a period that suits your finances.",
        icon: "Clock"
      },
      {
        title: "Deposit Support",
        description:
          "Lower deposit options may be available, helping first-time buyers get onto the property ladder sooner.",
        icon: "PiggyBank"
      },
      {
        title: "Government Schemes",
        description:
          "Access schemes like Help to Buy or shared ownership to make purchasing your first home more affordable.",
        icon: "Building"
      }
    ],
    benefitsImage: "/images/mortgage/first-time-buyer-mortgage1.jpg",
    features: [
      { title: "Deposit Guidance", description: "We'll help you understand how much deposit you need and explore options such as Help to Buy ISAs and Lifetime ISAs to boost your savings." },
      { title: "Government Schemes", description: "Access to shared ownership, First Homes, and other government-backed schemes designed to help first-time buyers get on the property ladder." },
      { title: "Mortgage in Principle", description: "We'll help you obtain a mortgage in principle so you can house hunt with confidence, knowing exactly how much you can afford." },
      { title: "Full Application Support", description: "From finding the right deal to completion, we manage the entire mortgage application process, keeping you informed at every stage." },
    ],
   faqs: [
      {
        question: "How much deposit do I need as a first-time buyer?",
        answer: "Most lenders require 5?10% deposit. Higher deposit usually gives better interest rates and more product choices."
      },
      {
        question: "Who qualifies as a first-time buyer?",
        answer: "Anyone who has never owned a residential property anywhere in the world (or whose only ownership was with a former spouse/partner)."
      },
      {
        question: "Can I be a first-time buyer if my partner owns a house?",
        answer: "Usually no, if your partner already owns a property you may not qualify for first-time buyer schemes or rates."
      }
    ],
    ctaTitle: "Ready to Buy Your First Home?",
    ctaDescription: "Take the first step on the property ladder with expert guidance from Phoenix Finserv. Book your free mortgage consultation today."
  },
  {
    slug: "residential-mortgage",
    title: "Residential Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Start your journey to home ownership with support from Phoenix Finserv. We work with a wide range of UK lenders to help you find a suitable mortgage and guide you through the process with confidence.",
    whyTitle: "Why Choose Residential Mortgage?",
    heroImage: "/images/mortgage/residential-mortgage.jpg",
    // whyChooseImage: "/images/mortgage/residential-mortgage1.jpg",

    whyContent: [
      "If you're looking to enter the residential property market, you need guidance to help you navigate your way past the pitfalls that many fall into. Whether you're a first time buyer or looking to remortgage, the Wealthmax team can find the ideal solution for your needs.With so many options available, it can be very confusing and difficult to find the option that suits your circumstances and goals. However, with our experts by your side, we'll be with you every step of the way to ensure you make the right decision when securing your new home."
    ],
    benefitsTitle: "What are Benefits of Residential Mortgage?",
    benefitSubtitle:
      "Finding the right deal in residential mortgages is crucial, particularly as it's one of the biggest financial decisions you'll ever need to make. Here are some of the key aspects to consider:",

    benefitItems: [
      {
        title: "Interest Rates",
        description:
          "You'll encounter fixed-rate, variable-rate, or tracker options that all offer different levels of stability and flexibility.",
        icon: "TrendingUp"
      },
      {
        title: "Loan Term",
        description:
          "Shorter mortgage terms may mean higher monthly payments but lower overall interest costs.",
        icon: "Clock"
      },
      {
        title: "Deposit Size",
        description:
          "Larger deposits often result in better rates and lower monthly payments, as the amount being borrowed is lower.",
        icon: "PiggyBank"
      },
      {
        title: "Government Schemes",
        description:
          "You can explore Help to Buy or shared ownership schemes for assistance with deposits.",
        icon: "Building"
      },
      {
        title: "Specialist Mortgages",
        description:
          "There are also options for self-employed individuals or those with unique circumstances.",
        icon: "Award"
      }
    ],
    benefitsImage: "/images/mortgage/residential-mortgage1.jpg",
    features: [
      { title: "Fixed Rate Mortgages", description: "Lock in your monthly payments for a set period (typically 2-5 years), giving you certainty and protection against interest rate rises." },
      { title: "Variable Rate Mortgages", description: "Benefit from potentially lower initial rates that move with the lender's standard variable rate or the Bank of England base rate." },
      { title: "Tracker Mortgages", description: "Your rate tracks the Bank of England base rate plus a set percentage, offering transparency about how your rate is calculated." },
      { title: "Offset Mortgages", description: "Link your savings to your mortgage to reduce the interest you pay, while still having access to your savings when you need them." },
    ],
    faqs: [
      {
        question: "What is the difference between fixed and variable rate mortgages?",
        answer: "Fixed rate keeps your payments the same for a set period. Variable rate can go up or down with the lender?s SVR or Bank of England base rate."
      },
      {
        question: "Can self-employed people get a residential mortgage?",
        answer: "Yes. Lenders typically require 2?3 years of accounts or SA302 tax calculations. We have access to flexible lenders for self-employed applicants."
      }
    ],
    ctaTitle: "Looking for a Residential Mortgage?",
    ctaDescription: "Find the right mortgage for your home purchase with expert advice from Phoenix Finserv. Contact us for a free consultation."
  },
  {
    slug: "remortgage",
    title: "Remortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Optimise your finances with a remortgage. The Phoenix Finserv team can help you find competitive rates, flexible terms and expert guidance to achieve your financial goals.",
    whyTitle: "Why Remortgaging?",
    heroImage: "/images/mortgage/remortgage.jpg",
    // whyChooseImage: "/images/mortgage/remortgage1.jpg",
    whyContent: [
      "Homeowners may consider remortgaging for a variety of reasons, such as securing a more competitive rate, gaining greater flexibility, borrowing additional funds, or paying off their mortgage sooner. Changes in personal circumstances, like divorce, consolidating debts or an increase in property value, can also make remortgaging a suitable option. It can help you review your mortgage choices and manage potential interest rate changes, but it's important to carefully consider your individual circumstances.",

    ],
    benefitsTitle: "What are Benefits of Remortgage?",
    benefitSubtitle: "A remortgage offers a myriad of advantages, which is why 1.2 million people take this route in the UK each year, according to the FCA. Let's take at some of the benefits available to anyone looking to remortgage their property.",
    benefitItems: [
      {
        title: "Better Interest Rates",
        description: "The mortgage market offers a wide range of interest rates...",
        icon: "TrendingUp"
      },
      {
        title: "Improved Cash Flow",
        description: "By extending the term and potentially reducing monthly payments...",
        icon: "PiggyBank"
      },
      {
        title: "Access to Equity",
        description: "Using a remortgage to consolidate debt is increasingly common...",
        icon: "Shield"
      },
      {
        title: "Additional Perks",
        description: "Switching to a new mortgage deal may offer added benefits...",
        icon: "Award"
      },
      {
        title: "Adaptability",
        description: "Remortgaging can provide the flexibility to move to a mortgage deal...",
        icon: "Users"
      }
    ],
    benefitsImage: "/images/mortgage/remortgage1.jpg",
    features: [
      { title: "Rate Switch", description: "Move to a lower interest rate to reduce your monthly payments and save money over the life of your mortgage." },
      { title: "Equity Release", description: "Access the equity in your property for home improvements, investments, or other financial needs without selling your home." },
      { title: "Debt Consolidation", description: "Combine multiple debts into your mortgage for a single, more manageable monthly payment â€” though be aware this may increase the total amount you repay." },
      { title: "Term Adjustment", description: "Extend or reduce your mortgage term to adjust your monthly payments to suit your current financial situation." },
    ],
  faqs: [
      {
        question: "When is the best time to remortgage?",
        answer: "Usually when your current fixed deal is ending or when interest rates have dropped and you can secure a better deal."
      },
      {
        question: "Can I remortgage to release equity?",
        answer: "Yes. Many people remortgage to release equity for home improvements, debt consolidation or investments."
      }
    ],
    ctaTitle: "Thinking About Remortgaging?",
    ctaDescription: "Don't stay on a rate that's costing you money. Our advisers can help you find a better deal. Book your free remortgage review today."
  },
];


