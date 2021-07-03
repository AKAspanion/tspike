import Head from 'next/head';

import { TitleCard } from '../components/';

const overline = 'solvers. transformers. humans.';
const heading = (
  <>
    Catalyst drives the <br /> outcomes you need.
  </>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tigerspike</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website" />
      </Head>

      <main>
        <TitleCard overline={overline} heading={heading} />
      </main>
    </div>
  );
}
