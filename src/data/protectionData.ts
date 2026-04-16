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
  howItWorksTitle?: string;        // ?? NEW FIELD for "How does X Work?"
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

}

export const personalProtectionServices: ServiceItem[] = [
  {
    slug: "life-cover",
    title: "Life Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Protect your family's financial future with comprehensive life insurance that provides a tax-free lump sum or regular income upon death, ensuring your loved ones are supported when they need it most.",
    whyTitle: "Why Choose Life Cover?",
    heroImage: "/images/protection/life-cover1.jpg",
    whyContent: [
      "Would your family be able to cope financially if you were to unexpectedly pass away? Despite 6 out of 10 UK adults saying that life cover would benefit them and their loved ones, only 35% have a policy in place. Life cover represents the cornerstone of any comprehensive protection planning strategy, and the Wealthmax team of experts is here to help.",
    ],
    howItWorksTitle: "How does Life Cover Work?",
    howItWorksContent: [
      "It offers a predetermined lump sum or monthly income that becomes payable in the event that you die or if a medical doctor believes you have less than 12 months to live. The money paid out from the policy not only helps those closest to you with their day to day living costs but also allows them to take care of your funeral expenses and any outstanding debts you might have."
    ],
    benefitsTitle: "Which Life Cover Option Best Meets your Needs?",

    benefitSubtitle: "When discussing life insurance quotes with our experienced advisers at Wealthmax, you?ll receive tailored guidance to help answer the all important question: Which life insurance is right for me? As part of our advice process, we take the time to understand your individual needs and circumstances, considering the following:",
    benefitItems: [
      {
        title: "Secure your financial future",
        description: "Your financial obligations, such as debts, income replacement, and future expenses.",
        icon: "Shield"
      },
      {
        title: "Balance cover and cost",
        description: "The budget you're working with to determine what you can afford monthly.",
        icon: "PieChart"
      },
      {
        title: "Set your payout preference",
        description: "You can choose to make a lump sum payment, ongoing payments, or a combination of both.",
        icon: "HandCoins"
      },
      {
        title: "Plan for lifelong cover",
        description: "Your permanent coverage and estate planning requirements.",
        icon: "Umbrella"
      },
      {
        title: "Cover your mortgage needs",
        description: "Whether you have a mortgage that will need to be paid off.",
        icon: "Home"
      },
      {
        title: "Plan by health and age",
        description: "Your current state of health and age.",
        icon: "Heart"
      }
    ],
    benefitsImage: "/images/protection/life-cover2.jpg",
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
        description: "Over 50?s Plans are suitable for people over the age of 50 who have pre-existing health conditions. This policy offers guaranteed acceptance for those aged 50-80 without medical underwriting and provides a fixed lump sum on death."
      }
    ],
    faqs: [
      {
        question: "Do I need financial advice on how to cash in my pension pot?",
        answer: "If your pension pot is worth £30,000 or more, it's strongly recommended to seek regulated financial advice before making any withdrawal decisions. Our advisers can help you understand tax implications and ensure you make the most of your savings.",
      },
      {
        question: "What is the difference between an SIPP and a personal pension?",
        answer: "A Self-Invested Personal Pension (SIPP) gives you more control over your investments compared to a standard personal pension. With a SIPP, you can choose from a wider range of investments including stocks, bonds, and commercial property.",
      },
      {
        question: "Can I withdraw my pension before 55?",
        answer: "In most cases, you cannot access your pension before the age of 55 (rising to 57 from 2028). Early access schemes that promise otherwise are often scams. There are limited exceptions, such as serious ill health.",
      },
      {
        question: "Do I get my husband's state pension when he dies?",
        answer: "You may be able to inherit some of your spouse's or civil partner's state pension, depending on when they reached State Pension age and your own circumstances. Our advisers can help you understand your entitlements.",
      },
    ],
    ctaTitle: "Looking for Life Cover?",
    ctaDescription: "Our advisers are experienced in helping individuals and families find the right life cover. Contact us today for a free, no-obligation consultation."
  },
  {
    slug: "critical-illness",
    title: "Critical Illness Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Receive a tax-free lump sum if you're diagnosed with a specified critical illness, helping you focus on recovery without the added stress of financial worries.",
    heroImage: "/images/protection/critical-illness-cover.jpg",
    whyTitle: "Why Consider Critical Illness Cover?",
    whyContent: [
      "According to Cancer Research UK, one in two people will be diagnosed with cancer at some point in their lifetime. Figures published by the Association of British Insurers show that in 2022,  £1.27 billion was paid out in critical illness claims. This type of cover can offer a valuable financial safety net for individuals and their families, providing breathing space during difficult times especially when illness prevents someone from working and adds emotional and financial strain.",

    ],

    howItWorksTitle: undefined,
    howItWorksContent: undefined,
    benefitsTitle: "The Various Conditions Covered by Critical Illness Policies",
    benefitSubtitle: "When discussing critical illness cover with a WealthMax financial adviser, you'll discover that most policies provide financial protection against a range of major health issues. The number of conditions covered can vary from as little as three up to 60 to 70 illnesses, depending on the insurance company. That said, the majority will typically include the following",
    benefitItems: [
      {
        title: "Cancer: Specific Types & Stages",
        description: "Financial support if diagnosed with cancer",
        icon: "Ribbon"
      },
      {
        title: "Stroke: Resulting in permanent symptoms",
        description: "Protection if a stroke leaves lasting disabilities",
        icon: "Brain"
      },
      {
        title: "Paralysis",
        description: "Support if you lose mobility due to Paralysis",
        icon: "Accessibility"
      },
      {
        title: "Organ Transplants",
        description: "Support for expenses related to organ transplants",
        icon: "Stethoscope"
      },
      {
        title: "Loss of a hand or foot",
        description: "Assistance if you lose a limb",
        icon: "Hand"
      },
      {
        title: "Clinically Diagnosed Heart Attack",
        description: "Cover provided upon diagnosis of a heart attack",
        icon: "Heart"
      },
      {
        title: "Deafness",
        description: "Financial protection if you face difficulty with hearing",
        icon: "Ear"
      },
      {
        title: "Blindness",
        description: "Support if you lose your eyesight",
        icon: "Eye"
      }
    ],
    benefitsImage: "/images/protection/critical-illness-cover1.jpg",
    features: [],
    faqs: [
      {
        question: "Do I need financial advice on how to cash in my pension pot?",
        answer: "If your pension pot is worth �30,000 or more, it's strongly recommended to seek regulated financial advice before making any withdrawal decisions. Our advisers can help you understand tax implications and ensure you make the most of your savings.",
      },
      {
        question: "What is the difference between an SIPP and a personal pension?",
        answer: "A Self-Invested Personal Pension (SIPP) gives you more control over your investments compared to a standard personal pension. With a SIPP, you can choose from a wider range of investments including stocks, bonds, and commercial property.",
      },
      {
        question: "Can I withdraw my pension before 55?",
        answer: "In most cases, you cannot access your pension before the age of 55 (rising to 57 from 2028). Early access schemes that promise otherwise are often scams. There are limited exceptions, such as serious ill health.",
      },
      {
        question: "Do I get my husband's state pension when he dies?",
        answer: "You may be able to inherit some of your spouse's or civil partner's state pension, depending on when they reached State Pension age and your own circumstances. Our advisers can help you understand your entitlements.",
      },
    ],
    ctaTitle: "Need Critical Illness Cover?",
    ctaDescription: "Protect yourself and your family from the financial impact of a serious illness. Speak to our advisers today for expert guidance.",
  },
  {
    slug: "income-protection",
    title: "Income Protection",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Replace a portion of your income if you're unable to work due to illness or injury, ensuring your financial commitments are met during the most difficult times.",
    whyTitle: "Why Choose Phoenix Finserv for Income Protection?",
    heroImage: "/images/protection/income.jpg",
    // whyChooseImage: "/images/protection/income2.jpg",
    whyContent: [
      "Your income is your most valuable asset. If illness or injury prevents you from working, income protection insurance ensures you still receive a regular monthly payment £ typically between 50% and 70% of your gross salary £ until you're able to return to work or reach retirement age.",
      "Unlike critical illness cover, which pays a one-off lump sum, income protection provides ongoing financial support for as long as you're unable to work. This makes it an essential part of any comprehensive financial plan.",
      "At Phoenix Finserv, we help you find an income protection policy that fits your budget and provides the level of cover you need. We explain the different options available, including short-term and long-term policies, and help you understand deferred periods, benefit amounts, and policy terms."
    ],
    howItWorksTitle: undefined,
    howItWorksContent: undefined,
    benefitsTitle: "Conditions Commonly Covered by Income Protection",
    benefitSubtitle: "Income protection provides a financial safety net if you're unable to work due to illness or injury for an extended period (typically four weeks or more). A standard income protection policy covers loss of income resulting from medical conditions but does not provide cover for unemployment due to redundancy or dismissal. If your GP confirms that you're unfit for work, you may be eligible to claim?subject to policy terms and any exclusions. However, securing the right level of cover that pays out when you need it is something best discussed with your Wealthmax adviser. Some of the most common reasons for income protection claims include:-",
    benefitItems: [
      {
        title: "Back and Joint Problems",
        description: "Bad backs and joint problems, which can also include chronic conditions such as arthritis",
        icon: "Bone"
      },
      {
        title: "Accidents leading to disability",
        description: "Support if an accident leaves you with a lasting disability",
        icon: "Wheelchair"
      },
      {
        title: "Torn ligaments, ruptured tendons and broken bones",
        description: "Help during bone and muscle injuries",
        icon: "BandAid"
      },
      {
        title: "Chronic conditions that affect your ability to work",
        description: "Support when health issues impact your daily work life",
        icon: "Activity"
      },
      {
        title: "Hospitalisation",
        description: "Assistance with expenses and care during your hospital stay",
        icon: "Hospital"
      },
      {
        title: "Recovery from surgery",
        description: "Support while you heal after surgery",
        icon: "Syringe"
      }
    ],
    benefitsImage: "/images/protection/income2.jpg",
    features: [],

    faqs: [
      {
        question: "Do I need financial advice on how to cash in my pension pot?",
        answer: "If your pension pot is worth £30,000 or more, it's strongly recommended to seek regulated financial advice before making any withdrawal decisions. Our advisers can help you understand tax implications and ensure you make the most of your savings.",
      },
      {
        question: "What is the difference between an SIPP and a personal pension?",
        answer: "A Self-Invested Personal Pension (SIPP) gives you more control over your investments compared to a standard personal pension. With a SIPP, you can choose from a wider range of investments including stocks, bonds, and commercial property.",
      },
      {
        question: "Can I withdraw my pension before 55?",
        answer: "In most cases, you cannot access your pension before the age of 55 (rising to 57 from 2028). Early access schemes that promise otherwise are often scams. There are limited exceptions, such as serious ill health.",
      },
      {
        question: "Do I get my husband's state pension when he dies?",
        answer: "You may be able to inherit some of your spouse's or civil partner's state pension, depending on when they reached State Pension age and your own circumstances. Our advisers can help you understand your entitlements.",
      },
    ],
    ctaTitle: "Looking for Income Protection?",
    ctaDescription: "Don't leave your income unprotected. Our advisers can help you find the right policy to safeguard your finances if you're unable to work."
  },
];

