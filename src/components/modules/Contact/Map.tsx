'use client';

import React from 'react';

interface MapSectionProps {
  location?: string;
  height?: string;
  className?: string;
}

const MapSection: React.FC<MapSectionProps> = ({
  location = "Ozark,+AL,+United+States",
  height = "400px",
  className = ""
}) => {
  const mapSrc = `https://www.google.com/maps?q=${location}&output=embed`;

  // Structured data for the location
  const locationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Aptecode Office Location",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ozark",
      "addressRegion": "AL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.4593",
      "longitude": "-85.6405"
    }
  };

  return (
    <section className={`pb-32 ${className}`} itemScope itemType="https://schema.org/Place">
      {/* Structured Data for Location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationStructuredData),
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="sr-only">Our Location</h2>
          <iframe
            src={mapSrc}
            width="100%"
            height={height}
            className="w-full rounded-lg shadow-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aptecode Location Map - Ozark, Alabama, United States"
            aria-label="Interactive map showing Aptecode's location in Ozark, Alabama"
            role="application"
          />
          
          {/* Fallback content for accessibility */}
          <div className="sr-only" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="name">Aptecode</span> is located in{" "}
            <span itemProp="addressLocality">Ozark</span>,{" "}
            <span itemProp="addressRegion">Alabama</span>,{" "}
            <span itemProp="addressCountry">United States</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;