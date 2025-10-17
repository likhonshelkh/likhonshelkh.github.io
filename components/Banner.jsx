import React from 'react';

export default function Banner({ image, title, subtitle, alt }) {
  const hasImage = image && image.trim() !== '';

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {hasImage ? (
        <img
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}