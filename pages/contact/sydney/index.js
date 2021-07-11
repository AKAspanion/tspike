import Head from 'next/head';

import { Layout, LocationGrid, TitleCard, VideoBanner } from '../../../components';

const overline = 'JOIN US.';
const heading = 'Do you want to be part of the team?';

export default function Careers() {
  return (
    <Layout>
      <Head>
        <title>Careers</title>
      </Head>
      <TitleCard overline={overline} heading={heading} />
      {/* video in careers section is a viemo blob, can't use it here  */}
      <VideoBanner url="https://www-cdn.tigerspike.com/wp-content/uploads/2019/10/Homepage-Video-muted.mp4?_=1" />

      <LocationGrid />
    </Layout>
  );
}