export const businessProtectionServices: ServiceItem[] = [
  {
    slug: "keyman-cover",
    title: "Keyman Cover",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Protect your business against the financial impact of losing a key employee. Keyman cover ensures business continuity and stability when it matters most.",
    whyTitle: "Why have Key Person Insurance?",
    heroImage: "/images/protection/keyman-cover.jpg",
    whyContent: [
      "Most companies insure their buildings and physical assets against risks such as fire, flood, theft and equipment breakdown. However, they often overlook their most valuable asset: the key individuals at the top of the organisation who drive critical business functions. Without these people, the business could face serious disruption?and in some cases, may struggle to survive."
    ],
    howItWorksTitle: undefined,
    howItWorksContent: undefined,

    benefitsTitle: "What are the Benefits of Key Person Protection Cover?",
    benefitSubtitle: "A question we're often asked is, ?Why is key person insurance important?? Recent research shows that more than half of businesses would cease trading within 12 months if a key employee were to pass away or become critically ill. That alone is a compelling reason to consider this type of cover.",
    benefitItems: [
      { title: "Smooth Transition Support", description: "It can cover the cost associated with finding and training a replacement, helping to minimise the length of time that others will be expected to take the strain.", icon: "Users" },
      { title: "Ensures Dividend Stability", description: "It can cover the loss of profits that might follow the loss of a key person - which enables the surviving shareholders to maintain their dividend income.", icon: "TrendingUp" },
      { title: "Ensures Financial Stability", description: "Financial stability and security are provided during this transitional period.", icon: "Shield" },
      { title: "Builds Investor Confidence", description: "Reassurance is afforded to creditors and investors about business continuity.", icon: "Award" }
    ],
    benefitsImage: "/images/protection/keyman-cover1.jpg",

    features: [],

    faqs: [
      {
        question: "What is the difference between Key Person Cover and Shareholder Protection?",
        answer: "Key person insurance helps protect the business against the loss of a vital individual whose absence could affect profitability. In contrast, shareholder protection specifically addresses ownership continuity?ensuring that if a shareholder exits due to death or illness, the remaining owners can retain control and minimise disruption to the business."
      },
      {
        question: "What are the main benefits of Key Person Insurance?",
        answer: "It provides financial support to cover recruitment costs, maintain cash flow, repay business loans, and give confidence to investors and creditors during the transition period after losing a key employee."
      }
    ],
    ctaTitle: "Need Keyman Cover for Your Business?",
    ctaDescription: "Protect your business from the unexpected. Our advisers can help you assess your key person risk and find the right level of cover."
  },
  {
    slug: "shareholder-protection",
    title: "Shareholder Protection",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Ensure business continuity and financial security in unforeseen events. Shareholder protection provides the means to buy out a deceased or critically ill partner's shares.",
    whyTitle: "Why have Shareholder Protection Cover?",
    heroImage: "/images/protection/shareholder-protection.jpg",
    howItWorksTitle: undefined,
    howItWorksContent: undefined,
    whyContent: [
      "There?s a common misconception that shareholder protection and directors? insurance are the same. In reality, they are distinctly different forms of business cover. Shareholder protection is designed to safeguard business owners in the event of a shareholder?s death or diagnosis of a critical illness, whereas directors? insurance typically relates to indemnity or liability risks associated with a director's role.Shareholder protection is also often confused with key person insurance. While both aim to mitigate financial risks, they serve different purposes. Key person insurance helps protect the business against the loss of a vital individual whose absence could affect profitability. In contrast, shareholder protection specifically addresses ownership continuity?ensuring that if a shareholder exits due to death or illness, the remaining owners can retain control and minimise disruption to the business."
    ],
    benefitsTitle: "What are Benefits of Shareholder Protection Cover?",
    benefitSubtitle: "",
    benefitItems: [
      { title: "Business Security", description: "Shareholder protection provides a financial safety net that helps ensure business continuity.", icon: "Shield" },
      { title: "Decision-Making Power Is Retained", description: "Surviving shareholders can purchase the departing shareholder's stake.", icon: "Users" },
      { title: "Stakeholder / Investor Confidence", description: "Demonstrates sound risk management.", icon: "TrendingUp" },
      { title: "A Market for the Shares", description: "Creates a market for shares in private companies.", icon: "Award" }
    ],
    benefitsImage: "/images/protection/shareholder-protection1.jpg",
    features: [],
    faqs: [
      {
        question: "What Is the difference between Key person Cover and Shareholder Protection?",
        answer: "There?s a common misconception that shareholder protection and directors? insurance are the same. In reality, they are distinctly different forms of business cover. Shareholder protection is designed to safeguard business owners in the event of a shareholder?s death or diagnosis of a critical illness, whereas directors? insurance typically relates to indemnity or liability risks. Shareholder protection specifically addresses ownership continuity."
      },
      {
        question: "Who Pays for Shareholder Protection?",
        answer: "Usually, the company pays the premiums for shareholder protection policies. In many cases, these premiums can be treated as a legitimate business expense, potentially qualifying for corporation tax relief."
      },
      {
        question: "Do I need a shareholder agreement along with the insurance?",
        answer: "Yes, it is highly recommended. The insurance works best when paired with a proper cross-option or buy-sell agreement that legally allows the surviving shareholders to purchase the shares using the payout from the policy."
      }
    ],
    ctaTitle: "Need Shareholder Protection?",
    ctaDescription: "Protect your business partnership with the right agreements and insurance in place. Speak to our advisers today."
  },
  {
    slug: "relevant-life-cover",
    title: "Relevant Life Cover",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Tax-efficient life insurance for company directors and employees. A cost-effective way for businesses to provide death-in-service benefits outside of a registered group life scheme.",
    whyTitle: "Why have Relevant Life Cover?",
    heroImage: "/images/protection/relevant-life-cover.jpg",
    // whyChooseImage: "/images/protection/relevant-life-cover1.jpg",
    whyContent: [
      "Relevant life policies are a form of employer-funded life cover that provides a 'death-in-service' style benefit to eligible employees. These policies are taken out by the business on the life of an individual employee and are typically written into trust, ensuring that any payout is made directly to the employee?s nominated beneficiaries. Importantly, the benefit cannot be paid to the company.",

      "At Wealthmax Financial Advisers Limited, we can help you set up relevant life cover tailored to your business needs. A payout is triggered if the insured employee dies or is diagnosed with a terminal illness during the term of the policy. Premiums paid by the employer are generally considered an allowable expense for Corporation Tax purposes. From the employee?s perspective, there is no income tax liability on the premiums, as they are not treated as a benefit in kind. Additionally, for most individuals, any payout from the policy will be free from income tax and inheritance tax, subject to current HMRC rules and the correct trust structure being in place."
    ],
    howItWorksTitle: undefined,
    howItWorksContent: undefined,

    benefitsTitle: "What are Benefits of Relevant Life Cover?",
    benefitSubtitle: "So, why should you consider obtaining a relevant life insurance quote for your employees? Well, there?s a variety of advantages to be enjoyed by both employers and employees, which break down in the following way:",
    benefitItems: [
      { title: "Improved employee attraction / retention", description: "This type of cover offers a lump sum with a fixed or variable interest rates for a set term.", icon: "Users" },
      { title: "Estate Planning", description: "Here, you get flexible access to funds up to a predetermined limit, with interest charged on the amount borrowed.", icon: "FileText" },
      { title: "Improved Personal Coverage", description: "Relevant life cover offers great peace of mind to employees and their families without affecting their pension allowances.", icon: "Shield" },
      { title: "Corporate Responsibility Perception", description: "Providing cover like this for employees demonstrates that you're a caring employer.", icon: "Heart" }
    ],
    benefitsImage: "/images/protection/relevant-life-cover1.jpg",
    features: [],
    faqs: [
      {
        question: "Who owns a relevant life plan?",
        answer: "The company (employer) owns and pays for the relevant life plan. However, the policy is written in trust so that any payout goes directly to the employee's nominated beneficiaries, not to the company."
      },
      {
        question: "Can a sole trader have relevant life cover?",
        answer: "Relevant Life Cover is designed for employees and directors of limited companies. Sole traders cannot take out Relevant Life Cover as there is no employer-employee relationship. They can consider standard life insurance instead."
      },
      {
        question: "Is Relevant Life Cover tax-free?",
        answer: "Yes ? premiums are usually corporation tax deductible for the company, there is no P11D benefit-in-kind for the employee, and the payout to beneficiaries is normally free from income tax and inheritance tax (when correctly written in trust)."
      }
    ],
    ctaTitle: "Looking for Relevant Life Cover?",
    ctaDescription: "Provide tax-efficient life cover for your directors and employees. Contact our advisers to find out how your business can benefit."
  },
  {
    slug: "business-loan-protection",
    title: "Business Loan Protection",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Provides financial protection against losses, legal claims and property damage. Ensure your business loans are covered if a key individual passes away or becomes critically ill.",
    whyTitle: "Why Consider Business Loan Protection?",
    heroImage: "/images/protection/Business-Loan-Protection.jpg",
    // whyChooseImage: "/images/protection/Business-Loan-Protection1.jpg",
    whyContent: [
      "Many lenders and creditors require company directors and business owners to provide personal guarantees for loans made to their business. In the event that a key individual passes away or suffers a critical illness, the business may face challenges in meeting its financial obligations.",
      "Without appropriate protection in place, personal assets may be at risk, and the financial security of your family could be affected. Business loan protection is designed to help repay outstanding business debts in such circumstances, reducing financial strain and supporting business continuity. In addition to safeguarding personal guarantees, this type of cover may help mitigate wider business risks such as cash flow disruption, supplier concerns, and customer confidence. At Wealthmax Financial Advisers, we have experience advising directors and business owners on suitable business loan protection options. We offer access to products from a range of UK providers and can help you find cover that aligns with your business needs."
    ],
    howItWorksTitle: undefined,
    howItWorksContent: undefined,
    benefitSubtitle: "The primary advantage of this type of cover is to help businesses maintain continuity during difficult times. In addition, a business loan protection policy offers several key benefits:",
    benefitsTitle: "What are the Benefits of Business Loan Protection Cover?",
    benefitItems: [
      { title: "Maintain Cash Flow", description: "Helps ensure operational continuity by easing financial pressure.", icon: "TrendingUp" },
      { title: "Preserve Your Credit Rating", description: "By avoiding defaults on business loans.", icon: "Shield" },
      { title: "Enhance Resilience", description: "Supports your business in navigating unforeseen circumstances.", icon: "Award" },
      { title: "Peace of Mind", description: "Provides reassurance to business owners and stakeholders.", icon: "Heart" }
    ],
    benefitsImage: "/images/protection/Business-Loan-Protection1.jpg",
    features: [],
    faqs: [
      {
        question: "What is covered by business loan protection?",
        answer: "It covers outstanding business loans and debts if a key individual (usually a director who gave a personal guarantee) dies or is diagnosed with a critical illness. The policy pays out to clear the loan balance."
      },
      {
        question: "Should I write my business loan cover into trust?",
        answer: "Yes, it is strongly recommended to write the policy into trust. This ensures the payout goes directly to the lender or the right party without delays and potential inheritance tax issues."
      },
      {
        question: "Does Business Loan Protection cover critical illness?",
        answer: "Most good policies can include critical illness cover along with life cover, so the loan can be repaid even if the guarantor becomes seriously ill and cannot work."
      }
    ],
    ctaTitle: "Need Business Loan Protection?",
    ctaDescription: "Don't let a business loan become a personal liability. Our advisers can help you find the right protection for your business borrowing."
  },
];

