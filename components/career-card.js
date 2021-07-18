import styled from 'styled-components';

import { Container } from '../components/';
import { flex, headingText } from '../mixins';
import device from '../theme/device';

const PositionWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.white};
`;
const JobContainerHeading = styled.h1`
  ${headingText};
  font-size: 42px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding-top: calc(var(--pad) * 2);
  padding-left: var(--pad);
  padding-right: var(--pad);
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
const JobContainer = styled(Container)`
    padding: var(--pad);
    text-align: center;
}`;

const LinkWrapper = styled.div`
  display: grid;
  padding-top: 18px;
`;
const OpeningCount = styled.div`
  color: ${({ theme }) => theme.colors.transparentBlack};
  line-height: 1.2;
  font-size: 18px;
  font-weight: 500;
  @media ${device.laptop} {
    width: 100%;
  }
`;
export const JobSector = styled.h2`
  ${headingText};
  font-size: 29px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.black};
`;
export const JobTitle = styled.a`
  ${headingText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function CareerCard(props) {
  const { careerData } = props;
  const careerBox = ({ id, jobtitle, openingCount, jobProfile }) => {
    return (
      <JobContainer key={id}>
        <JobSector>{jobtitle}</JobSector>
        <OpeningCount>{`${openingCount} ${
          openingCount > 1 ? 'openings' : 'opening'
        }`}</OpeningCount>
        {jobProfile?.map(({ text, link }) => {
          return (
            <LinkWrapper>
              <JobTitle href={link}>{text}</JobTitle>
            </LinkWrapper>
          );
        })}
      </JobContainer>
    );
  };
  return (
    <PositionWrapper>
      <JobContainerHeading>Career Opportunities</JobContainerHeading>
      {careerData &&
        careerData.map((positionData) => {
          return careerBox(positionData);
        })}
    </PositionWrapper>
  );
}
