import styled from 'styled-components';

import { Container } from '../../components/';
import device from '../../theme/device';

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
  font-size: 18px;
  font-weight: 300;
  line-height: 1.75;
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
