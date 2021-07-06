import Head from 'next/head';

import { ContactCard, Layout, QuoteCard, TitleCard } from '../../components';

const overline = 'GET TO KNOW US.';
const heading = 'Small enough to be agile, big enough to tackle any project.';

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <TitleCard overline={overline} heading={heading} full />
      <QuoteCard
        quoteLeft={
          <>
            <div>Concentrix Tigerspike</div>
            <div>is the experience and</div>
            <div>service design practice</div>
            <div>of Concentrix.</div>
          </>
        }
        quoteRight={
          <>
            Since 2003 we have been honing our strategic, creative and technology skills in pursuit
            of experiences that people love to use.
            <br />
            <br />
            We have created experiences for customers, for employees within the enterprise, for
            citizens and for volunteers.
          </>
        }
      />
      <ContactCard />
    </Layout>
  );
}
