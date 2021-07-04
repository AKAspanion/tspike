import styled from 'styled-components';

import device from '../theme/device';
import Container from './styled/container';

const TitleCardWrapper = styled.div`
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.secondary};
`;

const TitleCardContainer = styled(Container)`
  text-align: left;
  padding: 36px 36px 36px 36px;
`;

const TitleCardSubContainer = styled.div`
  @media ${device.desktop} {
    width: 75%;
  }
`;

const TitleCardEmpty = styled.div`
  padding-top: 80px;
  @media ${device.mobile} {
    display: none;
  }
`;

const TitleCardEmptyBottom = styled(TitleCardEmpty)`
  padding-top: 18px;
`;

const TitleCardOverline = styled.p`
  margin-top: 36px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const TitleCardHeading = styled.h1`
  font-size: 50px;
  margin-top: 40px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media ${device.laptop} {
    font-size: 75px;
  }

  @media ${device.mobile} {
    font-size: 35px;
  }
`;

const TitleCardSubHeading = styled.h2`
  margin-top: 36px;
  font-size: 18px;
  font-weight: 300;
  line-height: 31.5px;
  color: ${({ theme }) => theme.text.light};
`;

export default function TitleCard({ overline, heading, subheading }) {
  return (
    <TitleCardWrapper>
      <TitleCardContainer>
        <TitleCardSubContainer>
          <TitleCardEmpty />
          <TitleCardOverline>{overline}</TitleCardOverline>
          <TitleCardHeading>{heading}</TitleCardHeading>
          {subheading && (
            <>
              <TitleCardSubHeading>{subheading}</TitleCardSubHeading>
              <TitleCardEmptyBottom />
            </>
          )}
        </TitleCardSubContainer>
      </TitleCardContainer>
    </TitleCardWrapper>
  );
}