import Head from 'next/head';

import { ContactCard, HeadingCard, Layout, LocationGrid, TitleCard } from '../../../components';

const overline = 'COME AND SAY HELLO.';
const heading = 'Get in touch.';
const subheading =
  'Want to know more?  Let us help. <br/> Simply fill in the form and someone will get back to you as soon as possible.';

export default function Careers() {
  return (
    <Layout transparent={true}>
      <Head>
        <title>Contact</title>
      </Head>
      <TitleCard overline={overline} heading={heading} subheading={subheading} />
      <ContactCard img="https://www-cdn.tigerspike.com/wp-content/uploads/2019/12/TS_Melbourne-stand-1.jpg" />
      <HeadingCard
        heading="Visit one of our offices"
        subheading="Concentrix Tigerspike has global reach enhanced by local knowledge. We have 12 offices
          across many time zones, there is always someone working somewhere. We’d welcome a visit
          (when that’s allowed), come meet our dogs, try our coffee or maybe even start a project."
      />
      <LocationGrid />
    </Layout>
  );
}
