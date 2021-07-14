import Head from 'next/head';

import { CareerCard, Parallax, Layout, LocationGrid, RowsContainer } from '../../../components';
import { careersLondon, rowContainerLondon } from '../../../constants';
const overlayData = {
  maintext: 'London',
  addressLine1: 'Level 4, Kings Court, 2-16 Goodge St',
  addressLine2: 'London, W1T 2QA',
  email: 'london@tigerspike.com',
  phone: '+44 (0)20 7148 6600',
};
export default function Careers() {
  return (
    <Layout transparent={true} pagefull={true}>
      <Head>
        <title>Contact London</title>
      </Head>
      <Parallax
        speed={0.5}
        height={400}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2017/05/London.jpg"
        overlay={true}
        top={0}
        overlayData={overlayData}
      />
      {rowContainerLondon && <RowsContainer rowsData={rowContainerLondon} />}
      {careersLondon && <CareerCard careerData={careersLondon} />}
      <Parallax
        speed={0.5}
        height={500}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2019/12/jude-arubi-DQoyFcXLMN8-unsplash-1.jpg"
        bottom={-46}
      />
      <LocationGrid />
    </Layout>
  );
}
