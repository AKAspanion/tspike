import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Container } from '../components';
import useWindowReSize from '../hooks/useWindowReSize';
import device from '../theme/device';
import { headingText } from '../mixins/';

const RowsContainerWrapper = styled(Container)`
  --pad: ${({ theme }) => theme.padding};
  padding: var(--pad);
  position: relative;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin-top: 0px;
  }
`;

const RowsContainer = styled.div``;
const BaseContainerWrapper = styled.div``;

const RowElement = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.mediumWith};
  margin-top: var(--pad);
`;

const EmptySpaceHalf = styled.div`
  padding-top: var(--pad);
`;
const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.p`
  font-size: 18px;
  line-height: 1.75;
  margin-top: calc(var(--pad) / 2);
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Headertext = styled.h3`
  ${headingText};
  font-size: 18px;
  font-weight: 00;
  letter-spacing: -0.03em;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.light};
`;
const ParaHeader = styled.h2`
  ${headingText};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: ${({ theme }) => theme.text.light};
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

const ParaUl = styled.ul`
  margin-top: calc(var(--pad) / 2);
`;

const ParaMobileUl = styled(ParaUl)`
  flex-direction: column;
  padding: 28px var(--pad) 8px var(--pad);
`;

const ParaLi = styled.li`
  cursor: pointer;
  font-size: 18px;
  padding: 0px 17px;
  padding-top: 3px;
  margin-top: calc(var(--pad) / 2);
  word-spacing: 2.5px;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonText = styled.span`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

const getRow = (data) => {
  return (
    <BaseContainerWrapper>
      {data &&
        data.map((element) => {
          const { type } = element;
          if (type?.toLowerCase() === 'header') {
            const { text } = element;
            return (
              <>
                <EmptySpaceHalf />
                <RowElement>
                  <ParaHeader>{text}</ParaHeader>
                </RowElement>
              </>
            );
          } else if (type?.toLowerCase() === 'quote') {
            const { text } = element;
            return (
              <>
                <EmptySpaceHalf />
                <RowElement>
                  <Headertext>{text}</Headertext>
                </RowElement>
              </>
            );
          } else if (type?.toLowerCase() === 'para') {
            const { text } = element;
            return (
              <RowElement>
                {text &&
                  text.map((element) => {
                    return <TextWrapper dangerouslySetInnerHTML={{ __html: element }} />;
                  })}
              </RowElement>
            );
          } else if (type?.toLowerCase() === 'list') {
            const { text } = element;
            return (
              <RowElement>
                <ParaUl>
                  {text &&
                    text.map((element) => {
                      return <ParaLi dangerouslySetInnerHTML={{ __html: element }} />;
                    })}
                </ParaUl>
              </RowElement>
            );
          }
        })}
    </BaseContainerWrapper>
  );
};

export default function DecoupleContainers({ dataContainer }) {
  const { width } = useWindowReSize();
  const isMobile = width < 500;
  console.log(dataContainer);
  return (
    <RowsContainerWrapper>
      <RowsContainer>
        {dataContainer &&
          dataContainer.map((data) => {
            return getRow(data);
          })}
      </RowsContainer>
    </RowsContainerWrapper>
  );
}
