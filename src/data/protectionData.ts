export interface BenefitItem {
  title: string;
  description: string;
  icon: string;

}


export interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  howItWorksTitle?: string;        
  howItWorksContent?: string[];
  benefitsTitle: string;
  benefitItems: BenefitItem[];
  features: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  heroImage: string;
  benefitsImage?: string;
  benefitSubtitle?: string;
  offerDescription:string;

}

export const personalProtectionServices: ServiceItem[] = [
  {
    slug: "life-cover",
    title: "Life Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Protect your family's financial future with comprehensive life insurance that provides a tax-free lump sum or regular income upon death, ensuring your loved ones are supported when they need it most.",
    whyTitle: "Why Choose Life Cover?",
    heroImage: "/images/protection/life-cover1.webp",
    whyContent: [
      "Would your family be able to cope financially if you were to unexpectedly pass away? Despite 6 out of 10 UK adults saying that life cover would benefit them and their loved ones, only 35% have a policy in place. Life cover represents the cornerstone of any comprehensive protection planning strategy, and the Phoenix team of experts is here to help.",
    ],
    howItWorksTitle: "How does Life Cover Work?",
    howItWorksContent: [
      "It offers a predetermined lump sum or monthly income that becomes payable in the event that you die or if a medical doctor believes you have less than 12 months to live. The money paid out from the policy not only helps those closest to you with their day to day living costs but also allows them to take care of your funeral expenses and any outstanding debts you might have."
    ],
    benefitsTitle: "Which Life Cover Option Best Meets your Needs?",

    benefitSubtitle: "When discussing life insurance quotes with our experienced advisers at Phoenix, you?ll receive tailored guidance to help answer the all important question: Which life insurance is right for me? As part of our advice process, we take the time to understand your individual needs and circumstances, considering the following:",
    benefitItems: [
      {
        title: "Secure your financial future",
        description: "Your financial obligations, such as debts, income replacement, and future expenses.",
        icon: "Shield"
      },
      {
        title: "Decreasing Term Assurance",
        description: "Often used to cover a repayment mortgage, the payout amount decreases over time in line with your outstanding mortgage balance. This ensures that your mortgage can be paid off in full if you pass away, while keeping premiums more affordable than level term cover.",
        icon: "TrendingDown"
      },
      {
        title: "Family Income Benefit",
        description: "Instead of a single lump sum, this policy provides a regular, tax-free income for your family for the remainder of the policy term. It's designed to help replace your earnings and cover ongoing living costs like school fees or bills, providing peace of mind that your family's lifestyle is protected.",
        icon: "Users"
      },
      {
        title: "Whole of Life Cover",
        description: "Unlike term insurance, Whole of Life cover lasts for your entire lifetime and is guaranteed to pay out whenever you die, provided premiums are maintained. It's often used for inheritance tax planning or ensuring there's a legacy left for your loved ones, regardless of when the time comes.",
        icon: "Heart"
      }
    ],
    benefitsImage: "/images/protection/life-cover2.webp",
   features: [
      {
        title: "Term Assurance",
        description: "Term Assurance provides cover for a fixed period, such as ten years or up to a specific age. A payout is made if the insured person dies or is diagnosed with a terminal illness during this term. There are two main types: Level Term Assurance (benefit remains constant) and Decreasing Term Assurance (benefit reduces over time, often used with repayment mortgages)."
      },
      {
        title: "Whole Life Cover",
        description: "Whole of Life cover provides protection for the entirety of your lifetime, with a guaranteed payout upon death. Unlike Term Assurance, Whole of Life cover ensures a payout whenever you pass away, as long as your premiums have been maintained throughout."
      },
      {
        title: "Joint Life Cover",
        description: "A policy that covers a couple (married or cohabitees), typically paying out on the first partner's death. Available as either term or whole of life. Can also be arranged to pay on the second death, making it useful for Inheritance Tax Planning."
      },
      {
        title: "An Over 50s Plan",
        description: "Over 50's Plans are suitable for people over the age of 50 who have pre-existing health conditions. This policy offers guaranteed acceptance for those aged 50-80 without medical underwriting and provides a fixed lump sum on death."
      }
    ],
    faqs: [
      {
        question: "Do I need financial advice on how to cash in my pension pot?",
        answer: "Deciding how to access your pension is a major financial decision. Our advisers can explain your options?including drawdowns, annuities, or lump sums?to help you make the best choice for your retirement goals."
      },
      {
        question: "What is the difference between an SIPP and a personal pension?",
        answer: "A Self-Invested Personal Pension (SIPP) offers a wider range of investment options compared to a standard personal pension, giving you more control over where your money is invested."
      },
      {
        question: "Can I withdraw my pension before 55?",
        answer: "In most cases, you cannot access your pension before age 55 (rising to 57 in 2028) without facing significant tax penalties, unless you are in ill health."
      },
      {
        question: "Do I get my husband's state pension when he dies?",
        answer: "Inheriting a state pension depends on several factors, including when you and your spouse reached state pension age. We can help you understand your specific entitlements."
      }
    ],
    
    ctaTitle: "Looking for Life Cover?",
    ctaDescription: "Our expert advisers can help you find the right policy for your family's needs.",
    offerDescription: "Comprehensive Life Insurance Solutions"
  },
  {
    slug: "critical-illness-cover",
    title: "Critical Illness Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Receive a tax-free lump sum payment upon diagnosis of a specified critical illness, providing the financial support you need to focus on recovery without worrying about bills or mortgage payments.",
    whyTitle: "Why Consider Critical Illness Cover?",
    heroImage: "/images/protection/critical-illness-cover.webp",
    whyContent: [
      "If you were diagnosed with a serious illness, would your focus be on your recovery or on how you would pay your bills? Critical illness cover is designed to alleviate financial stress by providing a lump sum payment if you're diagnosed with a specified serious condition, such as cancer, heart attack, or stroke. This money can be used to pay off your mortgage, cover medical expenses, or adapt your home, allowing you to focus entirely on getting better."
    ],
    benefitsTitle: "How Critical Illness Cover Supports You",
    benefitSubtitle: "When you choose critical illness cover through Phoenix, you gain a vital safety net that offers more than just financial support. Our policies are tailored to provide comprehensive protection during life's most challenging times.",
    benefitItems: [
      {
        title: "Financial Independence",
        description: "The tax-free lump sum gives you the freedom to choose how to use the funds, whether it's for private medical treatment, paying off debts, or simply covering day-to-day expenses while you're unable to work.",
        icon: "Banknote"
      },
      {
        title: "Mortgage Protection",
        description: "Ensure your home is secure by using the payout to clear or significantly reduce your mortgage balance, removing one of the biggest financial burdens during your recovery.",
        icon: "Home"
      },
      {
        title: "Children's Cover",
        description: "Many of our policies include automatic cover for your children at no extra cost, providing a lump sum if they are diagnosed with a critical illness, helping you support them when they need you most.",
        icon: "Baby"
      },
      {
        title: "Total and Permanent Disability",
        description: "Provides additional security by paying out if you become totally and permanently disabled due to an illness or injury, ensuring long-term financial support is in place.",
        icon: "Accessibility"
      }
    ],
    benefitsImage: "/images/protection/critical-illness-cover1.webp",
    features: [],
    faqs: [
      {
        question: "Do I need financial advice on how to cash in my pension pot?",
        answer: "Deciding how to access your pension is a major financial decision. Our advisers can explain your options?including drawdowns, annuities, or lump sums?to help you make the best choice for your retirement goals."
      },
      {
        question: "What is the difference between an SIPP and a personal pension?",
        answer: "A Self-Invested Personal Pension (SIPP) offers a wider range of investment options compared to a standard personal pension, giving you more control over where your money is invested."
      },
      {
        question: "Can I withdraw my pension before 55?",
        answer: "In most cases, you cannot access your pension before age 55 (rising to 57 in 2028) without facing significant tax penalties, unless you are in ill health."
      },
      {
        question: "Do I get my husband's state pension when he dies?",
        answer: "Inheriting a state pension depends on several factors, including when you and your spouse reached state pension age. We can help you understand your specific entitlements."
      }
    ],
    ctaTitle: "Looking for Critical Illness Cover?",
    ctaDescription: "Speak to our experts to ensure you have the right protection in place.",
    offerDescription: "Secure Your Future Against Serious Illness"
  },
  {
    slug: "income-protection",
    title: "Income Protection",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Protect your most valuable asset?your ability to earn an income. Income protection provides a regular monthly payment if you're unable to work due to illness or injury, ensuring your lifestyle remains secure.",
    whyTitle: "Why Choose Phoenix Finserv for Income Protection?",
    heroImage: "/images/protection/income.webp",
    whyContent: [
      "Your lifestyle, home, and future plans all depend on your ability to earn an income. If an accident or illness prevented you from working, how long could you survive on your savings? Income protection acts as a financial safety net, providing a regular, tax-free replacement income until you're able to return to work or reach retirement age. It's about maintaining your independence and ensuring that a temporary setback doesn't lead to a permanent financial crisis."
    ],
    benefitsTitle: "Comprehensive Income Security",
    benefitSubtitle: "Income protection provides a financial safety net if you're unable to work due to illness or injury for an extended period (typically four weeks or more). A standard income protection policy covers loss of income resulting from medical conditions but does not provide cover for unemployment due to redundancy or dismissal. If your GP confirms that you're unfit for work, you may be eligible to claim?subject to policy terms and any exclusions. However, securing the right level of cover that pays out when you need it is something best discussed with your Phoenix adviser. Some of the most common reasons for income protection claims include:-",
    benefitItems: [
      {
        title: "Long-Term Support",
        description: "Policies can pay out until you're fit to return to work or until the end of the policy term, which can be set to your expected retirement age, providing true long-term security.",
        icon: "Calendar"
      },
      {
        title: "Flexible Waiting Periods",
        description: "Choose a 'deferred period' that matches your employer's sick pay arrangements, helping to keep premiums affordable while ensuring cover starts when you need it.",
        icon: "Clock"
      },
      {
        title: "Multiple Claims",
        description: "You can claim as many times as you need to throughout the policy term, provided you meet the criteria, ensuring ongoing protection for your entire career.",
        icon: "Repeat"
      },
      {
        title: "Waiver of Premium",
        description: "Many policies include a feature that pays your premiums for you while you're receiving a claim, ensuring your cover remains in force when money is tight.",
        icon: "FileCheck"
      }
    ],
    benefitsImage: "/images/protection/income2.webp",
    features: [],
    faqs: [
      {
        question: "Do I need financial advice on how to cash in my pension pot?",
        answer: "Deciding how to access your pension is a major financial decision. Our advisers can explain your options?including drawdowns, annuities, or lump sums?to help you make the best choice for your retirement goals."
      },
      {
        question: "What is the difference between an SIPP and a personal pension?",
        answer: "A Self-Invested Personal Pension (SIPP) offers a wider range of investment options compared to a standard personal pension, giving you more control over where your money is invested."
      },
      {
        question: "Can I withdraw my pension before 55?",
        answer: "In most cases, you cannot access your pension before age 55 (rising to 57 in 2028) without facing significant tax penalties, unless you are in ill health."
      },
      {
        question: "Do I get my husband's state pension when he dies?",
        answer: "Inheriting a state pension depends on several factors, including when you and your spouse reached state pension age. We can help you understand your specific entitlements."
      }
    ],
    ctaTitle: "Looking for Income Protection?",
    ctaDescription: "Ensure your earnings are protected. Speak to our advisers today.",
    offerDescription: "Safeguard Your Earning Potential"
  }
];

