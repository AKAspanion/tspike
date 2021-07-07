import Head from 'next/head';

import { Layout, TitleCard } from '../../components';
import { work4, work6 } from '../../constants';
import {
  Work4Card,
  Work6Card,
  WorkImg,
  WorkImgWrapper,
  WorkName,
  WorkSector,
  WorkWrapper,
} from '../../styles/work';

const overline = 'OUR PROJECTS.';
const heading = 'We have helped over 450 organisations enhance their experiences.';
const subheading =
  'Take a look through a few of our client success stories and see how people are loving Concentrix Tigerspike experiences across business, enterprise, government and non-profits. ';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <TitleCard overline={overline} heading={heading} subheading={subheading} full />
      <WorkWrapper>
        {work4.map(({ id, name, sector, img }) => (
          <Work4Card key={id}>
            <WorkImgWrapper>
              <WorkImg src={img} alt={name} />
            </WorkImgWrapper>
            <WorkSector>{sector}</WorkSector>
            <WorkName>{name}</WorkName>
          </Work4Card>
        ))}
      </WorkWrapper>
      <WorkWrapper style={{ paddingTop: 0 }}>
        {work6.map(({ id, name, sector, img }) => (
          <Work6Card key={id}>
            <WorkImgWrapper>
              <WorkImg src={img} alt={name} />
            </WorkImgWrapper>
            <WorkSector>{sector}</WorkSector>
            <WorkName>{name}</WorkName>
          </Work6Card>
        ))}
      </WorkWrapper>
    </Layout>
  );
}
