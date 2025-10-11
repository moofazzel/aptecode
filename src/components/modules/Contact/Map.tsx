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

  return (
    <div className={`pb-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <iframe
            src={mapSrc}
            width="100%"
            height={height}
            className="w-full rounded-lg shadow-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aptecode Location Map"
          />
        </div>
      </div>
    </div>
  );
};

export default MapSection;