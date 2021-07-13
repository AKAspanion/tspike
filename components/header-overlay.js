import styled from 'styled-components';

import { Container } from '../components/';
import { flex, headingText } from '../mixins';
import device from '../theme/device';

const HeaderWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  margin-top: 10%;
`;
const TextContainer = styled(Container)`
    padding: var(--pad);
    text-align: center;
}`;

const LinkWrapper = styled.div`
  display: grid;
  padding-top: 18px;
`;
const BottomWrapper = styled.div`
  color: ${({ theme }) => theme.colors.transparentBlack};
  margin-top: var(--pad);
  @media ${device.laptop} {
    width: 100%;
  }
`;
export const MainText = styled.h1`
  ${headingText};
  font-size: 75px;
  font-weight: 500;
  letter-spacing: -0.03em;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
`;
export const Link = styled.a`
  ${headingText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  cursor: pointer;
  color: white;
`;

export const PhoneSpace = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  line-height: -0.02em;
`;

const Address = styled.p`
  font-size: 18px;
  line-height: -0.02em;
  padding: 0px calc(var(--pad) / 6);
  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function HeaderOverlay(props) {
  const {
    overlayData: { maintext, addressLine1, addressLine2, email, phone },
  } = props;
  return (
    <HeaderWrapper>
      <TextContainer>
        <MainText>{maintext}</MainText>
        <BottomWrapper>
          <Address>
            <strong>{addressLine1}</strong>
          </Address>
          <Address>
            <strong>{addressLine2}</strong>
          </Address>
          <PhoneSpace href={`tel:${phone}`}>{phone}</PhoneSpace>
          <Link href={`mailto:${email}`}>• {email}</Link>
        </BottomWrapper>
      </TextContainer>
    </HeaderWrapper>
  );
}
