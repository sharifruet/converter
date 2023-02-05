import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link href="/length">Go to Length Calculator</Link>
    </div>
  );
};

export default Home;
