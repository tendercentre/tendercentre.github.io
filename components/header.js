import Link from 'next/link';

import { config } from '../data';

function Header() {
  return (
    <header>
      <div className="py-20 text-center">
        <h1 className="text-5xl font-medium text-yellow-200 uppercase font-display">
          <Link href="/">
            <a>{config.title}</a>
          </Link>
        </h1>
        <p className="text-2xl italic font-medium">{config.tagline}</p>
      </div>
    </header>
  );
}

export { Header };