export const businessProtectionServices: ServiceItem[] = [
  {
    slug: "keyman-protection",
    title: "Key Person Protection",
    category: "Business Protection",
    heroSubtitle: "Protection",
    heroDescription: "Protect your business from the financial impact of losing a key individual. Key person insurance provides a cash injection to help manage recruitment, cover lost profits, or repay business debts.",
    whyTitle: "Why have Key Person Insurance?",
    heroImage: "/images/protection/keyman-cover.webp",
    whyContent: [
      "Most companies insure their buildings and physical assets against risks such as fire, flood, theft and equipment breakdown. However, they often overlook their most valuable asset: the key individuals at the top of the organisation who drive critical business functions. Without these people, the business could face serious disruption?and in some cases, may struggle to survive."
    ],
    benefitsTitle: "What are the Benefits of Key Person Protection Cover?",
    benefitSubtitle: "A question we're often asked is, \"Why is key person insurance important?\" Recent research shows that more than half of businesses would cease trading within 12 months if a key employee were to pass away or become critically ill. That alone is a compelling reason to consider this type of cover.",
    benefitItems: [
      {
        title: "Business Continuity",
        description: "Provides the necessary funds to recruit and train a replacement, ensuring your business operations can continue with minimal disruption.",
        icon: "Briefcase"
      },
      {
        title: "Profit Protection",
        description: "Helps offset the loss of profits that may occur following the absence of a key person who generates significant revenue for the company.",
        icon: "LineChart"
      },
      {
        title: "Debt Repayment",
        description: "Ensures that business loans or overdrafts can be repaid if the person responsible for the business's financial stability is no longer there.",
        icon: "CreditCard"
      },
      {
        title: "Confidence for Stakeholders",
        description: "Demonstrates to investors, banks, and employees that the business has a robust plan in place for unforeseen circumstances.",
        icon: "UserCheck"
      }
    ],
    benefitsImage:"/images/protection/keyman-cover1.webp",
    features: [],
  
    faqs: [
      {
        question: "What is the difference between Key Person Cover and Shareholder Protection?",
        answer: "Key person insurance helps protect the business against the loss of a vital individual whose absence could affect profitability. In contrast, shareholder protection specifically addresses ownership continuity?ensuring that if a shareholder exits due to death or illness, the remaining owners can retain control and minimise disruption to the business."
      },
      {
        question: "What are the main benefits of Key Person Insurance?",
        answer: "The primary benefits include safeguarding business continuity, protecting profits, providing funds for recruitment, and ensuring that business debts can be settled in the event of losing a key team member."
      }
    ],
    ctaTitle: "Looking for Keyman Cover?",
    ctaDescription: "Protect your business's most valuable assets. Contact our business experts.",
    offerDescription: "Strategic Business Continuity Solutions"
  },
  {
    slug: "shareholder-protection",
    title: "Shareholder Protection",
    category: "Business Protection",
    heroSubtitle: "Protection",
    heroDescription: "Ensure business continuity and protect ownership. Shareholder protection provides the funds for remaining owners to buy out a departing shareholder's interest, maintaining control and stability.",
    whyTitle: "Why have Shareholder Protection Cover?",
    heroImage: "/images/protection/shareholder-protection1.webp",
    whyContent: [
      "There's a common misconception that shareholder protection and directors' insurance are the same. In reality, they are distinctly different forms of business cover. Shareholder protection is designed to safeguard business owners in the event of a shareholder's death or diagnosis of a critical illness, whereas directors' insurance typically relates to indemnity or liability risks associated with a director's role. Shareholder protection is also often confused with key person insurance. While both aim to mitigate financial risks, they serve different purposes. Key person insurance helps protect the business against the loss of a vital individual whose absence could affect profitability. In contrast, shareholder protection specifically addresses ownership continuity?ensuring that if a shareholder exits due to death or illness, the remaining owners can retain control and minimise disruption to the business."
    ],
    benefitsTitle: "What are Benefits of Shareholder Protection Cover?",
    benefitSubtitle: "Protecting the ownership of your business is critical. Our shareholder protection solutions ensure that you retain control while providing fair value to a departing shareholder's family.",
    benefitItems: [
      {
        title: "Retention of Control",
        description: "Provides the funds needed for surviving shareholders to purchase the deceased or ill shareholder's shares, preventing them from passing to outside parties.",
        icon: "Key"
      },
      {
        title: "Fair Value for Families",
        description: "Ensures the departing shareholder's family receives a fair market value for their shares promptly, providing them with financial security.",
        icon: "Scale"
      },
      {
        title: "Business Stability",
        description: "Avoids the need for the business to use its own capital or take on debt to buy out a shareholder, protecting its financial health.",
        icon: "BarChart3"
      },
      {
        title: "Pre-Agreed Process",
        description: "Works alongside a legal agreement to provide a clear, pre-defined process for share transfers, reducing the potential for disputes.",
        icon: "Gavel"
      }
    ],
  features: [],
    faqs: [
      {
        question: "What Is the difference between Key person Cover and Shareholder Protection?",
        answer: "There's a common misconception that shareholder protection and directors' insurance are the same. In reality, they are distinctly different forms of business cover. Shareholder protection is designed to safeguard business owners in the event of a shareholder's death or diagnosis of a critical illness, whereas directors' insurance typically relates to indemnity or liability risks. Shareholder protection specifically addresses ownership continuity."
      },
      {
        question: "Who Pays for Shareholder Protection?",
        answer: "Typically, the premiums are paid by the individual shareholders or the company, depending on how the policy is structured (e.g., life of another or company-owned)."
      },
      {
        question: "Do I need a shareholder agreement along with the insurance?",
        answer: "Yes, a legal agreement (like a cross-option agreement) is essential to ensure that the insurance payout is used correctly to facilitate the share transfer."
      }
    ],
    ctaTitle: "Looking for Shareholder Protection?",
    ctaDescription: "Secure the future ownership of your business. Speak to our specialists.",
    offerDescription: "Ownership & Control Protection"
  },
  {
    slug: "relevant-life-cover",
    title: "Relevant Life Cover",
    category: "Business Protection",
    heroSubtitle: "Protection",
    heroDescription: "A tax-efficient way for businesses to provide life cover for employees. Relevant life cover offers significant savings for both employers and employees compared to personal life insurance.",
    whyTitle: "Why have Relevant Life Cover?",
    heroImage: "/images/protection/relevant-life-cover.webp",
    whyContent: [
      "Relevant life policies are a form of employer-funded life cover that provides a 'death-in-service' style benefit to eligible employees. These policies are taken out by the business on the life of an individual employee and are typically written into trust, ensuring that any payout is made directly to the employee's nominated beneficiaries. Importantly, the benefit cannot be paid to the company.",
      "At Phoenix Financial Advisers Limited, we can help you set up relevant life cover tailored to your business needs. A payout is triggered if the insured employee dies or is diagnosed with a terminal illness during the term of the policy. Premiums paid by the employer are generally considered an allowable expense for Corporation Tax purposes. From the employee's perspective, there is no income tax liability on the premiums, as they are not treated as a benefit in kind. Additionally, for most individuals, any payout from the policy will be free from income tax and inheritance tax, subject to current HMRC rules and the correct trust structure being in place."
    ],
    benefitsTitle: "What are Benefits of Relevant Life Cover?",
    benefitSubtitle: "So, why should you consider obtaining a relevant life insurance quote for your employees? Well, there's a variety of advantages to be enjoyed by both employers and employees, which break down in the following way:",
    benefitItems: [
      {
        title: "Significant Tax Savings",
        description: "Premiums are usually tax-deductible for the business and are not treated as a benefit in kind for the employee, saving up to 50% compared to personal cover.",
        icon: "Coins"
      },
      {
        title: "Attract & Retain Talent",
        description: "Provides a valuable employee benefit that helps attract and retain high-quality staff by showing you care for their family's future.",
        icon: "UserPlus"
      },
      {
        title: "Personalised Protection",
        description: "Allows you to provide tailored levels of cover for specific employees, outside of a standard group life scheme.",
        icon: "UserCheck"
      },
      {
        title: "IHT Efficiency",
        description: "When written in trust, the payout typically sits outside the employee's estate for inheritance tax purposes.",
        icon: "PiggyBank"
      }
    ],
    benefitsImage:"/images/protection/relevant-life-cover1.webp",
    features: [],
    faqs: [
      {
        question: "Who owns a relevant life plan?",
        answer: "The policy is owned by the business, but it's held in a special trust for the benefit of the employee's chosen beneficiaries."
      },
      {
        question: "Can a sole trader have relevant life cover?",
        answer: "No, relevant life cover is only available to limited companies (and some other corporate structures) for their employees and directors."
      },
      {
        question: "Is Relevant Life Cover tax-free?",
        answer: "Yes, in most cases, the payout is free from both income tax and inheritance tax when correctly structured through a trust."
      }
    ],
    ctaTitle: "Looking for Relevant Life Cover?",
    ctaDescription: "Save on tax while protecting your team. Get a tailored quote today.",
    offerDescription: "Tax-Efficient Employee Protection"
  },
  {
    slug: "business-loan-protection",
    title: "Business Loan Protection",
    category: "Business Protection",
    heroSubtitle: "Protection",
    heroDescription: "Ensure your business debts are covered. Business loan protection provides the funds to repay outstanding loans, overdrafts, or commercial mortgages if a key person dies or becomes ill.",
    whyTitle: "Why Consider Business Loan Protection?",
    heroImage: "/images/protection/Business-Loan-Protection.webp",
    whyContent: [
      "Most businesses rely on some form of borrowing to grow or manage cash flow. But what would happen if the person responsible for repaying those debts was no longer there? Business loan protection ensures that your company's financial obligations don't become a burden on the remaining owners or the family of the deceased. It's about protecting the business's credit rating and ensuring its long-term survival by removing the pressure of debt during a difficult time."
    ],
    benefitsTitle: "What are the Benefits of Business Loan Protection Cover?",
    benefitSubtitle: "Don't let business debt threaten your company's future. Our protection solutions provide the security you need to borrow with confidence.",
    benefitItems: [
      {
        title: "Debt Clearance",
        description: "Provides a lump sum specifically designed to pay off commercial mortgages, loans, or director's loan accounts.",
        icon: "Receipt"
      },
      {
        title: "Protects Personal Guarantees",
        description: "Ensures that personal assets used as security for business loans are protected if the loan cannot be repaid by the business.",
        icon: "Lock"
      },
      {
        title: "Maintains Credit Standing",
        description: "Allows the business to settle its debts promptly, maintaining its reputation with lenders and suppliers.",
        icon: "BadgeCheck"
      },
      {
        title: "Reduces Financial Pressure",
        description: "Removes the immediate need to find large sums of capital or increase revenue to cover debt repayments after a loss.",
        icon: "ThumbsUp"
      }
    ],
    features: [],
    benefitsImage:"/images/protection/Business-Loan-Protection1.webp",
    faqs: [
      {
        question: "What is covered by business loan protection?",
        answer: "It can cover various business debts, including commercial mortgages, bank loans, overdrafts, and director's loan accounts."
      },
      {
        question: "Should I write my business loan cover into trust?",
        answer: "Yes, it's often recommended to write the policy into trust for the benefit of the business or to clear specific debts quickly."
      },
      {
        question: "Does Business Loan Protection cover critical illness?",
        answer: "Yes, you can add critical illness cover to ensure the loan can be repaid if a key person is diagnosed with a serious illness but survives."
      }
    ],
    ctaTitle: "Looking for Business Loan Protection?",
    ctaDescription: "Protect your business from the burden of debt. Speak to our advisers.",
    offerDescription: "Financial Stability & Debt Security"
  }
];

