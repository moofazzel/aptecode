// components/Banner.tsx
"use client";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage: string; // full path in /public or remote URL
}

export default function PageBanner({ title, subtitle, bgImage }: BannerProps) {
  return (
    <section
      className="relative w-full min-h-[300px] md:min-h-[420px] flex items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 md:mt-3 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
