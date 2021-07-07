import Head from 'next/head';

import { ContactCard, ImageBanner, Layout, QuoteCard, TitleCard } from '../../components';
import { nutshell } from '../../constants';
import {
  AboutFamilyContainer,
  AboutFamilyContent,
  AboutFamilyEmpty,
  AboutUsImage,
  NutshellCard,
  NutshellCardContainer,
  NutshellContainer,
  NutshellDesc,
  NutshellHeading,
  NutshellTitle,
  NutshellWrapper,
  QuoteRightItem,
} from './style';

const overline = 'GET TO KNOW US.';
const heading = 'Small enough to be agile, big enough to tackle any project.';

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <TitleCard overline={overline} heading={heading} full />
      <ImageBanner img="https://www-cdn.tigerspike.com/wp-content/uploads/2018/06/Sydney-TM-day.jpg" />
      <QuoteCard
        quoteLeft={
          <>
            <div>Concentrix Tigerspike</div>
            <div>is the experience and</div>
            <div>service design practice</div>
            <div>of Concentrix.</div>
          </>
        }
        quoteRight={
          <>
            <QuoteRightItem>
              Since 2003 we have been honing our
              <strong> strategic, creative and technology skills</strong> in pursuit of experiences
              that people love to use.
            </QuoteRightItem>
            <QuoteRightItem>
              <strong>
                We have created experiences for customers, for employees within the enterprise, for
                citizens and for volunteers.
              </strong>
            </QuoteRightItem>
          </>
        }
      />
      <AboutUsImage
        alt="about_us"
        src="https://www-cdn.tigerspike.com/wp-content/uploads/2021/01/engineers_right.jpg"
      />
      <AboutFamilyContainer>
        <AboutFamilyEmpty />
        <AboutFamilyContent>
          <p>
            As part of the <strong>Concentrix</strong> family, we can leverage the data, customer
            understanding and deep technology capability of a global organization with
            <strong> 250,000 employees working in 270 locations for 650 global brands.</strong>
          </p>
          <p>
            This gives our clients both the strength in depth of Concentrix’s extensive industry
            understanding and the cutting edge thinking of Concentrix Tigerspike’s award-winning
            team.
          </p>
        </AboutFamilyContent>
      </AboutFamilyContainer>
      <NutshellWrapper>
        <NutshellContainer>
          <NutshellHeading>IN A NUTSHELL</NutshellHeading>
          <NutshellCardContainer>
            {nutshell.map(({ id, title, desc }) => (
              <NutshellCard key={id}>
                <NutshellTitle>{title}</NutshellTitle>
                <NutshellDesc>{desc}</NutshellDesc>
              </NutshellCard>
            ))}
          </NutshellCardContainer>
        </NutshellContainer>
      </NutshellWrapper>
      <ContactCard />
    </Layout>
  );
}
