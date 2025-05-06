import { HomePage } from '@/components/home/home-page';

export default function Home() {
  return <HomePage params={Promise.resolve({ locale: 'en' })} />;
}
