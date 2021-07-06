import Head from 'next/head';

import {
  ContactCard,
  Layout,
  Parallax,
  QuoteCard,
  TitleCard,
  VideoBanner,
} from '../../components/';
import { catalystHeroItems, catalystItems } from '../../constants';
import useWindowReSize from '../../hooks/useWindowReSize';
import {
  CatalystCard,
  CatalystCardAlt,
  CatalystCardDesc,
  CatalystCardDescTitle,
  CatalystCardHeading,
  CatalystCardHr,
  CatalystCardItem,
  CatalystCardItemText,
  CatalystCardSubHeading,
  CatalystHeroCard,
  CatalystHeroLeft,
  CatalystHeroRight,
  CatalystSummaryCard,
  QuoteLeft,
  QuoteRight,
} from './style';

const overline = 'SOLVERS. TRANSFORMERS. HUMANS.';
const heading = 'Catalyst drives the outcomes you need.';

export default function WhatWeDo() {
  const { width: widowWidth } = useWindowReSize();

  const isMobile = widowWidth < 500;

  const getCardItem = ({ left, img, head, height, subhead, subhead2, desc }) => {
    return (
      <>
        <CatalystCardItem>
          <Parallax speed={isMobile ? 0.5 : 0.7} height={isMobile ? 300 : height} img={img} />
        </CatalystCardItem>
        <CatalystCardItemText style={left ? { paddingLeft: '18%', paddingRight: 0 } : {}}>
          <CatalystCardHeading>
            <strong>Catalyst</strong> {head}
          </CatalystCardHeading>
          <CatalystCardSubHeading>{subhead}</CatalystCardSubHeading>
          <CatalystCardHr />
          <CatalystCardSubHeading>{subhead2}</CatalystCardSubHeading>
          {desc.map(({ id, title, subtitle }) => (
            <div key={id}>
              <span>&nbsp;</span>
              <CatalystCardDescTitle>{title}</CatalystCardDescTitle>
              <CatalystCardDesc dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
          ))}
        </CatalystCardItemText>
      </>
    );
  };
  return (
    <Layout>
      <Head>
        <title>What We Do</title>
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
        speed={0.5}
        height={700}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2020/02/DSC3864-1.jpg"
      />
      <CatalystHeroCard>
        <CatalystHeroLeft>
          <h2>
            Options for <span>every</span> <span>outcome.</span>
          </h2>
          {catalystHeroItems.details.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </CatalystHeroLeft>
        <CatalystHeroRight>
          {catalystHeroItems.list.map((l, i) => (
            <h4 key={i}>{l}</h4>
          ))}
        </CatalystHeroRight>
      </CatalystHeroCard>
      <CatalystSummaryCard>
        {catalystItems.map(({ id, head, subhead }) => (
          <CatalystCardItemText key={id}>
            <CatalystCardHeading>
              <strong>Catalyst</strong> {head}
            </CatalystCardHeading>
            <CatalystCardSubHeading>{subhead}</CatalystCardSubHeading>
          </CatalystCardItemText>
        ))}
      </CatalystSummaryCard>
      {catalystItems.map((item) =>
        item.left ? (
          <CatalystCardAlt key={item.id}>{getCardItem(item)}</CatalystCardAlt>
        ) : (
          <CatalystCard key={item.id}>{getCardItem(item)}</CatalystCard>
        )
      )}
      <ContactCard></ContactCard>
    </Layout>
  );
}
