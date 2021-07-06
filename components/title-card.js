import styled from 'styled-components';

import device from '../theme/device';
import Container from './styled/container';

const TitleCardWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.secondary};
  @media ${device.mobile} {
    background: ${({ theme }) => theme.bg.primary};
  }
`;

const TitleCardContainer = styled(Container)`
  text-align: left;
  padding: var(--pad);
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
  padding-top: calc(var(--pad) / 2);
`;

const TitleCardEmptyTablet = styled.div`
  display: none;
  padding-top: var(--pad);
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const TitleCardOverline = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.2em;
  margin-top: var(--pad);
  text-transform: uppercase;
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
  margin-top: var(--pad);
  color: ${({ theme }) => theme.text.light};
`;

export default function TitleCard({ overline, heading, subheading, full = false }) {
  return (
    <TitleCardWrapper>
      <TitleCardContainer>
        <TitleCardSubContainer style={full ? { width: '100%' } : {}}>
          <TitleCardEmpty />
          <TitleCardOverline>{overline}</TitleCardOverline>
          <TitleCardHeading>{heading}</TitleCardHeading>
          {subheading && (
            <>
              <TitleCardSubHeading>{subheading}</TitleCardSubHeading>
              <TitleCardEmptyBottom />
            </>
          )}
          <TitleCardEmptyTablet />
        </TitleCardSubContainer>
      </TitleCardContainer>
    </TitleCardWrapper>
  );
}
