import Link from 'next/link';
import SEO from '../../components/SEO';
import { categories, categoryMap } from '../../lib/categories';

export default function CategoriesPage() {
  return (
    <>
      <SEO
        title="Categories"
        description="Browse all categories."
        ogType="website"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground">সকল ক্যাটাগরি</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category} href={`/categories/${category}`} legacyBehavior>
              <a className="bg-background border border-accents-2 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-foreground">{categoryMap[category]}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}