import Head from 'next/head';

const FrontPage = () => {
  const CURRENT_PPT = '10-28-2020';
  return (
    <section id='front-page'>
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <h1>pointSixtyFive Facility Information</h1>

      <div className='text-area'>
        <p>Go directly to detailed facility pay, staffing, and training data with the search bar.</p>
        <p>
          Search, filter, save, or print all facility data using the facilities tables. Click on a facility ID to go to
          that facility's details page.
        </p>
        <p>Visualize federal locality areas and facility locations for all FAA facilities with the locality map.</p>
      </div>

      <div className='updated'>Data Updated: {CURRENT_PPT}</div>
    </section>
  );
};

export default FrontPage;
