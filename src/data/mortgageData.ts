export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}
export interface StampDutyCalculatorData {
  heading: string;
  description: string;
  boxTitle: string;
  boxDescription: string;
  buttonText?: string;       
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
  stampDutyCalculator?: StampDutyCalculatorData;
  offerDescription:string;
  
}




export const mortgageServices: ServiceItem[] = [
  {
    slug: "buy-to-let-mortgage",
    title: "Buy to Let Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Unlock the potential of property investment with tailored buy to let mortgage solutions designed to grow your portfolio and maximise returns",
    whyTitle: "Why have Buy to Let Mortgage?",
    heroImage: "/images/mortgage/buy-to-let-mortgage.webp",
    whyContent: [
      "Do you have an existing mortgage rate you're not happy with? Do you need to release equity to access funds for home improvements? There can be multiple reasons why a remortgage might be the path for you, but it's important to know the ramifications of doing so. That's where Phoenix Financial advisers can assist. Our team can help you compare mortgage deals and advise you on associated aspects like valuations, the fees involved and whether it makes financial sense for you. Remortgaging offers financial flexibility and we can give you the reassurance that it's the right decision for your unique set of circumstances.",

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
    benefitsImage: "/images/mortgage/buy-to-let-mortgage1.webp",
    offerDescription:"",
    features: [],
    faqs: [
      {
        question: "How many buy to let mortgages can I have?",
        answer: "There is no strict maximum limit on the number of buy-to-let mortgages you can have. However, most lenders will assess your portfolio as a whole, considering total borrowing, rental income and your experience as a landlord."
      },
      {
        question: "Do I need to have a minimum income?",
        answer: "Yes, most lenders require a minimum personal income (typically £25,000 - £30,000 per year) in addition to the rental income from the property. This helps demonstrate your ability to manage the mortgage if the property is vacant."
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
    ctaTitle: "Looking for Buy to Let mortgage?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of mortgage options. Contact us today to discuss your mortgage requirements and secure the ideal financing solution."
  },
  {
    slug: "first-time-buyer-mortgage",
    title: "First Time Buyer Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Looking for your first mortgage to get onto the property ladder? We can search across lenders using sourcing technology and give you tailored mortgage advice to suit your needs",
    whyTitle: "Why Choose First Time Buyer Mortgage?",
    heroImage: "/images/mortgage/first-time-buyer-mortgage.webp",
    whyContent: [
      "Buying your first home can feel both exciting and overwhelming, which is why having expert guidance can make the process easier. At Phoenix, we provide mortgage advice for first time buyers and will take the time to explain your options clearly, based on your circumstances.We work with a wide range of lenders, including many of the UK?s largest mortgage providers, to help identify products that may be suitable for your needs. Our aim is to support you in navigating the mortgage process with confidence, so you can take your next steps toward home ownership.",
    ],

    stampDutyCalculator: {
    heading: "Calculate Your Stamp Duty Instantly",
    description: "Confused about how much tax you'll pay on your new property? Our smart Stamp Duty Calculator instantly breaks down your costs - factoring in property value, location, and buyer type - so you know exactly what to budget before you buy.",
    boxTitle: "Stamp Duty Calculator",
    boxDescription: "Whether you're a first-time buyer, moving to a new home, or purchasing an additional property, use our stamp duty calculator to find out exactly what you have to pay.",
    buttonText: "Calculate Now",
  },
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
    benefitsImage: "/images/mortgage/first-time-buyer-mortgage1.webp",
    offerDescription:"First time buyer mortgages come in variety of forms. Each caters to different set of financial situations and preferences.They include",
    features: [
      {
        title: "Fixed - Rate Mortgages",
        description: "Offer a set interest rate for an agreed upon term, providing stability and predictable payments."
      },
      {
        title: "Variable - Rate Mortgages",
        description: "Interest rates fluctuate according to market conditions, and these mortgages may offer lower initial rates but with less predictability."
      },
      {
        title: "Tracker Mortgages",
        description: "Linked to the Bank of England's base rate, tracking its movements with a predetermined margin."
      },
      {
        title: "Right to Buy Scheme",
        description: "The Right to Buy scheme allows eligible council and housing association tenants in England to purchase their home at a discounted price."
      },
      {
        title: "Shared Ownership Mortgage",
        description: "Allows purchasing a share of a property and paying rent on the remaining share."
      },
      {
        title: "Guarantor Mortgage",
        description: "This option requires a guarantor, often a family member, who agrees to cover repayments if the borrower defaults."
      },
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
    ctaTitle: "Looking for First Time Buyer Mortgage?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of mortgage options. Contact us today to discuss your mortgage requirements and secure the ideal financing solution."
  },
  {
    slug: "residential-mortgage",
    title: "Residential Mortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Start your journey to home ownership with support from Phoenix Finserv. We work with a wide range of UK lenders to help you find a suitable mortgage and guide you through the process with confidence.",
    whyTitle: "Why Choose Residential Mortgage?",
    heroImage: "/images/mortgage/residential-mortgage.webp",
    // whyChooseImage: "/images/mortgage/residential-mortgage1.webp",

    whyContent: [
      "If you're looking to enter the residential property market, you need guidance to help you navigate your way past the pitfalls that many fall into. Whether you're a first time buyer or looking to remortgage, the Phoenix team can find the ideal solution for your needs.With so many options available, it can be very confusing and difficult to find the option that suits your circumstances and goals. However, with our experts by your side, we'll be with you every step of the way to ensure you make the right decision when securing your new home."
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
    benefitsImage: "/images/mortgage/residential-mortgage1.webp",
    offerDescription:"Whether you're stepping onto the property ladder or moving home, our residential mortgages provide flexibility and guidance at every stage.",
   features: [
  { 
    title: "Fixed - Rate Mortgages", 
    description: "Offer stability with a set interest rate that remains unchanged, no matter what happens to prevailing mortgage rates." 
  },
  { 
    title: "Discount Mortgages", 
    description: "Offer a discount on the lender's standard variable rate for a set period, after which you're free to switch products." 
  },
  { 
    title: "Variable - Rate Mortgages", 
    description: "Interest rates fluctuate according to market conditions, and these mortgage products fluctuate with them." 
  },
  { 
    title: "Offset Mortgages", 
    description: "These mortgages allow you to offset savings against your mortgage balance to reduce interest payments." 
  },
  { 
    title: "Tracker Mortgages", 
    description: "These products are linked to the Bank of England's base rate and track its movements with a margin (typically 1% - 2%)." 
  },
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
    ctaTitle: "Looking for Residential Mortgage?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of mortgage options. Contact us today to discuss your mortgage requirements and secure the ideal financing solution."
  },
  {
    slug: "remortgage",
    title: "Remortgage",

    heroSubtitle: "Mortgage",
    heroDescription: "Optimise your finances with a remortgage. The Phoenix Finserv team can help you find competitive rates, flexible terms and expert guidance to achieve your financial goals.",
    whyTitle: "Why Remortgaging?",
    heroImage: "/images/mortgage/remortgage.webp",
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
    benefitsImage: "/images/mortgage/remortgage1.webp",
    offerDescription:"",
    features: [],
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
    ctaTitle: "Looking for Remortgage?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of mortgage options. Contact us today to discuss your mortgage requirements and secure the ideal financing solution."
  },
];


