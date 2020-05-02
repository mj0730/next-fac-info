import Link from 'next/link';
import * as facs from '../Scripts/facility_info';

const Index = () => (
  <div>
    <p>{console.log(facs.completePayTable('n90'))}</p>



    <Link href="FacilityPage"><a>FacPage</a></Link>
  </div>
)

export default Index