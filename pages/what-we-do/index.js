import Head from 'next/head';
import styled from 'styled-components';

import {
  ContactCard,
  Container,
  Layout,
  Parallax,
  QuoteCard,
  TitleCard,
  VideoBanner,
} from '../../components/';
import { catalystHeroItems, catalystItems } from '../../constants';
import useWindowReSize from '../../hooks/useWindowReSize';
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
  align-items: center;
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

const CatalystSummaryCard = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
  div {
    padding: 0px;

    :nth-child(1),
    :nth-child(2) {
      margin-bottom: calc(var(--pad) * 2);
    }

    :nth-child(2),
    :nth-child(4) {
      padding-left: calc(var(--pad) * 2);
    }

    @media ${device.laptop} {
      margin-bottom: calc(var(--pad) / 2) !important;
      :nth-child(2),
      :nth-child(4) {
        padding-left: 0px;
      }
    }
  }
`;

const CatalystHeroCard = styled(CatalystSummaryCard)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
  padding-bottom: 0px;
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
`;

const CatalystHeroLeft = styled.div`
  width: calc(50% - calc(var(--pad)));

  @media ${device.laptop} {
    width: 100%;
  }

  h2 {
    ${headingText}
    font-size: 60px;
    color: ${({ theme }) => theme.text.light};

    @media ${device.laptop} {
      font-size: 40px;
    }

    @media ${device.mobile} {
      font-size: 35px;
    }
    span {
      position: relative;
      :after {
        background: ${({ theme }) => theme.colors.primary};
        position: absolute;
        content: '';
        left: 0;
        width: 100%;
        height: 12%;
        bottom: 10px;
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    margin-top: var(--pad);
    color: ${({ theme }) => theme.text.light};

    :nth-child(3) {
      margin-top: calc(var(--pad) / 2);
    }
  }
`;
const CatalystHeroRight = styled(CatalystHeroLeft)`
  padding-left: 0px !important;
  padding-top: calc(var(--pad) / 3) !important;
  h4 {
    ${headingText}
    font-size: 42px;
    font-weight: 700;
    color: #dddddd !important;

    @media ${device.laptop} {
      font-size: 28px;
    }

    @media ${device.mobile} {
      font-size: 33.33px;
      :last-child {
        padding-bottom: var(--pad);
      }
    }
  }
`;

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
