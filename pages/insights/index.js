import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Layout, TitleCard } from '../../components';
import { insights } from '../../constants';
import {
  InsightsCard,
  InsightsImg,
  InsightsImgWrapper,
  InsightsLoading,
  InsightsName,
  InsightsSector,
  InsightsWrapper,
} from '../../styles/insights';

const overline = 'OUR MUSINGS.';
const heading = 'Some of our insights, updates, thoughts and passions.';
const subheading =
  'We love sharing. News and industry insights are great and informative but you can find out what makes us tick. From typography and tattoos right through to imposter syndrome and AR.';

let timeout;
let overTotal = 0;
const total = insights.length;
export default function Insights() {
  const [loading, setLoading] = useState(false);
  const [totalCards, setTotalCards] = useState(15);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    if (
      window.innerHeight + window.pageYOffset + 250 >= document.body.offsetHeight &&
      !loading &&
      overTotal < total
    ) {
      if (total > totalCards + 15) {
        clearTimeout(timeout);

        setLoading(true);
        timeout = setTimeout(() => {
          setLoading(false);
          setTotalCards((t) => {
            overTotal = t + 15;
            return t + 15;
          });
        }, 500);
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>Insights</title>
      </Head>
      <TitleCard overline={overline} heading={heading} subheading={subheading} />
      <InsightsWrapper>
        {insights.slice(0, totalCards).map(({ id, name, sector, img }) => (
          <InsightsCard key={id}>
            <InsightsImgWrapper>
              <InsightsImg src={img} alt={name} />
            </InsightsImgWrapper>
            <InsightsSector>{sector}</InsightsSector>
            <InsightsName>{name}</InsightsName>
          </InsightsCard>
        ))}
      </InsightsWrapper>
      {loading && <InsightsLoading>Loading...</InsightsLoading>}
    </Layout>
  );
}
