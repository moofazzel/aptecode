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
