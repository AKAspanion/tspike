import Head from 'next/head';

import { Layout, TitleCard } from '../../components';

const overline = 'OUR MUSINGS.';
const heading = 'Some of our insights, updates, thoughts and passions.';
const subheading =
  'We love sharing. News and industry insights are great and informative but you can find out what makes us tick. From typography and tattoos right through to imposter syndrome and AR.';

export default function Insights() {
  return (
    <Layout>
      <Head>
        <title>Insights</title>
      </Head>
      <TitleCard overline={overline} heading={heading} subheading={subheading} />
    </Layout>
  );
}
