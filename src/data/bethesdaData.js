export const trustInfo = {
  name: "Bethesda Charitable Trust",
  shortName: "Bethesda Trust",
  tagline: "Restoring Hope, Dignity & Compassion to Every Life",
  established: 1981,
  registration: {
    trustReg: "REG-TN/2016/8842",
    taxExempt: "80G & 12A Certified (100% Tax Benefit)",
    fcra: "FCRA Approved for International Donors",
  },
  contact: {
    phone: "+91 99005 69428",
    altPhone: "+91 99807 99428",
    email: "contact@bethesdatrust.org",
    supportEmail: "donations@bethesdatrust.org",
    address: "#137, SBI Layout, Devarachikkanahalli, Bengaluru - 560076, India",
    workingHours: "Mon - Sat: 9:00 AM - 6:30 PM IST",
  },
  socials: {
    facebook: "https://facebook.com/bethesdatrust",
    twitter: "https://twitter.com/bethesdatrust",
    instagram: "https://instagram.com/bethesdatrust",
    youtube: "https://youtube.com/bethesdatrust",
  }
};

export const heroData = {
  badge: "✨ 40+ Years of Unwavering Community Service",
  title: "Building a World Where No Child, Elder, or Destitute Lives in Despair",
  subtitle: "Bethesda Trust provides critical healthcare, education, shelter, and emergency relief to the most vulnerable communities. Every contribution directly transforms lives.",
  primaryCTA: "Donate Now",
  secondaryCTA: "Explore Our Causes",
  trustedByText: "Over 25,000+ compassionate donors worldwide",
  statsSummary: [
    { label: "Lives Touched", value: "85,000+" },
    { label: "Active Programs", value: "14" },
    { label: "Fund Efficiency", value: "88%" },
  ]
};

export const impactMetrics = [
  {
    id: "meals",
    value: 150000,
    prefix: "",
    suffix: "+",
    label: "Hot Meals Served",
    description: "Nutritious daily meals delivered to destitute, elderly, and homeless individuals.",
    icon: "Utensils",
    color: "#f59e0b"
  },
  {
    id: "children",
    value: 12400,
    prefix: "",
    suffix: "+",
    label: "Children Educated",
    description: "Scholarships, uniforms, books, and digital lab access provided to underprivileged youth.",
    icon: "GraduationCap",
    color: "#3b82f6"
  },
  {
    id: "elderly",
    value: 3800,
    prefix: "",
    suffix: "+",
    label: "Seniors Sheltered",
    description: "24/7 medical care, housing, and dignity provided at Bethesda Care Homes.",
    icon: "HeartHandshake",
    color: "#ec4899"
  },
  {
    id: "health",
    value: 420,
    prefix: "",
    suffix: "+",
    label: "Medical Camps Conducted",
    description: "Free health checkups, cataract surgeries, and lifesaving medicines distributed in rural areas.",
    icon: "Stethoscope",
    color: "#10b981"
  }
];

export const causes = [
  {
    id: "child-education",
    title: "Project Vidya: Educate a Child, Change a Generation",
    category: "Education",
    urgency: "High Urgency",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    goal: 50000,
    raised: 38400,
    donors: 412,
    shortDesc: "Providing annual schooling, textbooks, uniforms, and mentorship to 500 orphaned and rural children.",
    details: "Education is the greatest equalizer. Project Vidya ensures children from low-income families and orphanages stay in school with full tuition, digital learning tools, and daily nutritious meals.",
    impactPoint: "$25 sponsors a child's complete school supplies for 6 months."
  },
  {
    id: "elderly-shelter",
    title: "Bethesda Senior Sanctuary: Care for Homeless Elders",
    category: "Elder Care",
    urgency: "Critical Need",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    goal: 75000,
    raised: 61200,
    donors: 680,
    shortDesc: "Comprehensive shelter, palliative care, and companionship for abandoned and destitute senior citizens.",
    details: "Many elderly individuals face neglect and severe health challenges. Bethesda Senior Sanctuary offers comfortable beds, round-the-clock nursing staff, healthy meals, and an affectionate community.",
    impactPoint: "$50 provides full month room, food, and medical checkups for an elder."
  },
  {
    id: "rural-healthcare",
    title: "Mobile Health Units & Free Cataract Surgeries",
    category: "Healthcare",
    urgency: "Ongoing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    goal: 40000,
    raised: 29500,
    donors: 310,
    shortDesc: "Bringing mobile medical units, free prescription drugs, and sight-restoring surgeries to remote villages.",
    details: "Preventable illnesses remain untreated in remote rural pockets due to lack of facilities. Our mobile health van visits 30+ villages monthly, offering free diagnosis, medicines, and surgical referrals.",
    impactPoint: "$35 restores vision for one elderly villager through free cataract surgery."
  },
  {
    id: "emergency-relief",
    title: "Zero-Hunger Emergency Food Relief & Ration Kits",
    category: "Food Security",
    urgency: "Immediate Relief",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
    goal: 30000,
    raised: 24800,
    donors: 295,
    shortDesc: "Monthly grocery ration kits and cooked food distribution for daily wage earners in distress.",
    details: "Economic shocks leave thousands of vulnerable daily wage families facing acute food insecurity. Our ration kits feed a family of 4 for an entire month with essential grains, pulses, oil, and hygiene supplies.",
    impactPoint: "$30 provides a 30-day essential food kit for a needy family."
  },
  {
    id: "women-empowerment",
    title: "Nari Shakti: Vocational Tailoring & Micro-Grants",
    category: "Empowerment",
    urgency: "Active",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
    goal: 35000,
    raised: 21100,
    donors: 240,
    shortDesc: "Training widowed and underprivileged women in tailoring, handicraft, and small business management.",
    details: "Empowering women creates resilient families. We provide 3-month certified vocational training courses, free sewing machines upon graduation, and micro-loan guidance to build self-sustaining livelihoods.",
    impactPoint: "$75 gifts a graduating woman her own sewing machine to start a business."
  }
];

