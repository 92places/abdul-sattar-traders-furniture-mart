import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Normalize image source to relative path for GitHub Pages and subfolder hosting
  const resolvedSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return src;
    }
    if (src.startsWith('/')) {
      return '.' + src;
    }
    return src;
  }, [src]);

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`bg-[#38251B] text-[#F8F4ED] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      >
        <ImageOff className="w-8 h-8 text-[#C29A58] mb-2 opacity-80" />
        <span className="text-sm font-medium tracking-wide text-[#F8F4ED]/90">
          {fallbackTitle || alt || 'Abdul Sattar Furniture Mart'}
        </span>
        <span className="text-xs text-[#C29A58] mt-1">Kot Radha Kishan, Kasur</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#38251B]/10 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#38251B]/15 animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#795238] font-medium tracking-wider">Loading...</span>
        </div>
      )}
      <img
        src={resolvedSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  );
};
