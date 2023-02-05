import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>[Unit Converter]</h1>
      <Link href="/length">Length Conversion</Link>
    </div>
  );
};

export default Home;
