import Head from 'next/head';
import { Container } from '../components/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tigerspike</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website" />
      </Head>

      <main>
        <Container>Help</Container>
      </main>
    </div>
  );
}
