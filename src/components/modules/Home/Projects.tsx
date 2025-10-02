import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "GEO & SEO WEB APP",
      image: "/img/project/project-img-5o.jpg",
      category: "Marketing",
      description: "Business Web App for Local SEO",
    },
    {
      id: 2,
      title: "Web Development",
      image: "/img/project/project-img-5.jpg",
      category: "Development",
      description: "Custom Software for Business Growth",
    },
    {
      id: 3,
      title: "UI/UX Design",
      image: "/img/project/project-img-6.jpg",
      category: "Design",
      description: "UI/UX Design for Business Growth",
    },
    {
      id: 4,
      title: "Mobile App",
      image: "/img/project/project-img-7.jpg",
      category: "Mobile",
      description: "Mobile App for Business Growth",
    },
    {
      id: 5,
      title: "Mobile App",
      image: "/img/project/project-img-8.jpg",
      category: "Mobile",
      description: "Mobile App for Business Growth",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4">
        <SectionHeader title="what we do for you" />
        <h3 className="text-[#171717] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-8 md:mb-14">
          Let&apos;s Look Our Recent <br className="hidden sm:block" /> Project
          Gallery
        </h3>
      </div>
      {/* Projects Grid */}
      <div className="max-w-[1750px] mx-auto px-4 flex flex-col lg:flex-row gap-4">
        {/* first image */}
        <div className="w-full lg:flex-1 grid grid-cols-1 gap-4 relative">
          <div key={projects[0].id} className="relative group">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-[#3F5AF3] mix-blend-multiply opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ mixBlendMode: "multiply" }}
            />
            {/* hover effect */}
            <div
              className="absolute bottom-0 left-0 right-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] p-6 md:p-8 lg:p-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,19,78,0) 47.46%, #0b1b76 100%)",
                mixBlendMode: "normal",
              }}
            >
              <h4 className="text-white text-xs md:text-sm mb-3 md:mb-5 font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200">
                {projects[0].title}{" "}
              </h4>
              <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 md:mb-7 font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-300">
                {projects[0].description}
              </p>
              <Link
                className="bg-white rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 flex items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-400 hover:scale-110 hover:bg-gray-100"
                href="/contact"
              >
                <ArrowRight className="text-[#a868fa] transition-all duration-300 hover:translate-x-1 hover:scale-110 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
        {/* others images */}
        <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.slice(1, 5).map((project) => (
            <div key={project.id} className="relative group">
              <Image
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
              />
              {/* Blue multiply overlay */}
              <div
                className="absolute inset-0 bg-[#3F5AF3] mix-blend-multiply opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ mixBlendMode: "multiply" }}
              />
              {/* Hover effect */}
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] p-4 md:p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,19,78,0) 47.46%, #0b1b76 100%)",
                  mixBlendMode: "normal",
                }}
              >
                <h4 className="text-white text-xs mb-2 md:mb-3 font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200">
                  {project.title}
                </h4>
                <p className="text-white text-sm md:text-lg mb-3 md:mb-4 font-bold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-300">
                  {project.description}
                </p>
                <Link
                  className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-400 hover:scale-110 hover:bg-gray-100"
                  href="/contact"
                >
                  <ArrowRight className="text-[#a868fa] transition-all duration-300 hover:translate-x-1 hover:scale-110 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
