import Breadcrumb from "@/components/modules/Blog/Breadcrumb";

const AboutBanner = () => {
  return (
    <div className="text-center mx-auto max-w-5xl px-4 py-16 md:pt-25">
      <h1 className="text-2xl md:text-7xl font-bold uppercase text-black mb-[30px]">
        ABOUT{" "}
        <span
          className="text-2xl md:text-7xl font-bold uppercase
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent sb_head relative"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          APTECODE
        </span>
      </h1>

      <div className="flex justify-center mb-4">
        <Breadcrumb />
      </div>

      <p className="hero-subtitle text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
        We’re a forward-thinking web development agency driven by creativity,
        precision, and performance. At Aptecode, we craft websites and digital
        experiences that empower brands to grow, engage, and lead in the modern
        web.
      </p>
    </div>
  );
};

export default AboutBanner;
