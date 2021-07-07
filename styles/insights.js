import styled from 'styled-components';

// import { Container } from '../components';
import { headingText } from '../mixins';
import device from '../theme/device';

export const InsightsWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  padding: var(--pad);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InsightsCard = styled.div`
  overflow: hidden;
  margin-bottom: var(--pad);
  width: calc(calc(100% / 3) - calc(var(--pad) / 1.5));
  :nth-last-child(1),
  :nth-last-child(2),
  :nth-last-child(3) {
    margin-bottom: 0px;
  }

  @media ${device.laptop} {
    :nth-last-child(1),
    :nth-last-child(2),
    :nth-last-child(3) {
      margin-bottom: var(--pad);
    }
  }

  @media ${device.tablet} {
    width: calc(calc(100% / 2) - calc(var(--pad) / 1.5));
    :nth-last-child(1) {
      margin-bottom: var(--pad);
    }
  }

  @media ${device.mobile} {
    width: 100%;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const InsightsImgWrapper = styled.div`
  overflow: hidden;
  margin-bottom: calc(var(--pad) / 2);
`;

export const InsightsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InsightsSector = styled.h2`
  ${headingText};
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InsightsName = styled.a`
  ${headingText};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
`;

export const InsightsLoading = styled.div`
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  margin-bottom: var(--pad);
  --pad: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.text.light};
  padding: calc(var(--pad) / 2.5);
`;
