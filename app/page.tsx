import Counter from '@/components/Counter';
import Heading from '@/components/Heading';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="">
         <ThemeToggle />
         <Heading />
         <Link href="/about">About</Link>
         <Counter />
      </div>
   );
}
