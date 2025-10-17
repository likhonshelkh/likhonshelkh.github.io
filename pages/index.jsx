import Link from 'next/link';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to the personal blog of Likhon Sheikh. Discover articles on web development, programming, and technology."
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          লিখন শেখের ব্যক্তিগত ব্লগে স্বাগতম
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং এবং প্রযুক্তি সম্পর্কে আমার লেখা পড়ুন।
        </p>
        <Link href="/blog" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
            ব্লগ পড়ুন
          </a>
        </Link>
      </div>
    </>
  );
}