export const homeInsuranceServices: ServiceItem[] = [
  {
    slug: "buildings-and-contents",
    title: "Buildings & Contents Insurance",
    category: "Home Insurance",
    heroSubtitle: "Home Insurance",
    heroDescription: "Protect your home and everything in it with comprehensive buildings and contents insurance. Cover your property structure and personal belongings against damage, theft and unexpected events.",
    whyTitle: "Why Choose Buildings and Contents Cover?",
    heroImage: "/images/protection/Buildings&Contents.jpg",

    whyContent: [
      "According to the latest figures from the FCA, there are approximately 650,000 domestic burglaries in the UK each year. Government statistics also show that 5.5 million homes and business premises are at risk of flooding, along with over 143,000 fires annually that can destroy property. Given these risks, buildings and contents protection is essential.Buildings protection safeguards your home's structure, covering the cost of repairs or rebuilding after damage. Contents protection helps replace or repair items inside your home that are damaged, stolen, or lost during such incidents. In challenging times like these, having this kind of financial security can offer much-needed peace of mind.",

    ],
    howItWorksTitle: undefined,
    howItWorksContent: undefined,
    benefitsTitle: "What are Benefits of Buildings and Contents Cover?",
    benefitSubtitle:
      "While specific details of buildings and contents protection will vary from provider to provider, its fundamental elements will typically include the following:",

    benefitItems: [
      {
        title: "Structural Damage",
        description:
          "Repair or rebuilding costs for damage to the physical structure of your home caused by events like fire, floods, or subsidence.",
        icon: "Home"
      },
      {
        title: "Fixtures & Fittings",
        description:
          "Includes permanent fixtures like kitchens and bathrooms as part of the building cover.",
        icon: "Tool"
      },
      {
        title: "Legal Expenses",
        description:
          "Covers legal costs related to property disputes or claims.",
        icon: "FileText"
      },
      {
        title: "Outbuildings",
        description:
          "Covers external structures like garages and sheds within your property.",
        icon: "Building"
      },
      {
        title: "Personal Belongings",
        description:
          "Protects household items like furniture, electronics, and clothing.",
        icon: "Package"
      },
      {
        title: "Valuables",
        description:
          "Covers high-value items like jewellery and artwork.",
        icon: "Gem"
      },
      {
        title: "Theft",
        description:
          "Covers loss or damage caused by burglary or other criminal activity.",
        icon: "Shield"
      },
      {
        title: "Accidental Damage",
        description:
          "Covers accidental damage to possessions within the home.",
        icon: "AlertTriangle"
      }
    ],
    benefitsImage: "/images/protection/Buildings&Contents1.jpg",
    features: [],
    faqs: [
      {
        question: "What is the difference between Buildings and Contents Insurance?",
        answer: "Buildings Insurance covers the structure of your home (walls, roof, floors, built-in fixtures). Contents Insurance covers your personal belongings inside the home such as furniture, electronics, clothing, and valuables."
      },
      {
        question: "Is accidental damage covered?",
        answer: "Standard policies usually do not include accidental damage. You need to add an 'Accidental Damage' extension for extra protection against spills, breaks, or other unintended mishaps."
      },
      {
        question: "Does home insurance cover flooding?",
        answer: "Flood cover is not always included by default. Many insurers offer it as standard now, but in high-risk flood areas you may need to pay extra or use the Flood Re scheme."
      },
      {
        question: "Can I cover high-value items like jewellery?",
        answer: "Yes, but high-value items usually need to be specified separately on the policy (scheduled items) and may require valuation and extra premium."
      }
    ],
    ctaTitle: "Looking for Home Insurance?",
    ctaDescription: "Protect your home and belongings with comprehensive insurance cover. Speak to our advisers today for a tailored quote."
  },
];

export const allProtectionServices = [
  ...personalProtectionServices,
  ...businessProtectionServices,
  ...homeInsuranceServices,
];
