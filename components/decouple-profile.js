import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { Container } from '../components';
import useWindowReSize from '../hooks/useWindowReSize';
import device from '../theme/device';
import { headingText } from '../mixins/';

const ProfileWrapper = styled(Container)`
  --pad: ${({ theme }) => theme.padding};
  padding: var(--pad);
  position: relative;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin-top: 0px;
  }
`;

const ProfileWrapperInner = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

const HeadingWrap = styled.div``;
const HeadingWrapHead = styled.h2`
  font-size: 18px;
  font-weight: 500;
  strong {
    font-weight: 600;
  }
`;
const ProfileImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  max-width: 10%;
`;

const IconLink = styled.a`
  cursor: pointer;
  :first-child {
    @media ${device.mobile} {
      margin-left: 0px;
    }
  }

  svg {
    @media ${device.mobile} {
      width: 24px;
      height: 24px;
    }
  }
`;

export default function DecoupleProfile({
  userProfile: { username, position, imgUrl, place, linkedinLink },
}) {
  const { width } = useWindowReSize();
  const isMobile = width < 500;
  return (
    <>
      <ProfileWrapper>
        <ProfileWrapperInner>
          <ImageWrapper>
            <ProfileImg src={imgUrl}></ProfileImg>
          </ImageWrapper>
          <HeadingWrap>
            <HeadingWrapHead>
              <strong>{username}</strong>
            </HeadingWrapHead>
            <HeadingWrapHead>{position}</HeadingWrapHead>
            <HeadingWrapHead>{place}</HeadingWrapHead>
          </HeadingWrap>
          <IconLink href={linkedinLink}>
            <FaLinkedin size={18} />
          </IconLink>
        </ProfileWrapperInner>
      </ProfileWrapper>
    </>
  );
}
