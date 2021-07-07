import Link from 'next/link';
import styled, { css } from 'styled-components';

import { locations } from '../constants';
import device from '../theme/device';

const abs = css`
  top: 0;
  left: 0;
  position: absolute;
`;

const LocationGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  --pad: ${({ theme }) => theme.padding};
  @media ${device.laptop} {
    flex-direction: column;
  }
`;
const LocationGridCard = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
  width: calc(100% / 3);
  @media ${device.laptop} {
    width: 100%;
    height: 640px;
  }
`;
const LocationGridImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const LocationGridContent = styled.div`
  ${abs}
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: var(--pad);
`;

const LocationGridContentItem = styled.div`
  margin-left: calc(var(--pad) / 2);
  color: #eaeaea;
`;
const LocationGridOverlay = styled.div`
  ${abs}
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.black};
`;
const LocationGridTitle = styled.h2`
  font-size: 30px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: calc(var(--pad) / 1.75);
`;
const LocationGridButton = styled.a`
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 120px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  padding: calc(var(--pad) / 4) calc(var(--pad) / 2);
  border: 1px solid ${({ theme }) => theme.colors.white};

  :hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;
export default function LocationGrid() {
  return (
    <LocationGridWrapper>
      {locations.map(({ id, name, link, img }) => (
        <LocationGridCard key={id}>
          <LocationGridImg src={img} alt="san" />
          <LocationGridOverlay />
          <LocationGridContent>
            <LocationGridContentItem>
              <LocationGridTitle>{name}</LocationGridTitle>
              <Link href={link}>
                <LocationGridButton>Find out more</LocationGridButton>
              </Link>
            </LocationGridContentItem>
          </LocationGridContent>
        </LocationGridCard>
      ))}
    </LocationGridWrapper>
  );
}
