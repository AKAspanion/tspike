import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { Container } from '../components';
import useWindowReSize from '../hooks/useWindowReSize';
import device from '../theme/device';
import { Error404Text } from '../mixins/';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Error404Outer = styled.div`
  background: ${({ theme }) => theme.colors.black};
`;

const Error404Wrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  position: relative;
  padding: calc(var(--pad) * 2);
  display: flex;
  justify-content: center;
  margin: auto;
  color: ${({ theme }) => theme.colors.white};
  max-width: 600px;
  margin-top: 0px;
`;

const Error404WrapperInner = styled.div`
  width: 100%;
  text-align: center;
`;
const Error404Wrap = styled.div``;
const Error404WrapHead = styled.h2`
  font-size: 100px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  strong {
    font-weight: 600;
  }
`;

const Error404WrapHeadSubText = styled.h4`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  strong {
    font-weight: 600;
  }
  a {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Error404WrapHeadSubText2 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin-top: var(--pad);
  a {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
const Error404Ul = styled.ul`
  padding: calc(var(--pad) - 9px) var(--pad);
`;

const Error404MobileUl = styled(Error404Ul)`
  flex-direction: column;
  padding: 28px var(--pad) 8px var(--pad);
`;

const Error404Li = styled.li`
  cursor: pointer;
  font-size: 18px;
  padding: 0px 17px;
  padding-top: 3px;
  list-style: none;
  width: 50%;
  display: inline-block;
  word-spacing: 2.5px;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LinkText = styled.span`
  text-transform: uppercase;
  transition: transform 0.2s;
  font-weight: 600;
`;
export default function Error404() {
  const { width } = useWindowReSize();
  const isMobile = width < 500;
  return (
    <Error404Outer>
      <Error404Wrapper>
        <Error404WrapperInner>
          <Error404Wrap>
            <Error404WrapHead>Oh, ooh!</Error404WrapHead>
            <Error404WrapHeadSubText>
              This isn’t the thing you’re looking for.
            </Error404WrapHeadSubText>
            <Error404WrapHeadSubText2>
              Go to our <a href="https://tigerspike.com/">homepage</a>, check out some of{' '}
              <a href="https://tigerspike.com/works/">our work</a>
              <br />
              our latest <a href="https://tigerspike.com/blog/">news and articles.</a>.
            </Error404WrapHeadSubText2>
          </Error404Wrap>
        </Error404WrapperInner>
      </Error404Wrapper>
    </Error404Outer>
  );
}
