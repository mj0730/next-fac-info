import React from 'react';
import Head from 'next/head';

const FrontPage = () => {
  return (
    <section id='front-page'>
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <h1>pointSixtyFive Facility Information</h1>

      <div className='text-area'>
        <p>Navigate to detailed facility pay, staffing, and training data with the search bar.</p>
        <p>Search, filter, save, or print all facility data using the facilities tables.</p>
        <p>Visualize federal locality areas and facility locations for all FAA facilities with the locality map.</p>
      </div>
    </section>
  );
};

export default FrontPage;
