import Head from 'next/head';
import styled from 'styled-components';

import { Container, Layout, Parallax, QuoteCard, TitleCard, VideoBanner } from '../components/';
import { indexNavItems, thisIsUsImages } from '../constants';
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

const IndexNavWrapper = styled.div`
  background: ${({ theme }) => theme.bg.secondary};
`;

const IndexNav = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
`;
const IndexNavCard = styled.div`
  :nth-child(4),
  :nth-child(5),
  :nth-child(6) {
    padding-top: calc(var(--pad) * 2);
  }
  width: calc(calc(100% / 3) - calc(var(--pad) * 1.25));

  @media ${device.laptop} {
    width: 100%;
    margin-bottom: var(--pad);
    :nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      padding-top: 0px;
    }
  }
`;
const IndexNavTitle = styled.h2`
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: -0.03em;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
const IndexNavDesc = styled.p`
  font-size: 18px;
  line-height: 1.75;
  font-weight: 300;
  color: ${({ theme }) => theme.text.light};
  margin-top: calc(var(--pad) / 2);

  @media ${device.mobile} {
    margin-top: var(--pad);
  }
`;
const IndexNavHr = styled.hr`
  border-top-width: 2px;
  margin-top: calc(var(--pad) / 2);
  @media ${device.mobile} {
    margin-top: var(--pad);
    margin-bottom: calc(var(--pad) / 2);
  }
`;
const IndexNavLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tigerspike</title>
      </Head>

      <TitleCard overline={overline} heading={heading} />
      <VideoBanner url="https://www-cdn.tigerspike.com/wp-content/uploads/2019/10/Homepage-Video-muted.mp4?_=1" />
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
      <IndexNavWrapper>
        <IndexNav>
          {indexNavItems.map(({ id, title, desc, link }) => (
            <IndexNavCard key={id}>
              <IndexNavTitle>{title}</IndexNavTitle>
              <IndexNavDesc>{desc}</IndexNavDesc>
              <IndexNavHr />
              <IndexNavLink>
                {link}
                <strong> →</strong>
              </IndexNavLink>
            </IndexNavCard>
          ))}
        </IndexNav>
      </IndexNavWrapper>
    </Layout>
  );
}
