import Head from 'next/head';
import styled from 'styled-components';

import { Container, Layout, Parallax, QuoteCard, TitleCard } from '../components/';
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

const ThisIsUsContainer = styled(Container)`
  padding: ${({ theme }) => theme.padding};
  padding-top: calc(${({ theme }) => theme.padding} * 2);
`;

const ThisIsUs = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.light};
`;

const ThisIsUsHr = styled.hr`
  width: 90px;
  margin-top: 27px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

const ThisisUsText = styled.div`
  width: 80%;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text.light};
  margin-top: ${({ theme }) => theme.padding};
  @media ${device.laptop} {
    width: 100%;
    font-size: 28px;
    flex-direction: column;
  }
`;

const ThisIsUsImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding};
  padding-top: calc(${({ theme }) => theme.padding} * 2);
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const ThisIsUsImage = styled.div`
  width: calc(calc(100% / 3) - calc(${({ theme }) => theme.padding} / 1.5));
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.padding};
  }
`;

const thisIsUsImages = [
  {
    id: 1,
    img: 'https://www-cdn.tigerspike.com/wp-content/uploads/2020/04/WhatWeDo-uai-1462x1097-uai-1032x774.jpeg',
  },
  {
    id: 2,
    img: 'https://www-cdn.tigerspike.com/wp-content/uploads/2020/10/360_mood-uai-1032x774.jpg',
  },
  {
    id: 3,
    img: 'https://www-cdn.tigerspike.com/wp-content/uploads/2019/08/Telstra-and-Tigerspike-working-together-uai-1032x774.jpg',
  },
];

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
      <ThisIsUsContainer>
        <ThisIsUs>This is us</ThisIsUs>
        <ThisIsUsHr />
        <ThisisUsText>
          Concentrix Tigerspike is the experience and service design practice of Concentrix, a
          global leader in CX, customer engagement and digital transformation.{' '}
        </ThisisUsText>
      </ThisIsUsContainer>
      <ThisIsUsImageContainer>
        {thisIsUsImages.map(({ id, img }) => (
          <ThisIsUsImage key={id}>
            <Parallax img={img} speed={0.5} />
          </ThisIsUsImage>
        ))}
      </ThisIsUsImageContainer>
    </Layout>
  );
}
