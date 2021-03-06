import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import device from '../theme/device';

const VideoBannerTop = styled.div`
  background: ${({ theme }) => theme.bg.primary};
  height: var(--pad);
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const VideoBannerWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  position: relative;
  display: flex;
  @media ${device.mobile} {
    margin-top: 0px;
  }
`;

const VideoBannerVideo = styled.div`
  margin-right: var(--pad);
  overflow: hidden;
  width: calc(100% - 210px);
  video,
  img {
    width: 100%;
    height: 100%;

    @media ${device.mobile} {
      width: auto;
      height: 300px;
    }
  }

  img {
    @media ${device.mobile} {
      width: 100%;
      height: auto;
    }
  }

  @media ${device.laptop} {
    width: 100%;
    margin-right: 0px;
  }
`;

const VideoBannerArtboard = styled.div`
  width: 210px;
  background-image: url('https://www-cdn.tigerspike.com/wp-content/uploads/2021/03/Artboard-1@2x.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media ${device.laptop} {
    display: none;
  }
`;

export default function VideoBanner({ url, img }) {
  const ref = useRef();
  const [parallax, setParallax] = useState(8);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const onScroll = () => {
    try {
      const { height } = ref.current.getBoundingClientRect();
      const parallaxDist = height / 3;
      let parallax = 0;
      let scrollTop = 0;
      let windowHeight = 0;
      let percentScrolled = 0;
      let windowScrollHeight = 1;

      const doc = document.documentElement || document.body;
      scrollTop = doc.scrollTop;
      windowHeight = doc.clientHeight;
      windowScrollHeight = doc.scrollHeight;
      percentScrolled = scrollTop / (windowScrollHeight - windowHeight);

      parallax = Math.round(parallaxDist * percentScrolled * 0.8);
      setParallax(parallax + 8);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VideoBannerWrapper>
      <VideoBannerTop />
      <VideoBannerVideo ref={ref}>
        {url && (
          <video loop muted autoPlay style={{ transform: `translateY(${parallax}px)` }}>
            <source src={url} type="video/mp4" />
          </video>
        )}
        {img && <img alt="banner" src={img} style={{ transform: `translateY(${parallax}px)` }} />}
      </VideoBannerVideo>
      <VideoBannerArtboard></VideoBannerArtboard>
    </VideoBannerWrapper>
  );
}
