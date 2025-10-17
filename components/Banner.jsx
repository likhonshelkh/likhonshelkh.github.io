import React from 'react';
import Image from 'next/image';

export default function Banner({ image, title, subtitle, alt }) {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <Image
        src={image}
        alt={alt || title}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        priority
        className="object-cover"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}