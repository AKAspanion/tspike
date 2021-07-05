import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ParallaxImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  contain: strict;
`;

const ParallaxContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: 1;
`;

const ParallaxImageImg = styled.img`
  bottom: 0;
  left: 50%;
  z-index: 2;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  will-change: transform;
  transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
`;

export default function ParallaxImage({ img, alt, speed = 0.5, height = 300 }) {
  const iRef = useRef();
  const cRef = useRef();
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    updateSize();

    document.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateSize);

    return () => {
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const updateSize = () => {
    try {
      const { width, height } = cRef.current.getBoundingClientRect();
      const { width: imgWidth, height: imgHeight } = iRef.current.getBoundingClientRect();

      const widthRatio = width / imgWidth;
      const heightRatio = height / imgHeight;

      if (widthRatio > heightRatio) {
        iRef.current.style.width = `${width * 1.4}px`;
        iRef.current.style.height = 'auto';
      } else {
        iRef.current.style.height = `${height * 1.4}px`;
        iRef.current.style.width = 'auto';
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onScroll = () => {
    try {
      const imgHeight = iRef.current.offsetHeight;
      const parallaxDist = imgHeight - height;
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

      parallax = Math.round(parallaxDist * percentScrolled * percentScrolled * speed);
      setParallax(parallax);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ParallaxContainer style={{ height: `${height}px` }}>
      <ParallaxImageContainer ref={cRef}>
        <ParallaxImageImg
          alt={alt}
          src={img}
          ref={iRef}
          style={{ transform: `translate(-50%, ${parallax}px)` }}
        />
      </ParallaxImageContainer>
    </ParallaxContainer>
  );
}
