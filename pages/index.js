import Head from 'next/head';
import { TitleCard } from '../components/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tigerspike</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website" />
      </Head>

      <main>
        <TitleCard
          overline="solvers. transformers. humans."
          heading={
            <>
              Catalyst drives the <br /> outcomes you need.
            </>
          }
        />
      </main>
    </div>
  );
}
