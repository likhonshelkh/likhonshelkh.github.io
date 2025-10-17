import { useState } from 'react';

export default function ShowMore({ children, maxHeight = 100 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={`relative overflow-hidden transition-max-height duration-500 ease-in-out`}
        style={{ maxHeight: expanded ? '1000px' : `${maxHeight}px` }}
      >
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-success hover:opacity-80 transition-opacity mt-2"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}