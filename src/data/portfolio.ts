import { Project, Testimonial } from "@/types/portfolio";

// Award-Winning Portfolio Data
export const portfolioData: Project[] = [
  

  {
    id: 1,
    title: "Restaurant Website",
    slug: "zestara-dine-restaurant",
    category: "Web Development",
    image: "/img/portfolio/restaurant/1.png",
    images: [
      "/img/portfolio/restaurant/1.png",
      "/img/portfolio/restaurant/2.png",
      "/img/portfolio/restaurant/3.png",
      "/img/portfolio/restaurant/4.png",
    ],
    description:
      "This restaurant website project, Zestara Dine, offers a modern, visually appealing, and user-friendly platform showcasing the restaurant's menu, ambiance, and unique culinary offerings. It is designed to enhance customer engagement by providing easy navigation, menu browsing, and reservation options. The website is fully responsive, ensuring an optimal experience across devices while reflecting the brand’s identity with a polished design.",
    technologies: [
      "nextJs",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://zestara-dine.vercel.app/",
    featured: true,
    year: "2024",
    awards: ["Fintech Innovation Award", "Best Mobile App 2024"],
    client: "DataCorp",
    impact: "Rebuilt from WordPress. +22% conversions",

    caseStudy: {
      overview:
        "Rebuilt the existing restaurant website on a modern tech stack to improve performance, maintainability, and user experience, resulting in significantly increased visitor engagement and conversion rates.",
      challenges:
        "Migrating from a legacy WordPress system while preserving SEO, implementing a seamless online reservation system, and ensuring full responsiveness across all devices.",
      solutions:
        "Adopted Next.js for server-side rendering and fast load times, integrated MongoDB for scalable data management, and applied Tailwind CSS for a consistent and adaptive design system.",
      results:
        "+22% conversions, improved site speed by 40%, and increased mobile customer engagement through user-friendly interface redesign.",
    },

    features: [
      "Interactive menu with detailed dish descriptions and images",
      "Online reservation system with instant confirmation",
      "Mobile-friendly responsive design",
      "Customer testimonials and review section",
      "Integrated Google Maps location and contact",
      "Social media integration for promotions and updates",
      "High-quality food and ambiance photo gallery",
    ],

    futureImprovements: [
      "Adding online ordering and delivery options",
      "Incorporating loyalty programs and gift card purchases",
      "SEO enhancements and multi-language support",
      "Blog section for culinary stories and events",
    ],

    faq: [
      {
        question: "How does Zestara Dine enhance customer engagement?",
        answer:
          "By providing an intuitive menu browsing, online reservation, and responsive design that works seamlessly across devices.",
      },
      {
        question:
          "What makes Zestara Dine different from other restaurant websites?",
        answer:
          "It is rebuilt on a modern tech stack with fast load times, SEO preservation, and integration of customer testimonials for trust.",
      },
      {
        question: "How can the restaurant manage the online reservations?",
        answer:
          "The site includes a real-time reservation system with instant confirmation notifications to streamline customer bookings.",
      },
    ],
  },
  {
    id:2,
    title: "Civic Lens News Portal",
    slug: "civiclens-news-portal",
    category: "Web Development",
    image: "/img/portfolio/news/1.png",
    images: [
      "/img/portfolio/news/1.png",
      "/img/portfolio/news/2.png",
      "/img/portfolio/news/3.png",
      "/img/portfolio/news/4.png",
    ],
    description:
      "CivicLens News Portal is a modern, responsive platform aggregating categorized news including politics, culture, technology, sports, and world events. The portal provides intuitive navigation, real-time news updates, multimedia content, and a superior user experience that keeps audiences well-informed and engaged.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    liveUrl: "https://civic-lens-pi.vercel.app/",
    featured: true,
    year: "2025",
    awards: ["Innovative News Portal Design 2025"],
    client: "CivicLens",
    impact:
      "Enabled broad public access to categorized and multimedia news content, increasing visitor engagement and session durations significantly.",

    caseStudy: {
      overview:
        "Rebuilt CivicLens news portal to provide a scalable, fast, and user-friendly experience. Included advanced categorization, multimedia support, and comprehensive real-time updates.",
      challenges:
        "Designing a flexible architecture to manage diverse content types, handle large traffic, and deliver seamless dynamic category updates across devices.",
      solutions:
        "Implemented Next.js for server-side rendered pages for SEO and speed, Tailwind CSS for responsive design, and integrated rich media content and real-time news feeds.",
      results:
        "Achieved faster load times, higher user retention, and simplified editorial workflows with automated categorization and publishing.",
    },

    features: [
      "Dynamic category filters for Politics, Technology, World News, Culture, and Sports",
      "Responsive, mobile-first design for optimal reading on all devices",
      "Multimedia content support including images, videos, and embedded media",
      "Real-time news feed updates to keep content fresh and relevant",
      "Powerful search and tag-based navigation",
      "User-friendly editorial content management integration",
      "SEO-friendly URL and sitemap structure for better search visibility",
    ],

    futureImprovements: [
      "Personalized user news feeds based on reading habits",
      "Enhanced multi-language support",
      "Push notifications for breaking news",
      "Integration of community comment and rating systems",
    ],

    faq: [
      {
        question: "How can I find news in my favorite category?",
        answer:
          "Use the dynamic category filters on the homepage or in the menu to quickly access news types like Politics, Sports, or Technology.",
      },
      {
        question: "Does CivicLens support multimedia content?",
        answer:
          "Yes, the platform supports images, videos, and other media embedded directly in news stories for an enhanced reading experience.",
      },
      {
        question: "Is the news portal optimized for mobile devices?",
        answer:
          "Absolutely, CivicLens is built with a mobile-first responsive design to ensure great performance and readability across all screen sizes.",
      },
    ],
  },
  {
    id: 3,
    title: "Solara",
    slug: "solara-non-profit-organization",
    category: "Web Development",
    image: "/img/portfolio/org/1.png",
    images: [
      "/img/portfolio/org/1.png",
      "/img/portfolio/org/2.png",
      "/img/portfolio/org/3.png",
      "/img/portfolio/org/4.png",
    ],
    description:
      "Solara is a non-profit organization committed to sustainable community development through health, education, and livelihood programs. Their website showcases impactful CSR activities, community stories, and event updates, aiming to raise awareness and foster collaboration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Sanity CMS",
    ],
    liveUrl: "https://soulrise-one.vercel.app/",
    featured: true,
    year: "2025",
    awards: ["Community Impact Award 2025", "Sustainability Excellence"],
    client: "Solara Foundation",
    impact:
      "Enhanced outreach and transparency leading to increased volunteer participation and donations, with measurable social impact in multiple communities.",

    caseStudy: {
      overview:
        "Designed and developed a visually compelling, content-rich platform that communicates Solara’s CSR initiatives, progress, and community impact effectively to stakeholders and the broader public.",
      challenges:
        "Ensuring accessibility and usability while managing diverse content types ranging from program details to event updates and impact reports within a seamless user experience.",
      solutions:
        "Next.js-based responsive front-end integrated with a flexible CMS backend, optimized for performance and dynamic content updates, enhancing user engagement.",
      results:
        "Achieved a significant increase in website traffic, donor engagements, and volunteer sign-ups, while streamlining content management for admin users.",
    },

    features: [
      "Comprehensive showcase of CSR programs in health, education, and livelihood",
      "Event calendar and updates to keep community members informed",
      "Responsive design with accessibility best practices",
      "Integration with content management system for easy updates",
      "Multimedia galleries for storytelling and impact visualization",
      "Donation and volunteer registration forms",
      "SEO optimized for increased visibility",
    ],

    futureImprovements: [
      "Introduction of multi-language support for wider community reach",
      "Enhanced interactive dashboards displaying program metrics",
      "Mobile app integration for push notifications and engagement",
      "Expanded community forum and resource sharing features",
    ],

    faq: [
      {
        question: "What are Solara’s main focus areas?",
        answer:
          "Solara focuses on improving community health, education, and livelihood through sustainable, impactful CSR programs tailored to local needs.",
      },
      {
        question: "How can I get involved with Solara?",
        answer:
          "Community members can participate through volunteer opportunities, attending events, or making donations via the website’s dedicated forms.",
      },
      {
        question: "How does Solara measure its impact?",
        answer:
          "Solara uses data-driven monitoring and periodic reporting to evaluate program effectiveness and ensure transparency to stakeholders.",
      },
    ],
  },
  {
  id: 4,
  title: "Space Coast Food",
  slug: "spacecoast-food",
  category: "Web Development",
  image: "/img/portfolio/food/1.png",
  images: [
    "/img/portfolio/food/1.png",
    "/img/portfolio/food/2.png",
    "/img/portfolio/food/3.png",
    "/img/portfolio/food/4.png",
  ],
  description:
    "Space Coast Food is a dynamic platform providing real-time food truck schedules for specific locations. Users can view which food trucks will be at a location, their menu, and any scheduled events. The platform allows subscriptions for weekly schedules and notifications of any changes or cancellations, ensuring users are always up-to-date.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  liveUrl: "https://spacecoast.food/",
  featured: true,
  year: "2025",
  awards: ["Community Innovation Award 2025"],
  client: "Space Coast Food Co.",
  impact:
    "Increased user engagement by providing timely updates on food trucks and local events, enhancing the local food community experience.",

  caseStudy: {
    overview:
      "Developed a platform for tracking food truck schedules with location-based timetables, menus, and event notifications.",
    challenges:
      "Designing a system for live updates, weekly subscriptions, and notifications for schedule changes and cancellations.",
    solutions:
      "Implemented dynamic schedules and subscription emails using Next.js, MongoDB for event and truck management, and Tailwind CSS for responsive design.",
    results:
      "Improved user retention and engagement, with automated weekly schedule emails and real-time notifications for schedule changes.",
  },

  features: [
    "Location-specific food truck schedules",
    "Menu and food details for each truck",
    "Weekly email subscription for schedules",
    "Notifications for schedule changes or cancellations",
    "Event listings at each location",
    "Mobile-friendly responsive design",
    "Interactive calendar and filters",
  ],

  futureImprovements: [
    "Integration with GPS to track food trucks in real time",
    "User reviews and ratings for food trucks",
    "Push notifications via mobile app",
    "Event recommendation engine based on preferences",
  ],

  faq: [
    {
      question: "How do I get updates for my favorite location?",
      answer:
        "Subscribe to the location’s weekly schedule and receive email notifications for any changes or cancellations.",
    },
    {
      question: "Can I see the menu of each food truck?",
      answer:
        "Yes, each food truck profile lists the items they are serving at that location.",
    },
    {
      question: "Does it notify me if a truck cancels?",
      answer: "Yes, users receive instant notifications about cancellations or changes.",
    },
  ],
},

{
  id: 5,
  title: "321 No Pests",
  slug: "321-no-pests",
  category: "Web Development",
  image: "/img/portfolio/pests/1.png",
  images: [
    "/img/portfolio/pests/1.png",
    "/img/portfolio/pests/2.png",
    "/img/portfolio/pests/3.png",
    "/img/portfolio/pests/4.png",
  ],
  description:
    "321 No Pests is an online pest control platform offering PestGuard solutions. The site features a unique area-based price calculator, allowing users to estimate service costs depending on location and pest type, while providing clear information about services, prevention tips, and expert guidance.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  liveUrl: "https://321nopests.com/",
  featured: true,
  year: "2025",
  awards: ["Bold Service Website 2025"],
  client: "321 No Pests",
  impact:
    "Increased online bookings and engagement by providing a unique price calculator and clear service offerings for customers.",

  caseStudy: {
    overview:
      "Built a responsive platform for PestGuard solutions with dynamic pricing based on area selection, plus service information and contact forms.",
    challenges:
      "Developing an intuitive price calculator while maintaining a bold, modern design that stands out in the industry.",
    solutions:
      "Implemented area-based dynamic pricing using JavaScript logic, Next.js for fast rendering, and Tailwind CSS for striking, responsive layouts.",
    results:
      "Boosted user engagement, simplified booking decisions, and enhanced the company’s bold online presence.",
  },

  features: [
    "Area-based service price calculator",
    "Service descriptions with pest prevention tips",
    "Mobile-friendly responsive design",
    "Customer testimonials",
    "SEO optimized for local searches",
    "Interactive contact and inquiry forms",
    "Educational content for pest management",
  ],

  futureImprovements: [
    "Live chat support for instant pest consultations",
    "Subscription plans for recurring services",
    "Expanded pest coverage with dynamic updates",
    "Interactive visual guides for pest identification",
  ],

  faq: [
    {
      question: "How does the price calculator work?",
      answer:
        "Select your area and pest type, and the calculator dynamically estimates the service cost.",
    },
    {
      question: "Can I book services online?",
      answer: "Yes, users can book pest control services directly through the website.",
    },
    {
      question: "Is the site mobile-friendly?",
      answer:
        "Absolutely, the platform is fully responsive and optimized for all devices.",
    },
  ],
},

{
  id: 6,
  title: "GabeCo Builders",
  slug: "gabeco-builders",
  category: "Web Development",
  image: "/img/portfolio/builders/1.png",
  images: [
    "/img/portfolio/builders/1.png",
    "/img/portfolio/builders/2.png",
    "/img/portfolio/builders/3.png",
    "/img/portfolio/builders/4.png",
  ],
  description:
    "GabeCo Builders is a construction services platform showcasing comprehensive interior and exterior solutions, custom remodels, and property maintenance. The website highlights their services, project references, and expertise for residential and commercial clients.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  liveUrl: "https://gabeco.builders/",
  featured: true,
  year: "2025",
  awards: ["Top Construction Website 2025"],
  client: "GabeCo Builders",
  impact:
    "Increased inquiries and showcased services effectively, helping clients understand comprehensive solutions and request quotes online.",

  caseStudy: {
    overview:
      "Built a detailed website presenting all construction services, custom remodels, exterior renovations, and property maintenance, with visually appealing layouts.",
    challenges:
      "Organizing multiple service categories with clear descriptions, images, and calls-to-action without overwhelming users.",
    solutions:
      "Tailored responsive design with Next.js, structured service sections for intuitive navigation, and optimized media for portfolio displays.",
    results:
      "Boosted online inquiries, improved client understanding of offerings, and increased engagement across service pages.",
  },

  features: [
    "Comprehensive service listings with categories",
    "Portfolio of previous projects",
    "Free estimate request forms",
    "Mobile-friendly responsive design",
    "SEO optimized for construction services",
    "Client testimonials",
    "Detailed interior and exterior service descriptions",
  ],

  futureImprovements: [
    "Interactive project map",
    "Virtual consultation scheduling",
    "Blog for construction tips and updates",
    "Multi-language support",
  ],

  faq: [
    {
      question: "What services does GabeCo Builders offer?",
      answer:
        "Services include interior/exterior design, custom remodels, property maintenance, and detailed project consultations.",
    },
    {
      question: "Can I view past projects?",
      answer:
        "Yes, the portfolio section showcases completed projects with images and descriptions.",
    },
    {
      question: "How do I request a quote?",
      answer:
        "Use the free estimate forms available on the website to submit your project details.",
    },
  ],
},

{
  id: 7,
  title: "SOG Landscape",
  slug: "sog-landscape",
  category: "Web Development",
  image: "/img/portfolio/landscape/1.png",
  images: [
    "/img/portfolio/landscape/1.png",
    "/img/portfolio/landscape/2.png",
    "/img/portfolio/landscape/3.png",
    "/img/portfolio/landscape/4.png",
  ],
  description:
    "SOG Landscape provides comprehensive landscaping services across Brevard County, including landscape maintenance, installation, tree trimming, storm cleanup, and specialized services like sea wall installations and camper storage. The site highlights the full spectrum of offerings for both residential and commercial properties.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  liveUrl: "https://sog-landscape.com/",
  featured: true,
  year: "2025",
  awards: ["Best Landscaping Website 2025"],
  client: "SOG Landscape",
  impact:
    "Improved lead generation, clearly presented services, and enhanced engagement with prospective clients across all landscaping needs.",

  caseStudy: {
    overview:
      "Developed a visually rich, responsive website showcasing a wide range of landscaping services with detailed descriptions and service categories.",
    challenges:
      "Presenting diverse services such as maintenance, installation, demolition, and storm cleanup in a cohesive and user-friendly way.",
    solutions:
      "Next.js for optimized performance, Tailwind CSS for responsive layouts, and structured service sections with high-quality images.",
    results:
      "Significant increase in inquiries and client engagement due to clear presentation of services and interactive galleries.",
  },

  features: [
    "Detailed service listings: maintenance, installation, lighting, sea walls, tree trimming, brush removal, and storm cleanup",
    "Portfolio and image galleries for completed projects",
    "Mobile-friendly responsive design",
    "Contact and consultation request forms",
    "SEO optimized for landscaping services",
    "Client testimonials and reviews",
    "Event and seasonal service highlights",
  ],

  futureImprovements: [
    "3D landscape visualization tools",
    "Online booking for consultations",
    "Video showcases of projects",
    "Multi-language support for broader audience",
  ],

  faq: [
    {
      question: "What services does SOG Landscape provide?",
      answer:
        "Services include maintenance, installation, tree trimming, storm cleanup, brush removal, lighting, sea walls, demolition, and camper storage.",
    },
    {
      question: "Can I request a consultation online?",
      answer:
        "Yes, the website features contact forms to schedule consultations for landscaping services.",
    },
    {
      question: "Is the site mobile-friendly?",
      answer: "Yes, it is fully responsive for all devices.",
    },
  ],
},
{
  id: 8,
  title: "Darlene’s Barbershop",
  slug: "darlenes-barbershop",
  category: "Web Development",
  image: "/img/portfolio/barbershop/1.png",
  images: [
    "/img/portfolio/barbershop/1.png",
    "/img/portfolio/barbershop/2.png",
    "/img/portfolio/barbershop/3.png",
    "/img/portfolio/barbershop/4.png",
  ],
  description:
    "Darlene’s Barbershop website provides everything a customer needs—from opening hours, pricing, and services to staff profiles and online appointment booking. The site also features dynamic updates, such as a CV submission page for new hires, ensuring the barbershop’s online presence remains current and fully functional.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  liveUrl: "https://darlenesbarbershop.com/",
  featured: true,
  year: "2025",
  awards: ["Best Service Website 2025"],
  client: "Darlene’s Barbershop",
  impact:
    "Improved customer engagement, increased appointment bookings, and streamlined hiring inquiries through online CV submissions and updated content.",

  caseStudy: {
    overview:
      "Developed a responsive website consolidating service information, staff profiles, pricing, and booking functionality with dynamic updates for hiring new staff.",
    challenges:
      "Ensuring a comprehensive site that provides all relevant information and allows for easy updates without disrupting the user experience.",
    solutions:
      "Next.js for fast performance, Tailwind CSS for responsive layouts, and dynamic CMS integration for real-time updates to services and CV submission pages.",
    results:
      "Increased appointment bookings by 35%, improved user satisfaction, and streamlined hiring submissions online.",
  },

  features: [
    "Complete service listings and pricing",
    "Online appointment booking",
    "Staff profiles and CV submission page",
    "Opening hours and contact info",
    "Mobile-friendly responsive design",
    "SEO optimized for local barbershop searches",
    "Gallery showcasing styles and barbershop ambiance",
  ],

  futureImprovements: [
    "Push notifications for promotions and bookings",
    "Integration with loyalty programs",
    "Online payment for appointments",
    "Video tutorials and styling tips",
  ],

  faq: [
    {
      question: "How can I book an appointment?",
      answer:
        "Use the online booking system to select your desired service, date, and time for instant confirmation.",
    },
    {
      question: "How can I apply for a job?",
      answer:
        "Submit your CV through the dedicated page on the website; admin can update staff listings dynamically.",
    },
    {
      question: "Is the website mobile-friendly?",
      answer:
        "Yes, it is fully responsive and optimized for smartphones and tablets.",
    },
  ],
},

{
  id: 9,
  title: "CashQuiver",
  slug: "cashquiver",
  category: "Web Development",
  image: "/img/portfolio/finance/1.png",
  images: [
    "/img/portfolio/finance/1.png",
    "/img/portfolio/finance/2.png",
    "/img/portfolio/finance/3.png",
    "/img/portfolio/finance/4.png",
  ],
  description:
    "CashQuiver is a fintech platform that simplifies budgeting, dividend tracking, and passive income forecasting. Users can create portfolios, input budgets, track dividends, and visualize projected income streams, helping them plan for retirement and personal financial goals with precision.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  liveUrl: "https://cashquiver.com/",
  featured: true,
  year: "2025",
  awards: ["Fintech Innovation Award 2025"],
  client: "CashQuiver Inc.",
  impact:
    "Empowered users to track their finances, forecast dividend payouts, and plan budgets effectively, improving financial literacy and goal achievement.",

  caseStudy: {
    overview:
      "Built a responsive fintech platform for budgeting, dividend tracking, and forecasting future income, offering users actionable insights into their finances.",
    challenges:
      "Ensuring accurate financial calculations, real-time dashboard updates, and an intuitive UX for managing multiple dividend stocks and budgets.",
    solutions:
      "Next.js for server-side rendering, MongoDB for secure data storage, Tailwind CSS for responsive dashboards, and dynamic calculation tools for dividend forecasting.",
    results:
      "Increased platform engagement, enabled users to plan finances effectively, and simplified tracking of dividend-based income streams.",
  },

  features: [
    "Budget tracking and expense management",
    "Dividend portfolio management",
    "Forecasted income dashboards",
    "Secure user accounts and data storage",
    "Mobile-friendly responsive design",
    "Step-by-step guidance for financial planning",
    "Subscription plans for advanced features",
  ],

  futureImprovements: [
    "AI-driven investment recommendations",
    "Integration with brokerage accounts",
    "Mobile app with push notifications",
    "Multi-currency and international support",
  ],

  faq: [
    {
      question: "Can I track dividend stocks?",
      answer:
        "Yes, users can input dividend stocks to forecast payouts and incorporate them into their budget.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely, the platform uses secure storage and encryption to protect user information.",
    },
    {
      question: "Can I use CashQuiver on mobile?",
      answer:
        "Yes, the platform is fully responsive and accessible on all devices.",
    },
  ],
},
{
  id: 10,
  title: "CapaciTater",
  slug: "capacitater",
  category: "Web Development",
  image: "/img/portfolio/capacitater/1.png",
  images: [
    "/img/portfolio/capacitater/1.png",
    "/img/portfolio/capacitater/2.png",
    "/img/portfolio/capacitater/3.png",
    "/img/portfolio/capacitater/4.png",
  ],
  description:
    "CapaciTater is a team capacity planning platform that helps managers visualize team allocations and resource assignments. It enables better decision-making, saves time, and optimizes project planning by providing easy-to-understand visualizations of team workloads and assignments.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "React"],
  liveUrl: "https://capacitater.com/",
  featured: true,
  year: "2025",
  awards: ["Best Productivity Tool 2025"],
  client: "CapaciTater Inc.",
  impact:
    "Enhanced project management efficiency by providing clear visualizations of team capacity, improving resource allocation and saving time and costs.",

  caseStudy: {
    overview:
      "Developed a responsive platform for capacity planning and team assignment visualization, helping managers make informed decisions quickly.",
    challenges:
      "Creating intuitive dashboards that present complex resource data in a simple and actionable way for managers.",
    solutions:
      "Implemented dynamic visualizations using React components, integrated interactive dashboards, and designed responsive layouts with Tailwind CSS for accessibility on all devices.",
    results:
      "Improved team planning efficiency, reduced scheduling conflicts, and provided managers with actionable insights for resource allocation.",
  },

  features: [
    "Visual dashboards for team assignments and workloads",
    "Resource allocation overview with easy-to-digest graphs",
    "Project planning tools with clear timelines",
    "Mobile-friendly responsive design",
    "Interactive charts and progress tracking",
    "Secure login and data management",
    "Optimized for quick decision-making and planning",
  ],

  futureImprovements: [
    "Integration with external project management tools",
    "Automated alerts for over-allocated resources",
    "Advanced analytics for productivity forecasting",
    "Customizable dashboards per team or project",
  ],

  faq: [
    {
      question: "How does CapaciTater help managers?",
      answer:
        "It provides clear visualizations of team workloads and resource assignments, enabling better planning and decision-making.",
    },
    {
      question: "Can I view team capacity on mobile?",
      answer: "the platform is fully responsive and accessible on PC and Tab views. Mobile view work is in progress.",
    },
    {
      question: "Does it help save time?",
      answer:
        "Yes, by simplifying team planning and providing actionable insights, it reduces manual tracking and planning time.",
    },
  ],
},
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, TechCorp",
    content:
      "They rebuilt our site in 3 weeks. Our leads went up 38%. Clean design, fast load times, and it actually converts visitors into customers.",
    avatar: "/img/testi/testi-img-1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, SaaS Startup",
    content:
      "Professional, fast, and results-focused. They migrated us from WordPress with zero SEO loss and 22% better conversions.",
    avatar: "/img/testi/testi-img-3.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Services Co.",
    content:
      "Finally, a website that works. Clean UX, faster load times, and clearer CTAs. Our conversion rate improved immediately.",
    avatar: "/img/testi/testi-img-1.png",
    rating: 5,
  },
];
