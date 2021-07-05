import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

import { navItems } from '../constants/';
import device from '../theme/device';
import { Flex } from '.';

const HeaderMain = styled.header`
  --pad: ${({ theme }) => theme.padding};
  width: 100%;
  z-index: 100;
  padding: 0px var(--pad);
  background: ${({ theme }) => theme.colors.white};
  @media ${device.laptop} {
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
  cursor: pointer;
  padding: 17px var(--pad) 11px 0px;
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
  padding: 28px var(--pad) 8px var(--pad);
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

const NavLiActive = styled(NavLi)`
  color: ${({ theme }) => theme.colors.primary};
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

export default function Header() {
  const router = useRouter();

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
            <Link href="/">
              <img
                src="https://www-cdn.tigerspike.com/wp-content/uploads/2020/11/ConcentrixTigerspike_Logo_Standard-Dark-Transparent.svg"
                alt="logo"
                width="164"
                height="45"
              />
            </Link>
          </LogoContainer>
          <NavContainer>
            <NavUl>
              {navItems.map(({ id, name, href }) =>
                router.pathname === href ? (
                  <NavLiActive>
                    <Link href={href}>{name}</Link>
                  </NavLiActive>
                ) : (
                  <NavLi key={id}>
                    <Link href={href}>{name}</Link>
                  </NavLi>
                )
              )}
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
            {navItems.map(({ id, name }) => (
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
