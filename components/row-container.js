import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import useWindowReSize from '../hooks/useWindowReSize';
import device from '../theme/device';
import { headingText } from '../mixins/';

const RowsContainerWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  padding-top: var(--pad);
  position: relative;
  display: flex;
  @media ${device.mobile} {
    margin-top: 0px;
  }
`;

const RowWrapper = styled.div``;
const RowWrapperMain = styled.div`
  display: flex;
`;

const RowCard = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
  display: flex;
  align-item: center;
  width: calc(100% / 3);
`;
const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding};
  display: flex;
  align-items: center;
  text-align: center;
`;
const TopText = styled.h4`
  ${headingText};
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.black};
`;

const BottomText = styled.h5`
  ${headingText};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.75;
  padding-top: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.transparentBlack};
  strong {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.75;
    background-color: transparent
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.text.light};
  }
`;

const BackGroundWrapperMap = styled.div`
  position: relative;
`;

const OverLayTextInside = styled.div`
  text-align: center;
  width: 100%;
`;

const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.55;
  background: ${({ theme }) => theme.colors.transparentBlack};
`;
const OverlayTextWrapper = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  padding: ${({ theme }) => theme.padding};
`;
const ButtonToptext = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  letter-spacing: -0.02em;
`;
const ButtonBottomtext = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 35px;
  font-weight: 600;
  margin-top: var(--pad);
  font-family: ${({ theme }) => theme.fontFamily.primary};
  letter-spacing: -0.02em;
  margin-bottom: var(--pad);
`;

const ButtonMap = styled.a`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 120px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease;
  padding: calc((var(--pad) / 4) + 4px) calc(var(--pad) - 4px);
  :hover {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ButtonText = styled.span`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

const getRow = (row) => {
  return (
    <RowWrapperMain>
      {row &&
        row.map((rowCol) => {
          const { type } = rowCol;
          if (type?.toLowerCase() === 'image') {
            const { url } = rowCol;
            return (
              <RowCard>
                <ImageContainer src={url} />
              </RowCard>
            );
          } else if (type?.toLowerCase() === 'text') {
            const { topHeaderText, bottomHeaderText, bottomHeaderTextAuthor } = rowCol;
            return (
              <RowCard>
                <TextWrapper>
                  <OverLayTextInside>
                    <TopText>{topHeaderText}</TopText>
                    <BottomText>
                      <strong>{bottomHeaderText}</strong>&nbsp;
                      {bottomHeaderTextAuthor}
                    </BottomText>
                  </OverLayTextInside>
                </TextWrapper>
              </RowCard>
            );
          } else if (type?.toLowerCase() === 'map') {
            const { topHeaderText, bottomHeaderText, buttonText, url, buttonLink } = rowCol;
            return (
              <RowCard>
                <BackGroundWrapperMap>
                  <ImageContainer src={url}></ImageContainer>
                  <OverlayWrapper></OverlayWrapper>
                  <OverlayTextWrapper>
                    <OverLayTextInside>
                      <ButtonToptext>{topHeaderText}</ButtonToptext>
                      <ButtonBottomtext>{bottomHeaderText}</ButtonBottomtext>
                      <ButtonMap href={buttonLink}>
                        {buttonText}&nbsp;
                        <FaMapMarkerAlt size={12} />
                      </ButtonMap>
                    </OverLayTextInside>
                  </OverlayTextWrapper>
                </BackGroundWrapperMap>
              </RowCard>
            );
          }
        })}
    </RowWrapperMain>
  );
};

export default function RowsContainer({ rowsData }) {
  const { width } = useWindowReSize();
  const isMobile = width < 500;
  return (
    <RowsContainerWrapper>
      <RowWrapper>
        {rowsData &&
          rowsData.map((row) => {
            return getRow(row);
          })}
      </RowWrapper>
    </RowsContainerWrapper>
  );
}
