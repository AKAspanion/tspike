import { useLayoutEffect, useRef, useState } from 'react';
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

export default function ParallaxImage({ img, alt, speed = 0.25, height = 300 }) {
  const ref = useRef();
  const [parallax, setParallax] = useState(0);

  useLayoutEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const onScroll = () => {
    const parallaxDist = height;
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

    parallax = Math.round(parallaxDist * percentScrolled * speed);
    setParallax(parallax);

    console.log(parallax);
  };

  return (
    <ParallaxContainer style={{ height: `${height}px` }}>
      <ParallaxImageContainer ref={ref} onScroll={() => onScroll()}>
        <ParallaxImageImg
          alt={alt}
          src={img}
          style={{ transform: `translate(-50%, ${parallax}px)` }}
        />
      </ParallaxImageContainer>
    </ParallaxContainer>
  );
}
