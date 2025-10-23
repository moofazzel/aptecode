import { IconType } from "react-icons";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaChartLine,
  FaGraduationCap,
  FaHospital,
  FaLaptopCode,
  FaShoppingCart,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: IconType;
  category: string;
  highlight?: boolean;
  features?: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Website Development",
    slug: "website-development",
    description:
      "Fast, conversion-ready websites for new brands and SMBs. Built to win customers from day one.",
    image: "/img/service/sr1.jpg",
    icon: FaLaptopCode,
    category: "Core Service",
    highlight: true,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    id: 2,
    title: "E-Commerce Stores",
    slug: "ecommerce-stores",
    description:
      "Online stores that convert visitors into customers with seamless checkout and inventory management.",
    image: "/img/service/ecom.avif",
    icon: FaShoppingCart,
    category: "Core Service",
    highlight: false,
    features: ["Payment Integration", "Inventory System", "Mobile Shopping"],
  },
  {
    id: 3,
    title: "SaaS Dashboards",
    slug: "saas-dashboards",
    description:
      "Clean, intuitive dashboards with real-time data visualization and user management.",
    image: "/img/service/sas.avif",
    icon: FaChartLine,
    category: "Core Service",
    highlight: false,
    features: ["Real-time Analytics", "User Management", "API Integration"],
  },
  {
    id: 4,
    title: "Professional Services",
    slug: "professional-services",
    description:
      "Websites for law firms, agencies, and consultants that build trust and generate leads.",
    image: "/img/service/sr4.jpg",
    icon: FaBriefcase,
    category: "Core Service",
    highlight: false,
    features: ["Appointment Booking", "Client Portal", "Case Studies"],
  },
  {
    id: 5,
    title: "Personal Brand Websites",
    slug: "entrepreneur-websites",
    description:
      "Stand out online with a personal brand website that showcases your expertise and attracts opportunities.",
    image: "/img/service/sr1.jpg",
    icon: FaUserTie,
    category: "Core Service",
    highlight: true,
    features: ["Portfolio Showcase", "Blog Platform", "Lead Capture"],
  },
  {
    id: 6,
    title: "Healthcare Platforms",
    slug: "healthcare-platforms",
    description:
      "Patient portals, appointment systems, and HIPAA-compliant platforms for healthcare providers.",
    image: "/img/service/health.avif",
    icon: FaHospital,
    category: "Industry Specific",
    highlight: false,
    features: ["Patient Management", "Telehealth Ready", "HIPAA Compliant"],
  },
  {
    id: 7,
    title: "Education & E-Learning",
    slug: "education-platforms",
    description:
      "Learning management systems, course platforms, and educational websites that engage students.",
    image: "/img/service/tem.avif",
    icon: FaGraduationCap,
    category: "Industry Specific",
    highlight: false,
    features: ["Course Management", "Student Portal", "Progress Tracking"],
  },
  {
    id: 8,
    title: "Restaurant & Food Service",
    slug: "restaurant-websites",
    description:
      "Beautiful websites with online ordering, reservations, and menu management for restaurants.",
    image: "/img/service/rest.jpg",
    icon: FaUtensils,
    category: "Industry Specific",
    highlight: false,
    features: ["Online Ordering", "Reservation System", "Menu Management"],
  },
  {
    id: 9,
    title: "Real Estate Platforms",
    slug: "real-estate-platforms",
    description:
      "Property listing platforms with search, virtual tours, and lead capture for realtors.",
    image: "/img/service/state.avif",
    icon: FaBuilding,
    category: "Industry Specific",
    highlight: false,
    features: ["Property Listings", "Virtual Tours", "Lead Capture"],
  },
  {
    id: 10,
    title: "Event & Booking Systems",
    slug: "event-platforms",
    description:
      "Event management platforms with ticketing, registration, and attendee management.",
    image: "/img/service/event.avif",
    icon: FaCalendarAlt,
    category: "Industry Specific",
    highlight: false,
    features: ["Ticketing System", "Event Registration", "Attendee Management"],
  },
  {
    id: 11,
    title: "Nonprofit Organization Sites",
    slug: "nonprofit-sites",
    description:
      "Websites for charities and nonprofits with donation systems and volunteer management to support your mission.",
    image: "/img/service/non-p.jpg",
    icon: FaBriefcase,
    category: "Industry Specific",
    highlight: false,
    features: [
      "Donation Integration",
      "Volunteer Management",
      "Impact Stories",
    ],
  },
  {
    id: 12,
    title: "Portfolio & Showcase Sites",
    slug: "portfolio-websites",
    description:
      "Stunning, interactive portfolios for creatives and agencies to highlight work and attract clients.",
    image: "/img/service/port.jpg",
    icon: FaUserTie,
    category: "Core Service",
    highlight: false,
    features: ["Gallery Layouts", "Case Studies", "Contact Forms"],
  },
];

// Generate JSON-LD for SEO
export const generateServicesJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        url: `/services/${service.slug}`,
        image: service.image,
        description: service.description,
        areaServed: { "@type": "Place", name: "Global" },
      },
    })),
  };
};
