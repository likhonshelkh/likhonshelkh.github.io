import React from 'react';
import { categoryMap } from '../lib/categories';

const CategoryTranslator = ({ category }) => {
  const translatedCategory = categoryMap[category] || category;
  return <span>{translatedCategory}</span>;
};

export default CategoryTranslator;