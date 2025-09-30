"use client";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export default function PageBanner({ title, subtitle, bgImage }: BannerProps) {
  return (
    <section
      className="relative w-full min-h-[300px] md:min-h-[620px] flex items-center justify-center overflow-hidden text-white pg_header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg_shapes">
        <div className="single_shape shp1">
          <img src="/img/bg-img/dot.png" alt="" />
        </div>
        <div className="single_shape shp2">
          <img src="/img/bg-img/dot.png" alt="" />
        </div>
        <div className="single_shape shp3">
          <img src="/img/bg-img/dot.png" alt="" />
        </div>
      </div>
      <div className="text-center px-4">
        <h1 className="lg:text-[60px] text-[50px] font-bold leading-tight z-50 relative ttl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 md:mt-3 text-base md:text-lg text-white/90 max-w-3xl mx-auto z-50 relative">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
