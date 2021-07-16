import Head from 'next/head';

import { Layout, Error404 } from '../../components';

export default function Page404() {
  return (
    <Layout transparent={true} pagefull={true}>
      <Head>
        <title>Not Found</title>
      </Head>
      <Error404 />
    </Layout>
  );
}
