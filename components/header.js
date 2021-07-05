import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Image from 'next/image';
import { useState } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

import device from '../theme/device';
import { Flex } from '.';

const HeaderMain = styled.header`
  width: 100%;
  z-index: 100;
  padding: 0px 36px;
  background: ${({ theme }) => theme.colors.white};
  @media ${device.tablet} {
    box-shadow: none !important;
    padding-right: 4px;
  }
  @media ${device.mobile} {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

const HeaderContainer = styled(Flex)`
  height: 73px;
  justify-content: space-between;
  @media ${device.laptop} {
    height: 94px;
  }
`;

const LogoContainer = styled.div`
  padding: 17px 36px 11px 0px;
`;

const NavContainer = styled.nav`
  display: table-cell;
  white-space: nowrap;
  vertical-align: top;
  @media ${device.laptop} {
    display: none;
  }
`;

const TabletVisible = styled.div`
  display: none;
  @media ${device.laptop} {
    display: unset;
  }
`;

const NavMobileContainer = styled(TabletVisible)`
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  width: 100%;
  left: 0px;
  overflow: hidden;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavMobileUl = styled(NavUl)`
  flex-direction: column;
  padding: 28px 36px 8px 36px;
`;

const NavLi = styled.li`
  cursor: pointer;
  font-size: 14px;
  list-style: none;
  padding: 0px 17px;
  padding-top: 3px;

  :last-child {
    padding-right: 0px;
  }

  :first-child {
    padding-left: 0px;
  }

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavMobileLi = styled(NavLi)`
  padding: 9px 0px !important;
  display: flex;
  justify-content: space-between;
`;

const DummyContainer = styled.div`
  height: 73px;
  @media ${device.laptop} {
    height: 94px;
  }
`;

const Hamburger = styled.div`
  transform: scale(0.5);
`;

const navData = [
  { id: 1, name: 'What We Do' },
  { id: 2, name: 'About Us' },
  { id: 3, name: 'Work' },
  { id: 4, name: 'Insights' },
  { id: 5, name: 'Careers' },
  { id: 56, name: 'Contact' },
];

export default function Header() {
  const [onTop, setOnTop] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useScrollPosition(({ currPos }) => {
    setOnTop(currPos.y < 0);
  });

  const scrollStyles = onTop
    ? { position: 'fixed', boxShadow: '0 4px 10px -10px rgba(0, 0, 0, 0.6)' }
    : {};

  const toggleNavMobile = () => {
    setNavOpen((flag) => !flag);
  };

  return (
    <>
      <HeaderMain style={scrollStyles}>
        <HeaderContainer>
          <LogoContainer>
            <Image src="/logo-dark.svg" alt="logo" width="164" height="45" />
          </LogoContainer>
          <NavContainer>
            <NavUl>
              {navData.map(({ id, name }) => (
                <NavLi key={id}>{name}</NavLi>
              ))}
            </NavUl>
          </NavContainer>
          <TabletVisible>
            <Hamburger onClick={() => toggleNavMobile()}>
              <HamburgerSqueeze isActive={navOpen} />
            </Hamburger>
          </TabletVisible>
        </HeaderContainer>
        <NavMobileContainer style={{ height: navOpen ? '272px' : '0px' }}>
          <NavMobileUl>
            {navData.map(({ id, name }) => (
              <NavMobileLi key={id}>
                <span>{name}</span>
                <FaChevronRight size={8} />
              </NavMobileLi>
            ))}
          </NavMobileUl>
        </NavMobileContainer>
      </HeaderMain>
      {onTop && <DummyContainer />}
    </>
  );
}
