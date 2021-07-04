import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParallaxImageContainer = styled.div`
  background-position: top center;
  background-attachment: scroll;
  background-size: cover;
  height: 80vh;
  width: 100%;
`;

export default function ParallaxImage({ img }) {
  const ref = useRef();

  useEffect(() => {
    document.onscroll = onScroll;

    return () => (document.onscroll = null);
  });

  const onScroll = () => {
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = ref.current;
    var xvalue = 'center';
    var factor = 0.25;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + ' ' + yvalue + 'px';
  };

  return (
    <ParallaxImageContainer
      ref={ref}
      onScroll={() => onScroll()}
      style={{ backgroundImage: `url(${img})` }}
    />
  );
}
