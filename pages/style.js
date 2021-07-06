import styled from 'styled-components';

import { Container } from '../components/';
import device from '../theme/device';

export const QuoteRight = styled.div``;
export const QuoteRightItem = styled.div`
  padding-top: calc(${({ theme }) => theme.padding} / 2);

  :first-child {
    padding-top: 0px;
  }
  strong {
    font-weight: 600;
  }
  @media ${device.laptop} {
    :first-child {
      padding-top: ${({ theme }) => theme.padding};
    }
  }
`;

export const QuoteLeft = styled.div`
  display: unset;
  @media ${device.mobile} {
    display: none;
  }
`;
export const QuoteLeftMobile = styled.div`
  display: none;
  @media ${device.mobile} {
    display: unset;
  }
`;

export const ThisIsUsContainer = styled(Container)`
  padding: ${({ theme }) => theme.padding};
  padding-top: calc(${({ theme }) => theme.padding} * 2);
`;

export const ThisIsUs = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.light};
`;

export const ThisIsUsHr = styled.hr`
  width: 90px;
  margin-top: 27px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

export const ThisisUsText = styled.div`
  width: 80%;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text.light};
  margin-top: ${({ theme }) => theme.padding};
  @media ${device.laptop} {
    width: 100%;
    font-size: 28px;
    flex-direction: column;
  }
`;

export const ThisIsUsImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding};
  padding-top: calc(${({ theme }) => theme.padding} * 2);
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const ThisIsUsImage = styled.div`
  width: calc(calc(100% / 3) - calc(${({ theme }) => theme.padding} / 1.5));
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.padding};
  }
`;

export const IndexNavWrapper = styled.div`
  background: ${({ theme }) => theme.bg.secondary};
`;

export const IndexNav = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
`;
export const IndexNavCard = styled.div`
  :nth-child(4),
  :nth-child(5),
  :nth-child(6) {
    padding-top: calc(var(--pad) * 2);
  }
  width: calc(calc(100% / 3) - calc(var(--pad) * 1.25));

  @media ${device.laptop} {
    width: 100%;
    margin-bottom: var(--pad);
    :nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      padding-top: 0px;
    }
  }
`;
export const IndexNavTitle = styled.h2`
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: -0.03em;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
export const IndexNavDesc = styled.p`
  font-size: 18px;
  line-height: 1.75;
  font-weight: 300;
  color: ${({ theme }) => theme.text.light};
  margin-top: calc(var(--pad) / 2);

  @media ${device.mobile} {
    margin-top: var(--pad);
  }
`;
export const IndexNavHr = styled.hr`
  border-top-width: 2px;
  margin-top: calc(var(--pad) / 2);
  @media ${device.mobile} {
    margin-top: var(--pad);
    margin-bottom: calc(var(--pad) / 2);
  }
`;
export const IndexNavLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
