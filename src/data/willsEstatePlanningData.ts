export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface WillsServiceItem {
  slug: string;
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  benefitsTitle: string;
  benefitSubtitle?: string;
  benefitItems: BenefitItem[];
  benefitsImage?: string;
  features: { title: string; description: string; icon: string }[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  heroImage: string;
  
}

export const willsEstatePlanningServices: WillsServiceItem[] = [
  {
    slug: "will-writing",
    title: "Will Writing",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription: "Safeguard your assets and intentions with tailored will writing guidance, giving your loved ones clarity and security",
    whyTitle: "Why Write a Will?",
    heroImage: "/images/Will-Writing/Will_Writing.jpg",
    whyContent: [
      "Writing a will is a key part of estate planning. It ensures your assets are passed on to the people you choose, rather than being distributed under intestacy laws. Despite its importance, around 60% of UK adults do not have a will in place. Creating a will?and where appropriate, setting up a trust?allows you to name specific beneficiaries, decide how your assets are distributed, and appoint guardians for your children. This helps ensure your wishes are respected and your loved ones are looked after. At WealthMax Financial Advisers, we have extensive experience in trust and will services. We guide you through the process, helping you make informed decisions that protect your legacy and provide peace of mind. Legal and tax rules may change. Advice should be tailored to your individual circumstances to ensure suitability and compliance.",
    ],
    benefitsTitle: "What are Benefits of Will Writing?",
    benefitSubtitle: "No matter your age, writing a will is a responsible and valuable step in estate planning. It ensures your wishes are legally documented, helping to avoid uncertainty and reduce the risk of future disputes. Without a will, your estate may be subject to intestacy laws, which can lead to complications and delays.",
    benefitItems: [
      {
        title: "Control Over Asset Distribution",
        description: "Decide exactly who inherits your estate, avoiding default intestacy rules.",
        icon: "Settings"
      },
      {
        title: "Appoint Guardians for Children",
        description: "Ensure your children are cared for by people you trust.",
        icon: "Users"
      },
      {
        title: "Minimise Family Disputes",
        description: "A legally valid will helps prevent disagreements and delays during estate administration.",
        icon: "Scale"
      },
      {
        title: "Tax Planning Opportunities",
        description: "A well-structured will can support inheritance tax planning and help preserve more of your estate.",
        icon: "PoundSterling"
      },
    ],
    benefitsImage: "/images/Will-Writing/Will_Writing1.jpg",   // Copied from whyChooseImage
    features: [
      { title: "Legal Expertise", description: "Professionals understand the intricacies of writing a will and ensure your document complies with all legal requirements.", icon: "Scale" },
      { title: "Complex Situations", description: "We can help with more complex circumstances such as business ownership, blended families or overseas assets so every aspect is addressed.", icon: "Users" },
      { title: "Avoiding Errors", description: "Poorly drafted wills can create ambiguity and disputes. Professional guidance reduces the risk of mistakes that could cause problems later.", icon: "Shield" },
      { title: "Peace of Mind", description: "Knowing your wishes are clearly documented and legally binding provides reassurance for you and your loved ones.", icon: "ShieldCheck" },
      { title: "Updates and Amendments", description: "As your life changes, your will can be reviewed and updated so it always reflects your current intentions.", icon: "Edit3" },
    ],
    faqs: [
      {
        question: "Can I write my own will legally?",
        answer: "Yes, but a DIY will can easily be invalid or challenged. A professionally written will reduces the risk of disputes and ensures your wishes are followed."
      },
      {
        question: "What happens if I don't make a will?",
        answer: "Your estate will be distributed according to intestacy rules, which may not match your wishes and can cause delays and family conflicts."
      },
      {
        question: "Why is it important for unmarried couples to set up a will?",
        answer: "Unmarried partners have no automatic inheritance rights. Without a will, your partner may receive nothing from your estate."
      }
    ],
    ctaTitle: "Need Help with Will Writing?",
    ctaDescription: "Speak to our estate planning specialists to draft or review your will and protect your legacy.",
  },
   {
    slug: "inheritance-tax-planning",
    title: "Inheritance Tax Planning",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription: "Ensure your estate is passed on efficiently and thoughtfully with professional Inheritance Tax Planning tailored to your unique circumstances",
    whyTitle: "Why Choose Inheritance Tax Planning?",
    heroImage: "/images/Inheritance-Tax-Planning/Inheritance-Tax-Planning.jpg",
    whyContent: [
      "Tax treatment depends on individual circumstances and may change in future. Advice should be tailored to your specific needs and objectives. Despite less than 4% of estates in the UK typically being subject to inheritance tax, HMRC still gathered more than £6.8 billion in revenue in 2023. Without inheritance tax planning in place, your loved one?s legacy could subject to major tax liabilities, meaning that they end up with much less financial support than you intended. Inadequate inheritance tax planning can also lead to errors or oversights that add to your liabilities, in addition to complications and delays during the probate process. You can avoid all the associated distress and financial strain these holdups can cause by talking to a WealthMax advisor, who can help you mitigate these risks and preserve your family?s inheritance. Inheritance Tax Planning is a valuable step to ensure your hard-earned wealth is passed on to your loved ones. With the right strategy, you can reduce tax exposure and protect your estate for future generations.",
    ],
    benefitsTitle: "What are Benefits of Inheritance Tax Planning?",
    benefitSubtitle: "Inheritance Tax Planning is important to ensure your hard-earned wealth is passed on to your loved ones. The other benefits of planning are stated below.",
    benefitItems: [
      {
        title: "Minimise Tax Liability",
        description: "Reduce the amount of inheritance tax your family may need to pay, ensuring more of your wealth is preserved.",
        icon: "Receipt"
      },
      {
        title: "Protect Family Wealth",
        description: "Safeguard assets such as property, savings or investments so they pass on to your loved ones rather than being lost to taxes.",
        icon: "Shield"
      },
      {
        title: "Provide Financial Security for Loved Ones",
        description: "Ensure your spouse, children, or chosen beneficiaries receive the maximum benefit from your estate.",
        icon: "Users"
      },
      {
        title: "Greater Control Over Your Estate",
        description: "Decide exactly how your wealth is distributed, rather than leaving it entirely to tax laws.",
        icon: "Settings"
      },
      {
        title: "Avoid Unnecessary Stress for Family",
        description: "Proper planning simplifies the inheritance process, easing the burden on family members during difficult times.",
        icon: "Heart"
      },
    ],
    benefitsImage: "/images/Inheritance-Tax-Planning/Inheritance-Tax-Planning2.jpg",   // Copied from whyChooseImage
    features: [],
    faqs: [
      {
        question: "How much Inheritance tax do I have to pay?",
        answer: "Inheritance Tax is currently charged at 40% on the value of your estate above the nil-rate band (£325,000 per person, or up to £650,000 for married couples/civil partners). Planning can significantly reduce or eliminate this."
      },
      {
        question: "Can I leave my house to my children without paying inheritance tax?",
        answer: "Possibly, through the Residence Nil Rate Band (up to £175,000 extra per person when leaving a home to direct descendants). Proper planning and gifting strategies can further reduce the tax."
      },
      {
        question: "Do you pay inheritance tax when the first partner dies?",
        answer: "Usually no. The unused nil-rate band can be transferred to the surviving spouse/civil partner, potentially doubling the tax-free allowance on the second death."
      }
    ],
    ctaTitle: "Review Your Inheritance Tax Position",
    ctaDescription: "Book a review to understand your potential inheritance tax exposure and planning options.",
  },
  {
    slug: "trust-planning",
    title: "Trust Planning",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription: "Protect your assets and secure your legacy with tailored Trust Planning solutions designed to safeguard your wealth for generations",
    whyTitle: "Why Trust Planning Matters?",
    heroImage: "/images/Trust_planning/trust-planning5.jpg",
    whyContent: [
      "Around 60% of UK people die intestate, which can make things very complicated for your beneficiaries when it comes to distributing your property or assets as you wish. However, when WealthMax assists you in setting up a trust, you can avoid the delays and increased costs that occur when adequate inheritance tax planning isn?t carried out. When trusts are established, they not only provide clear instructions regarding who receives your assets or property but also how they?re passed on. For example, without a trust, the beneficiary may simply receive a lump sum, which can lead to irresponsible spending and disputes among family members. Our experts can help you in setting up a trust in which trustees hold your assets for the benefit of your heirs. They offer a flexible way to transfer your assets while retaining control over how they?re distributed. This also protects your assets from creditors and inheritance tax by reducing the overall size of your estate. Tax treatment depends on individual circumstances. Professional advice is recommended to ensure suitability.",
    ],
    benefitsTitle: "What are Benefits of Trust Planning?",
    benefitSubtitle: "Shield your wealth from potential creditors, divorce settlements, or financial disputes, ensuring it stays within the family.",
    benefitItems: [
      {
        title: "Control How Wealth Is Used",
        description: "Decide exactly how and when beneficiaries receive assets, helping prevent misuse or overspending.",
        icon: "HandCoins"
      },
      {
        title: "Support Future Generations",
        description: "Set aside funds to provide long-term financial support for children, grandchildren, or vulnerable family members.",
        icon: "Users"
      },
      {
        title: "Efficient Tax Planning",
        description: "Use trusts to manage inheritance tax more effectively, helping to preserve more of your estate.",
        icon: "Receipt"
      },
      {
        title: "Ensure Continuity and Stability",
        description: "Trusts provide a structured way to transfer wealth, reducing disputes and giving your family peace of mind.",
        icon: "Shield"
      },
    ],
    benefitsImage: "/images/Trust_planning/trust-planning3.jpg",   // Copied from whyChooseImage
    features: [],
    faqs: [
      {
        question: "What are the advantages of putting a property in a trust?",
        answer: "Putting a property in a trust can help protect it from creditors, control how and when beneficiaries receive it, and assist with inheritance tax planning."
      },
      {
        question: "How can a trust reduce inheritance tax?",
        answer: "Certain trusts allow assets to be removed from your estate for IHT purposes while still giving you or your family some benefit or control."
      }
    ],
    ctaTitle: "Looking at Trust Options?",
    ctaDescription: "Arrange a consultation to explore how trusts could support your family and estate planning goals.",
  },
  {
    slug: "power-of-attorney",
    title: "Lasting Power of Attorney",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription: "Plan for the unexpected with Lasting Power of Attorney services that protect your choices and provide peace of mind for you and your loved ones",
    whyTitle: "Why Set Up a Lasting Power of Attorney?",
    heroImage: "images/Lasting Power of Attorney/lasting-power-attorney2.jpg",
    // whyChooseImage: "/images/Lasting Power of Attorney/lasting-power-attorney5.jpg",   // Commented
    whyContent: [
      "At WealthMax, we understand the importance of planning for the unexpected. According to government statistics, around 100,000 people experience strokes each year, and this is just one of the many ways in which you might become incapacitated. Without a Lasting Power of Attorney (LPA) in place, your loved ones may have a great deal of difficulty in managing your affairs, making critical medical decisions or accessing bank accounts. Our LPA services allow you to appoint trusted individuals to act on your behalf, making sure your affairs are handled smoothly during difficult times.",
    ],
    benefitsTitle: "Benefits of Lasting Power of Attorney",
    benefitSubtitle: "In the event that you lose your ability to make decisions for yourself due to illness or injury, your LPA will become triggered. Your appointed person will be able to make meaningful calls about aspects of your life, such as:",
    benefitItems: [
      {
        title: "Decision Making",
        description: "An LPA ensures that someone you trust can make decisions on your behalf if you become unable to do so, whether due to illness, accident, or age-related conditions.",
        icon: "Scale"
      },
      {
        title: "Financial Protection",
        description: "Your appointed attorney can manage your finances?paying bills, accessing bank accounts, and handling investments?without delays or legal complications.",
        icon: "Shield"
      },
      {
        title: "Health & Welfare Support",
        description: "With a Health and Welfare LPA, your attorney can make decisions about your medical treatment, care arrangements, and even where you live, based on your wishes.",
        icon: "Heart"
      },
      {
        title: "Avoids Costly Delays",
        description: "Without an LPA, loved ones may need to apply to the Court of Protection to act on your behalf?a process that can be time-consuming, expensive, and emotionally draining.",
        icon: "Clock"
      },
      {
        title: "Reduces Family Stress",
        description: "Having an LPA in place removes uncertainty and helps prevent disputes among family members during difficult times.",
        icon: "Users"
      },
      {
        title: "Preserves Your Legacy",
        description: "By ensuring your affairs are handled according to your values and preferences, an LPA helps protect your legacy and long-term intentions.",
        icon: "Gift"
      },
    ],
    benefitsImage: "/images/Lasting Power of Attorney/lasting-power-attorney5.jpg",   // Copied from whyChooseImage
    features: [],
    faqs: [
      {
        question: "How long does a Lasting Power of Attorney last?",
        answer: "It lasts for your lifetime (or until you revoke it while you still have capacity). It only becomes active when needed."
      },
      {
        question: "How many people can you nominate in an LPA?",
        answer: "You can appoint up to 4 attorneys for each type of LPA (Property & Financial Affairs and Health & Welfare)."
      },
      {
        question: "Do I need a Solicitor to set up an LPA?",
        answer: "No, it is not mandatory, but many people use a professional to ensure it is completed correctly and avoid mistakes that could make it invalid."
      }
    ],
    ctaTitle: "Set Up a Power of Attorney",
    ctaDescription: "Talk to our team about arranging lasting powers of attorney that reflect your wishes.",
  }
 
];