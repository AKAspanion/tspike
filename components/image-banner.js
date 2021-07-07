import styled from 'styled-components';

import useWindowReSize from '../hooks/useWindowReSize';
import device from '../theme/device';
import Parallax from './parallax';

const ImageBannerWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  padding-top: calc(var(--pad));
  position: relative;
  display: flex;
  @media ${device.mobile} {
    margin-top: 0px;
  }
`;

const ImageBannerParallax = styled.div`
  margin-right: var(--pad);
  overflow: hidden;
  width: calc(100% - 210px);

  @media ${device.laptop} {
    width: 100%;
    margin-right: 0px;
  }
`;

const ImageBannerArtboard = styled.div`
  width: 210px;
  background-image: url('https://www-cdn.tigerspike.com/wp-content/uploads/2021/03/Artboard-1@2x.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media ${device.laptop} {
    display: none;
  }
`;

export default function ImageBanner({ img }) {
  const { width } = useWindowReSize();
  const isMobile = width < 500;
  return (
    <ImageBannerWrapper>
      <ImageBannerParallax>
        <Parallax img={img} height={isMobile ? 360 : 640} />
      </ImageBannerParallax>
      <ImageBannerArtboard />
    </ImageBannerWrapper>
  );
}
