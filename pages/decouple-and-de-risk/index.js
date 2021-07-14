import Head from 'next/head';

import { ContactCard, Parallax, Layout, LocationGrid, TitleCard } from '../../components';
const overlayData = {
  maintext: 'Sydney',
  addressLine1: '',
  addressLine2: 'MAY 24, 2021',
  email: '',
  phone: '',
};

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Parallax
        speed={0.5}
        height={500}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2021/05/moha_decouple.jpg"
        overlay={true}
        top={0}
        overlayData={overlayData}
      />
    </Layout>
  );
}