export const homeInsuranceServices: ServiceItem[] = [
  {
    slug: "buildings-contents",
    title: "Buildings & Contents",
    category: "General Insurance",
    heroSubtitle: "Insurance",
    heroDescription: "Protect your most valuable assets. Our comprehensive buildings and contents insurance provides peace of mind for your home, protecting you against fire, theft, flood, and accidental damage.",
    whyTitle: "Why Choose Buildings and Contents Cover?",
    heroImage: "/images/protection/Buildings&Contents.webp",
    whyContent: [
      "Your home is likely your biggest financial investment and the place where your family feels safest. But unexpected events like storms, floods, or burglaries can happen. Buildings and contents insurance isn't just a mortgage requirement; it's about ensuring you have the funds to rebuild your home or replace your belongings if the worst happens. At Phoenix, we help you find comprehensive cover that doesn't just look for the cheapest price, but provides the right protection for your specific property and lifestyle."
    ],
    benefitsTitle: "What are Benefits of Buildings and Contents Cover?",
    benefitSubtitle: "Get more than just basic cover. Our insurance solutions offer broad protection for your home and everything inside it.",
    benefitItems: [
      {
        title: "Full Rebuilding Cost",
        description: "Ensures you have enough cover to completely rebuild your home from scratch, including professional fees and site clearance.",
        icon: "Hammer"
      },
      {
        title: "New-for-Old Contents",
        description: "Replaces stolen or damaged items with brand-new equivalents, rather than just paying their current second-hand value.",
        icon: "ShoppingBag"
      },
      {
        title: "Accidental Damage",
        description: "Optional cover for those everyday mishaps, like spilling wine on the carpet or putting a foot through the ceiling.",
        icon: "ZapOff"
      },
      {
        title: "Alternative Accommodation",
        description: "Provides the funds for you and your family to stay in a hotel or rented home if your property becomes uninhabitable due to a claim.",
        icon: "Bed"
      }
    ],
    benefitsImage:"/images/protection/Buildings&Contents.webp",
    features: [],
    faqs: [
      {
        question: "What is the difference between Buildings and Contents Insurance?",
        answer: "Buildings insurance covers the structure of your home (walls, roof, fixtures), while contents insurance covers the things you'd take with you if you moved house (furniture, tech, clothes)."
      },
      {
        question: "Is accidental damage covered?",
        answer: "Accidental damage is often an optional add-on that covers unintentional harm, like breaking a window or damaging a TV."
      },
      {
        question: "Does home insurance cover flooding?",
        answer: "Most standard policies cover flood damage, but the terms can vary depending on your property's location and risk level."
      },
      {
        question: "Can I cover high-value items like jewellery?",
        answer: "Yes, most policies allow you to specify high-value items to ensure they are fully covered, even when you take them outside the home."
      }
    ],
    ctaTitle: "Looking for Buildings & Contents Insurance?",
    ctaDescription: "Get a quote that truly protects your home. Contact our general insurance team.",
    offerDescription: "Comprehensive Home Asset Protection"
  }
];