export const impactCalculatorTiers = [
  { amount: 15, impact: "Provides 30 hot nutritious meals to street children" },
  { amount: 35, impact: "Funds 1 free sight-restoring cataract surgery" },
  { amount: 60, impact: "Educates 2 children with full school kits for a term" },
  { amount: 120, impact: "Supports 1 senior citizen with 24/7 care for a month" },
  { amount: 250, impact: "Equips 3 women with sewing machines & business kits" },
  { amount: 500, impact: "Sponsors a full rural mobile health clinic day for a village" }
];

export const stories = [
  {
    id: "story-1",
    name: "Arun & Priya",
    age: "9 & 11 years",
    location: "Bengaluru, India",
    category: "Education",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
    quote: "I thought I would have to work at a construction site like my parents. Now I want to become a computer scientist!",
    storyText: "Arun was at risk of dropping out in 4th grade when his father lost his daily labor job. Bethesda Trust stepped in under Project Vidya, providing full tuition, uniform, shoes, and after-school tuition. Today Arun ranks 1st in his class in Science."
  },
  {
    id: "story-2",
    name: "Lakshmi Ammal",
    age: "74 years",
    location: "Bethesda Sanctuary Resident",
    category: "Elder Care",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    quote: "I found a real family when I thought I was completely alone in this world.",
    storyText: "Left at a bus terminal with no shelter or living relatives, Lakshmi was brought to Bethesda Senior Sanctuary in 2021. Here, she receives regular medical checkups, warm wholesome meals, and the loving company of fellow elders."
  },
  {
    id: "story-3",
    name: "Ramanathan",
    age: "62 years",
    location: "Rural Tamil Nadu",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    quote: "After two years in darkness, I could see my grandchildren's faces again.",
    storyText: "Severe cataracts left farmer Ramanathan unable to walk or work. Through Bethesda's mobile medical camp, he underwent a zero-cost surgery. Within 24 hours of bandage removal, his sight was fully restored."
  }
];

export const financialBreakdown = {
  allocations: [
    { name: "Direct Charitable Programs", percentage: 88, color: "#10b981", description: "Education, healthcare, meals, shelter, emergency relief" },
    { name: "Operational & Tech Costs", percentage: 7, color: "#3b82f6", description: "Staff salaries, facility maintenance, logistics" },
    { name: "Community Outreach & Fundraising", percentage: 5, color: "#f59e0b", description: "Donor communications, awareness campaigns" }
  ],
  transparencyGuarantees: [
    "100% Tax-deductible under Section 80G & 12A",
    "Annually audited by independent certified chartered accountants",
    "Instant digital receipts emailed automatically for every contribution",
    "Quarterly field impact reports sent directly to all donors"
  ]
};

export const faqs = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes! All Indian donations to Bethesda Charitable Trust qualify for 50% tax exemption under Section 80G of the Income Tax Act. Donors receive an automated tax receipt with reference number immediately."
  },
  {
    q: "How can I be sure my money reaches the beneficiaries?",
    a: "Bethesda Trust operates with total transparency. 88% of every dollar goes directly into field operations. We publish independently audited financial statements annually and send quarterly progress reports with photos to all donors."
  },
  {
    q: "Can I donate from outside India (International Donors)?",
    a: "Yes, we are FCRA certified to accept foreign contributions in USD, EUR, GBP, AUD, CAD, and other currencies securely via card, Wire Transfer, or PayPal."
  },
  {
    q: "Can I sponsor a specific child or elder on a monthly basis?",
    a: "Absolutely! You can choose the 'Monthly Recurring' option when making a donation, or select a specific project to support long-term."
  },
  {
    q: "Can I visit Bethesda Trust centers in person?",
    a: "We welcome visitors, volunteers, and donors! You can schedule a visit to our Bethesda Senior Sanctuary or Education Centers by reaching out through our contact page."
  }
];

export const galleryItems = [
  { title: "Mobile Rural Medical Camp", category: "Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" },
  { title: "Project Vidya Classroom", category: "Education", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" },
  { title: "Daily Meal Distribution", category: "Relief", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" },
  { title: "Elderly Recreation & Care", category: "Elder Care", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop" },
  { title: "Women's Vocational Training", category: "Empowerment", img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop" },
  { title: "Free Health Checkups", category: "Healthcare", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop" }
];
