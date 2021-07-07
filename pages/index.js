import Head from 'next/head';
import Link from 'next/link';

import { Layout, Parallax, QuoteCard, TitleCard, VideoBanner } from '../components/';
import { navItems, thisIsUsImages } from '../constants';
import {
  IndexNav,
  IndexNavCard,
  IndexNavDesc,
  IndexNavHr,
  IndexNavLink,
  IndexNavTitle,
  IndexNavWrapper,
  QuoteLeft,
  QuoteLeftMobile,
  QuoteRight,
  QuoteRightItem,
  ThisIsUs,
  ThisIsUsContainer,
  ThisIsUsHr,
  ThisIsUsImage,
  ThisIsUsImageContainer,
  ThisisUsText,
} from '../styles/home';

const overline = 'HELLO. NICE TO MEET YOU.';
const heading = 'We design and build experiences people love to use.';

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
          {navItems.map(({ id, title, href, desc, link }) => (
            <IndexNavCard key={id}>
              <IndexNavTitle>{title}</IndexNavTitle>
              <IndexNavDesc>{desc}</IndexNavDesc>
              <IndexNavHr />
              <Link href={href}>
                <IndexNavLink>
                  {link}
                  <strong> →</strong>
                </IndexNavLink>
              </Link>
            </IndexNavCard>
          ))}
        </IndexNav>
      </IndexNavWrapper>
    </Layout>
  );
}
