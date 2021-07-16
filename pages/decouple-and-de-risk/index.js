import Head from 'next/head';

import {
  DecoupleContainers,
  Parallax,
  Layout,
  DecoupleProfile,
  PrevNextNav,
} from '../../components';

import { dataContainer } from '../../constants';
const overlayData = {
  maintext: 'Decouple and De-risk',
  addressLine1: '',
  addressLine2: 'MAY 24, 2021',
  email: '',
  phone: '',
};
const userProfile = {
  username: 'Moha Alsouli',
  position: 'Senior Platform Engineer,',
  imgUrl: 'https://www-cdn.tigerspike.com/wp-content/uploads/2020/07/Moha-Headshot.jpg',
  place: 'Sydney',
  linkedinLink: 'https://www.linkedin.com/in/mohaalsouli/',
};
const links = {
  prevLink: 'https://tigerspike.com/recruitment-is-like-dating/',
  nextLink: 'https://tigerspike.com/google-i-o-2021/',
};
export default function DecoupleAndDeRisk() {
  return (
    <Layout transparent={true} pagefull={true}>
      <Head>
        <title>Decouple And DeRisk</title>
      </Head>
      <Parallax
        speed={0.5}
        height={500}
        img="https://www-cdn.tigerspike.com/wp-content/uploads/2021/05/moha_decouple.jpg"
        overlay={true}
        top={0}
        overlayData={overlayData}
      />
      <DecoupleContainers dataContainer={dataContainer} />
      <DecoupleProfile userProfile={userProfile} />
      <PrevNextNav links={links} />
    </Layout>
  );
}
