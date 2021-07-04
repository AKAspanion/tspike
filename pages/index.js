import Head from 'next/head';
import styled from 'styled-components';

import { Layout, QuoteCard, TitleCard } from '../components/';
import device from '../theme/device';

const overline = 'HELLO. NICE TO MEET YOU.';
const heading = 'We design and build experiences people love to use.';

const QuoteRight = styled.div``;
const QuoteRightItem = styled.div`
  padding-top: calc(${({ theme }) => theme.padding} / 2);

  :first-child {
    padding-top: 0px;
  }
  strong {
    font-weight: 600;
  }
  @media ${device.laptop} {
    :first-child {
      padding-top: ${({ theme }) => theme.padding};
    }
  }
`;

const QuoteLeft = styled.div`
  display: unset;
  @media ${device.mobile} {
    display: none;
  }
`;
const QuoteLeftMobile = styled.div`
  display: none;
  @media ${device.mobile} {
    display: unset;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tigerspike</title>
      </Head>

      <TitleCard overline={overline} heading={heading} />
      <QuoteCard
        quoteLeft={
          <>
            <QuoteLeft>
              <div>It’s simple, really.</div>
              <div>When people love the experience, they use</div>
              <div>the experience.</div>
            </QuoteLeft>
            <QuoteLeftMobile>
              It’s simple, really. When people love the experience, they use the experience.
            </QuoteLeftMobile>
          </>
        }
        quoteRight={
          <QuoteRight>
            <QuoteRightItem>When they use the experience, they become more engaged.</QuoteRightItem>
            <QuoteRightItem>
              When people become <strong> more engaged, brands thrive, businesses grow</strong> and
              <strong> organisations succeed.</strong>
            </QuoteRightItem>
            <QuoteRightItem>
              But if people don’t love the experience, well, none of that good stuff happens.
            </QuoteRightItem>
          </QuoteRight>
        }
      />
    </Layout>
  );
}
