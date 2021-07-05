import styled from 'styled-components';

import device from '../theme/device';
import Container from './styled/container';

const TitleCardWrapper = styled.div`
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.secondary};
  @media ${device.mobile} {
    background: ${({ theme }) => theme.bg.primary};
  }
`;

const TitleCardContainer = styled(Container)`
  text-align: left;
  padding: ${({ theme }) => theme.padding};
`;

const TitleCardSubContainer = styled.div`
  width: 75%;
  @media ${device.tablet} {
    width: auto;
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
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.primary};
  @media ${device.mobile} {
    margin-top: 4px;
  }
`;

const TitleCardHeading = styled.h1`
  font-size: 75px;
  margin-top: 40px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media ${device.laptop} {
    font-size: 50px;
    width: 75%;
  }

  @media ${device.mobile} {
    margin-top: 18px;
    font-size: 35px;
    width: auto;
  }
`;

const TitleCardSubHeading = styled.h2`
  font-size: 18px;
  font-weight: 300;
  line-height: 31.5px;
  margin-top: ${({ theme }) => theme.padding};
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
