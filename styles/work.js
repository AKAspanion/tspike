import styled from 'styled-components';

// import { Container } from '../components';
import { headingText } from '../mixins';
import device from '../theme/device';

export const WorkWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  padding: var(--pad);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Work4Card = styled.div`
  overflow: hidden;
  width: calc(50% - calc(var(--pad) / 2));
  :nth-child(1),
  :nth-child(2) {
    margin-bottom: var(--pad);
  }
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: var(--pad);

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Work6Card = styled.div`
  overflow: hidden;
  width: calc(calc(100% / 3) - calc(var(--pad) / 1.5));
  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    margin-bottom: var(--pad);
  }
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: var(--pad);

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const WorkImgWrapper = styled.div`
  overflow: hidden;
  margin-bottom: calc(var(--pad) / 2);
`;

export const WorkImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WorkSector = styled.h2`
  ${headingText};
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WorkName = styled.a`
  ${headingText};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
`;
