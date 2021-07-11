import Head from 'next/head';
import styled from 'styled-components';

import Footer from '../components/footer';
import Header from '../components/header';

const LayoutWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export default function Layout({ children, transparent = false }) {
  return (
    <LayoutWrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header transparent={transparent} />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
}
