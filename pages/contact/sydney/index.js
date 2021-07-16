import Head from 'next/head';

import { CareerCard, Parallax, Layout, LocationGrid, RowsContainer } from '../../../components';
import { careersSydney, rowContainerSydney } from '../../../constants';

const overlayData = {
  maintext: 'Sydney',
  addressLine1: 'Level 1, 115 Cooper St',
  addressLine2: 'Surry Hills NSW 2010',
  email: 'sydney@tigerspike.com',
  phone: '+61 2 9361 5132',
};

export default function Careers() {
  return (
    <Layout transparent={true} pagefull={true}>
      <Head>
        <title>Contact Sydney</title>
      </Head>
      <Parallax
        speed={0.5}
        height={500}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2016/09/Sydney-2018.jpg"
        overlay={true}
        bottom={-46}
        overlayData={overlayData}
      />
      {rowContainerSydney && <RowsContainer rowsData={rowContainerSydney} />}
      {careersSydney && <CareerCard careerData={careersSydney} />}
      <Parallax
        speed={0.5}
        height={500}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2020/02/Sydney-Landscape-5.jpg"
        bottom={-46}
      />
      <LocationGrid />
    </Layout>
  );
}
