import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import useWindowReSize from '../hooks/useWindowReSize';

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
  const firstValue = useRef();
  const [parallax, setParallax] = useState(0);

  useWindowReSize(
    useCallback(() => {
      try {
        updateSize();
      } catch (error) {
        console.log(error);
      }
    }, [])
  );

  useEffect(() => {
    try {
      window.addEventListener('scroll', onScroll);
    } catch (error) {
      console.log(error);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
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
      console.log(error);
    }
  };

  const onScroll = () => {
    try {
      const imgHeight = iRef.current.offsetHeight;
      const parallaxDist = imgHeight - height;

      let parallax = 0;

      const percentageSeen = () => {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const elementHeight = cRef.current.offsetHeight;
        const elementOffsetTop = cRef.current.getBoundingClientRect().top + window.scrollY;

        const distance = scrollTop + viewportHeight - elementOffsetTop;
        const percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));

        return Math.min(100, Math.max(0, percentage)) / 100;
      };

      const ownPercentScrolled = percentageSeen();

      parallax = Math.round(
        parallaxDist * (ownPercentScrolled - (firstValue.current || 0)) * speed
      );

      if (!firstValue.current) {
        firstValue.current = ownPercentScrolled;
      } else {
        setParallax(parallax);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ParallaxContainer style={{ height: `${height}px` }}>
      <ParallaxImageContainer ref={cRef}>
        <ParallaxImageImg
          alt={alt}
          src={img}
          ref={iRef}
          style={{ transform: `translate3D(-50%, ${parallax}px, 0)` }}
        />
      </ParallaxImageContainer>
    </ParallaxContainer>
  );
}
