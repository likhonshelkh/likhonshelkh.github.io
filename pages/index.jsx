import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import { Button, Text } from '@geist-ui/core';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to the personal blog of Likhon Sheikh. Discover articles on web development, programming, and technology."
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <Text h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          লিখন শেখের ব্যক্তিগত ব্লগে স্বাগতম
        </Text>
        <Text p className="text-lg md:text-xl text-accents-6 mb-8">
          ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং এবং প্রযুক্তি সম্পর্কে আমার লেখা পড়ুন।
        </Text>
        <Button
          auto
          type="secondary"
          shadow
          onClick={() => router.push('/blog')}
        >
          ব্লগ পড়ুন
        </Button>
      </div>
    </>
  );
}
