import styled from 'styled-components';

import { Container } from '../components';
import { headingText, paraText } from '../mixins';
import device from '../theme/device';

export const VisitCard = styled(Container)`
  text-align: center;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
  color: ${({ theme }) => theme.text.light};
`;

export const VisitCardHeading = styled.h1`
  ${headingText}
  font-size: 50px;
  font-weight: 700;
  margin-top: calc(var(--pad) * 0.5);
  @media ${device.laptop} {
    font-size: 33.33px;
  }
`;

export const VisitCardDesc = styled.p`
  ${paraText}
  margin-top: calc(var(--pad) * 1.5);
`;
