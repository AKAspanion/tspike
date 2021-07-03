import Head from 'next/head';

import { Layout, TitleCard } from '../components/';

const overline = 'HELLO. NICE TO MEET YOU.';
const heading = 'We design and build experiences people love to use.';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tigerspike</title>
      </Head>

      <TitleCard overline={overline} heading={heading} />
    </Layout>
  );
}
