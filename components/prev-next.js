import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { Container } from '../components';
import useWindowReSize from '../hooks/useWindowReSize';
import device from '../theme/device';
import { headingText } from '../mixins/';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PrevNextWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  position: relative;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bg.secondary};
  margin-top: 0px;
`;

const PrevNextWrapperInner = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

const HeadingWrap = styled.div``;
const HeadingWrapHead = styled.h2`
  font-size: 18px;
  font-weight: 500;
  strong {
    font-weight: 600;
  }
`;
const ProfileImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  max-width: 10%;
`;

const PrevNextUl = styled.ul`
  padding: calc(var(--pad) - 9px) var(--pad);
`;

const PrevNextMobileUl = styled(PrevNextUl)`
  flex-direction: column;
  padding: 28px var(--pad) 8px var(--pad);
`;

const PrevNextLi = styled.li`
  cursor: pointer;
  font-size: 18px;
  padding: 0px 17px;
  padding-top: 3px;
  list-style: none;
  width: 50%;
  display: inline-block;
  word-spacing: 2.5px;
`;

const NavLink = styled.a`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  transition: transform 0.2s;
  :hover {
    transform: translateX(-10px);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const LinkText = styled.span`
  text-transform: uppercase;
  transition: transform 0.2s;
  font-weight: 600;
`;
export default function PrevNextNav({ links: { prevLink, nextLink } }) {
  const { width } = useWindowReSize();
  const isMobile = width < 500;
  return (
    <>
      <PrevNextWrapper>
        <PrevNextWrapperInner>
          <PrevNextMobileUl>
            <PrevNextLi style={{ textAlign: 'left' }}>
              <NavLink href={prevLink}>
                <LinkText>
                  <FaAngleLeft />
                  Prev
                </LinkText>
              </NavLink>
            </PrevNextLi>
            <PrevNextLi style={{ textAlign: 'right' }}>
              <NavLink href={nextLink}>
                <LinkText>
                  Next
                  <FaAngleRight />
                </LinkText>
              </NavLink>
            </PrevNextLi>
          </PrevNextMobileUl>
        </PrevNextWrapperInner>
      </PrevNextWrapper>
    </>
  );
}
