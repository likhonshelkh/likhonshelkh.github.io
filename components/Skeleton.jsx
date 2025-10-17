import React from 'react';

const Skeleton = ({ className }) => (
  <div className={`bg-accents-2 rounded-md animate-pulse ${className}`} />
);

export default Skeleton;