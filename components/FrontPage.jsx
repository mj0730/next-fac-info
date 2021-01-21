import PropTypes from 'prop-types';
import Head from 'next/head';

const FrontPage = ({ updated }) => {
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
          that facility&apos;s details page.
        </p>
        <p>Visualize federal locality areas and facility locations for all FAA facilities with the locality map.</p>
      </div>

      <div className='updated'>Data Updated: {updated}</div>
    </section>
  );
};

export default FrontPage;

FrontPage.propTypes = {
  updated: PropTypes.string.isRequired,
};
