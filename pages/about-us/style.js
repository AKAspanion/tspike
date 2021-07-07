import styled, { css } from 'styled-components';

import { Container } from '../../components/';
import { headingText } from '../../mixins/';
import device from '../../theme/device';

const pText = css`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.75;
`;

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

export const AboutUsImage = styled.img`
  width: 100%;
  height: auto;
`;

export const AboutFamilyContainer = styled(Container)`
  display: flex;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const AboutFamilyEmpty = styled.div`
  width: calc(50% - calc(var(--pad)));
  @media ${device.laptop} {
    width: 100%;
  }
`;
export const AboutFamilyContent = styled(AboutFamilyEmpty)`
  ${pText}
  color: ${({ theme }) => theme.text.light};
  p {
    :nth-child(2) {
      margin-top: calc(var(--pad) / 2);
    }
  }
  strong {
    font-weight: 600;
  }
`;

export const NutshellWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

export const NutshellContainer = styled(Container)`
  padding: calc(var(--pad) * 2) var(--pad);
`;

export const NutshellHeading = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding-bottom: calc(var(--pad) * 1.5);
`;

export const NutshellCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const NutshellCard = styled.div`
  width: calc(calc(100% / 3) - calc(var(--pad) / 2));
  @media ${device.laptop} {
    width: 100%;
    padding-top: var(--pad);
  }
`;

export const NutshellTitle = styled.h2`
  ${headingText};
  font-size: 36px;
  font-weight: 600;
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const NutshellDesc = styled.p`
  ${pText};
  margin-top: var(--pad);
`;
