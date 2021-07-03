import styled from 'styled-components';

import device from '../theme/device';
import Container from './styled/container';

const TitleCardWrapper = styled.div`
  background: ${({ theme }) => theme.bg.secondary};
`;

const TitleCardContainer = styled(Container)`
  padding: 36px 36px 36px 36px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const TitleCardEmpty = styled.div`
  padding-top: 72px;
`;

const TitleCardOverline = styled.p`
  margin-top: 36px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600 !important;
  color: ${({ theme }) => theme.colors.primary};
`;

const TitleCardHeading = styled.h1`
  margin-top: 36px;
  font-weight: 700;
  line-height: 1.1;

  @media ${device.mobile} {
    font-size: 35px;
  }

  @media ${device.tablet} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: 75px;
  }
`;

const TitleCardSubHeading = styled.h2``;

const TitleCard = ({ overline, heading, subheading }) => {
  return (
    <TitleCardWrapper>
      <TitleCardContainer>
        <TitleCardEmpty />
        <TitleCardOverline>{overline}</TitleCardOverline>
        <TitleCardHeading>{heading}</TitleCardHeading>
        <TitleCardSubHeading>{subheading}</TitleCardSubHeading>
      </TitleCardContainer>
    </TitleCardWrapper>
  );
};

export default TitleCard;
