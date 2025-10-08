"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";
import { Clock, User } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How GEO & SEO Web Apps Boost Your Business",
    date: "25 JUNE, 2024",
    author: "POST BY: APTECODE",
    image: "/img/blog/post-15.jpg",
    imageAlt: "Young man and woman in office setting with laptop",
  },
  {
    id: 2,
    title: "Custom Software: Why Your Brand Needs It",
    date: "25 JUNE, 2024",
    author: "POST BY: APTECODE",
    image: "/img/blog/post-16.jpg",
    imageAlt: "Group of people around table looking at laptop",
  },
  {
    id: 3,
    title: "Crypto Social Services: Building Strong Communities",
    date: "25 JUNE, 2024",
    author: "POST BY: APTECODE",
    image: "/img/blog/post-17.jpg",
    imageAlt: "Diverse group of young people in office space",
  },
];

function LatestNewsAndTips() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeader
            title="APTECODE INSIGHTS"
            variant="secondary"
            className="justify-center mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Tips
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Metadata Bar */}
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center text-white text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h3>

                {/* Read More Button */}
                <GradientButton
                  variant="primary"
                  size="md"
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
                  showArrow={true}
                >
                  Read More
                </GradientButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNewsAndTips;
