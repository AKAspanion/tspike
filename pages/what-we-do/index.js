import Head from 'next/head';
import styled from 'styled-components';

import { Layout, Parallax, QuoteCard, TitleCard, VideoBanner } from '../../components/';
import device from '../../theme/device';

const overline = 'SOLVERS. TRANSFORMERS. HUMANS.';
const heading = 'Catalyst drives the outcomes you need.';

const QuoteLeft = styled.div`
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    margin-top: ${({ theme }) => theme.padding};
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }
`;
const QuoteRight = styled.div`
  p {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
    margin-top: ${({ theme }) => theme.padding};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
  }

  @media ${device.laptop} {
    margin-top: ${({ theme }) => theme.padding};
    p {
      font-size: 28px;
    }
  }
  @media ${device.mobile} {
    p {
      font-size: 35px;
    }
  }
`;

export default function WhatWeDo() {
  return (
    <Layout>
      <Head>
        <title>Tigerspike</title>
      </Head>
      <TitleCard overline={overline} heading={heading} />
      <VideoBanner img="https://www-cdn.tigerspike.com/wp-content/uploads/2020/04/Catalyst.jpg" />
      <QuoteCard
        quoteLeft={
          <QuoteLeft>
            Catalyst is our proprietary experience creation practice.
            <p>
              Solving complex challenges for almost 20 years has taught us a lot. We’ve codified our
              way to ensure the right methods are combined with innovative ideas from incredible
              specialists across service design, experience definition and build.
            </p>
          </QuoteLeft>
        }
        quoteRight={
          <QuoteRight>
            Outcomes are unique to you, but velocity is needed by all. That’s why Catalyst has been
            designed with the flexibility to meet each of our clients’ specific needs.
            <p>
              It enables us to design and build experiences people love to use. Easy to say. Tough
              to do.
            </p>
          </QuoteRight>
        }
      />
      <Parallax
        height={700}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2020/02/DSC3864-1.jpg"
      />
    </Layout>
  );
}
