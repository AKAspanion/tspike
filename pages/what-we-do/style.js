import styled from 'styled-components';

import { Container } from '../../components/';
import { headingText, subheadingText } from '../../mixins/';
import device from '../../theme/device';

export const QuoteLeft = styled.div`
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    margin-top: ${({ theme }) => theme.padding};
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }
`;
export const QuoteRight = styled.div`
  p {
    ${headingText}
    font-size: 42px;
    font-weight: 700;
    margin-top: ${({ theme }) => theme.padding};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
  }

  @media ${device.laptop} {
    margin-top: ${({ theme }) => theme.padding};
    p {
      font-size: 28px;
    }
  }
  @media ${device.mobile} {
    p {
      font-size: 35px;
    }
  }
`;

export const CatalystCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  --pad: ${({ theme }) => theme.padding};
  background: ${({ theme }) => theme.bg.secondary};
  padding: calc(var(--pad) * 2);
  @media ${device.laptop} {
    flex-direction: column;
    padding: calc(var(--pad) * 2) var(--pad);
  }
`;

export const CatalystCardItem = styled.div`
  width: calc(50% - calc(var(--pad)));
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const CatalystCardItemText = styled(CatalystCardItem)`
  padding-right: 18%;
  @media ${device.laptop} {
    padding: 0px !important;
  }
`;

export const CatalystCardAlt = styled(CatalystCard)`
  flex-direction: row-reverse;
  background: ${({ theme }) => theme.bg.primary};
  @media ${device.laptop} {
    flex-direction: column;
    padding: calc(var(--pad) * 2) var(--pad);
  }
`;

export const CatalystCardHeading = styled.h2`
  ${headingText};
  font-size: 36px;
  font-weight: 300;
  color: ${({ theme }) => theme.text.light};
  strong {
    font-weight: 600;
  }
  @media ${device.laptop} {
    margin-top: var(--pad);
  }
  @media ${device.tablet} {
    font-size: 24px;
    & + p {
      margin-top: calc(var(--pad) / 6);
    }
  }
`;

export const CatalystCardSubHeading = styled.p`
  ${subheadingText};
  font-size: 16px;
  font-weight: 300;
  color: #777777 !important;
  margin-top: calc(var(--pad) / 2);
`;

export const CatalystCardHr = styled.hr`
  width: 75px;
  border: 0;
  border-style: solid;
  border-top-width: 4px;
  margin-top: calc(var(--pad) / 2);
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const CatalystCardDescTitle = styled(CatalystCardSubHeading)`
  margin-top: 0;
  font-weight: 600;
  color: #333333 !important;
`;

export const CatalystCardDesc = styled(CatalystCardSubHeading)`
  margin-top: 0;
`;

export const CatalystSummaryCard = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
  div {
    padding: 0px;

    :nth-child(1),
    :nth-child(2) {
      margin-bottom: calc(var(--pad) * 2);
    }

    :nth-child(2),
    :nth-child(4) {
      padding-left: calc(var(--pad) * 2);
    }

    @media ${device.laptop} {
      margin-bottom: calc(var(--pad) / 2) !important;
      :nth-child(2),
      :nth-child(4) {
        padding-left: 0px;
      }
    }
  }
`;

export const CatalystHeroCard = styled(CatalystSummaryCard)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) var(--pad);
  padding-bottom: 0px;
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
`;

export const CatalystHeroLeft = styled.div`
  width: calc(50% - calc(var(--pad)));

  @media ${device.laptop} {
    width: 100%;
  }

  h2 {
    ${headingText}
    font-size: 60px;
    color: ${({ theme }) => theme.text.light};

    @media ${device.laptop} {
      font-size: 40px;
    }

    @media ${device.mobile} {
      font-size: 35px;
    }
    span {
      position: relative;
      :after {
        background: ${({ theme }) => theme.colors.primary};
        position: absolute;
        content: '';
        left: 0;
        width: 100%;
        height: 12%;
        bottom: 10px;
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    margin-top: var(--pad);
    color: ${({ theme }) => theme.text.light};

    :nth-child(3) {
      margin-top: calc(var(--pad) / 2);
    }
  }
`;
export const CatalystHeroRight = styled(CatalystHeroLeft)`
  padding-left: 0px !important;
  padding-top: calc(var(--pad) / 3) !important;
  h4 {
    ${headingText}
    font-size: 42px;
    font-weight: 700;
    color: #dddddd !important;

    @media ${device.laptop} {
      font-size: 28px;
    }

    @media ${device.mobile} {
      font-size: 33.33px;
      :last-child {
        padding-bottom: var(--pad);
      }
    }
  }
`;
