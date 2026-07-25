import { Metadata } from 'next';
import ThankYouContent from '@/components/ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for booking Sheen Detailing.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
