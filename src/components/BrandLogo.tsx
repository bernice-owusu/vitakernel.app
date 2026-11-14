import React, { useState } from 'react';
import { LOGO_URL, LOGO_LIGHT_URL } from '../data/vitakernelData';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    const textColor = variant === 'light' ? 'text-white' : 'text-[#174D35]';
    const taglineColor = variant === 'light' ? 'text-[#E5A928]' : 'text-[#6B9B57]';
    return (
      <span className={`inline-flex flex-col leading-none ${className}`}>
        <span className={`text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap ${textColor}`}>
          VITAKERNEL
        </span>
        {showTagline && (
          <span className={`text-xs font-medium mt-1 ${taglineColor}`}>
            Turning mango by-products into valuable resources
          </span>
        )}
      </span>
    );
  }

  if (variant === 'light') {
    return (
      <div className={`inline-flex flex-col items-start gap-3 ${className}`}>
        <img
          src={LOGO_LIGHT_URL}
          alt="Vitakernel Mango Seed Oil official logo"
          onError={() => setImgError(true)}
          className="h-24 sm:h-28 w-auto object-contain"
        />
        {showTagline && (
          <span className="text-xs font-medium text-[#E5A928] leading-snug">
            Turning mango by-products into valuable resources
          </span>
        )}
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 max-w-full ${className}`}>
      <img
        src={LOGO_URL}
        alt="Vitakernel Mango Seed Oil official logo"
        onError={() => setImgError(true)}
        className="h-14 sm:h-18 w-auto object-contain shrink-0"
      />
      {showTagline && (
        <span className="hidden xl:inline-block text-xs font-medium text-[#6B9B57] leading-snug">
          Turning mango by-products into valuable resources
        </span>
      )}
    </span>
  );
};
