import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href="/toc">
      <a>Table of Contents</a>
    </Link>
  </div>
)

export default Index