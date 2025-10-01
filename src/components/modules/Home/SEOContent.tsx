// Server component for SEO - renders content immediately
const SEOContent = () => {
  return (
    <>
      {/* SEO-optimized content that's always visible to crawlers */}
      <div className="sr-only">
        <h1>Why Choose Aptecode - Best Agency For Your Startup Business</h1>
        <p>
          Aptecode is the leading digital agency specializing in startup
          business solutions. We provide professional web development, UI/UX
          design, and digital marketing services to help startups grow and
          succeed in the competitive market.
        </p>
        <p>
          Our team of experienced developers and designers has completed over
          568 projects for more than 2352 awesome clients worldwide. We have won
          165+ awards for our exceptional work and innovative solutions.
        </p>
        <h2>Our Services Include:</h2>
        <ul>
          <li>Custom Web Development</li>
          <li>UI/UX Design</li>
          <li>Mobile App Development</li>
          <li>Digital Marketing</li>
          <li>SEO Optimization</li>
          <li>E-commerce Solutions</li>
        </ul>
      </div>
    </>
  );
};

export default SEOContent;
