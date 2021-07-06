import Head from 'next/head';
import styled from 'styled-components';

import { Layout, Parallax, QuoteCard, TitleCard, VideoBanner } from '../../components/';
import { catalystItems } from '../../constants';
import { headingText, subheadingText } from '../../mixins/';
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
    ${headingText}
    font-size: 42px;
    font-weight: 700;
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

const CatalystCard = styled.div`
  display: flex;
  justify-content: space-between;
  --pad: ${({ theme }) => theme.padding};
  background: ${({ theme }) => theme.bg.secondary};
  padding: calc(var(--pad) * 2);
  @media ${device.laptop} {
    flex-direction: column;
    padding: calc(var(--pad) * 2) var(--pad);
  }
`;

const CatalystCardItem = styled.div`
  width: calc(50% - calc(var(--pad)));
  @media ${device.laptop} {
    width: 100%;
  }
`;

const CatalystCardItemText = styled(CatalystCardItem)`
  padding-right: 18%;
  @media ${device.laptop} {
    padding: 0px !important;
  }
`;

const CatalystCardAlt = styled(CatalystCard)`
  flex-direction: row-reverse;
  background: ${({ theme }) => theme.bg.primary};
  @media ${device.laptop} {
    flex-direction: column;
    padding: calc(var(--pad) * 2) var(--pad);
  }
`;

const CatalystCardHeading = styled.h2`
  ${headingText};
  font-size: 36px;
  font-weight: 300;
  color: ${({ theme }) => theme.text.light};
  strong {
    font-weight: 600;
  }
  @media ${device.laptop} {
    margin-top: var(--pad);
  }
  @media ${device.tablet} {
    font-size: 24px;
    & + p {
      margin-top: calc(var(--pad) / 6);
    }
  }
`;

const CatalystCardSubHeading = styled.p`
  ${subheadingText};
  font-size: 16px;
  font-weight: 300;
  color: #777777 !important;
  margin-top: calc(var(--pad) / 2);
`;

const CatalystCardHr = styled.hr`
  width: 75px;
  border: 0;
  border-style: solid;
  border-top-width: 4px;
  margin-top: calc(var(--pad) / 2);
  border-color: ${({ theme }) => theme.colors.primary};
`;

const CatalystCardDescTitle = styled(CatalystCardSubHeading)`
  margin-top: 0;
  font-weight: 600;
  color: #333333 !important;
`;

const CatalystCardDesc = styled(CatalystCardSubHeading)`
  margin-top: 0;
`;

export default function WhatWeDo() {
  const getCardItem = ({ left, img, head, height, subhead, subhead2, desc }) => {
    return (
      <>
        <CatalystCardItem>
          <Parallax speed={0.8} height={height} img={img} />
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
              <CatalystCardDesc>{subtitle}</CatalystCardDesc>
            </div>
          ))}
        </CatalystCardItemText>
      </>
    );
  };
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
        speed={0.5}
        height={700}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2020/02/DSC3864-1.jpg"
      />
      {catalystItems.map((item) =>
        item.left ? (
          <CatalystCardAlt key={item.id}>{getCardItem(item)}</CatalystCardAlt>
        ) : (
          <CatalystCard key={item.id}>{getCardItem(item)}</CatalystCard>
        )
      )}
    </Layout>
  );
}
