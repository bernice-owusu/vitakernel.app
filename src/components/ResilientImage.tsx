import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#174D35]/10 via-[#6B9B57]/15 to-[#E5A928]/15 p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#174D35]/10 flex items-center justify-center mb-3">
          <Leaf className="w-6 h-6 text-[#174D35]" />
        </div>
        <span className="text-sm font-medium text-[#174D35]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
