import Image from 'next/image';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

import device from '../theme/device';
import Container from './styled/container';
import Flex from './styled/flex';

const FooterWrapper = styled.footer`
  --pad: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.bg.dark};
`;

const FooterContainer = styled(Container)`
  text-align: left;
  padding: 0px var(--pad);
  padding-bottom: 33px;
  padding-top: calc(var(--pad) * 2);
`;

const Copyright = styled.div`
  color: #dddddd;
  font-weight: 300;
  font-size: 11.5px;
`;

const LineBreak = styled.hr`
  border: 0;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.text.light};
`;

const FooterTitleWrapper = styled(Flex)`
  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterLinksWrapper = styled(Flex)`
  /* padding-bottom: 32px; */
  justify-content: start;
  @media ${device.mobile} {
    padding-top: 6px;
    padding-bottom: 46px;
  }
`;

const FooterDetails = styled(Flex)`
  padding-bottom: var(--pad);

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterTitle = styled.div`
  padding-left: 42px;
  font-size: 17px;
  font-weight: 700;
  line-height: 21.6px;

  @media ${device.tablet} {
    padding: var(--pad) var(--pad) calc(var(--pad) / 2) 0px;
  }
`;

const IconLink = styled.a`
  margin-left: var(--pad);
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

  @media ${device.mobile} {
    margin-left: calc(var(--pad) / 2);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CopyrightWrapper = styled(Flex)`
  padding-top: 20px;
  @media ${device.mobile} {
    padding: 46px 0px 6px 0px;
  }
`;

const HideInMobile = styled.div`
  max-height: var(--pad);
  @media ${device.mobile} {
    display: none;
  }
`;

const PrivacyText = styled.span`
  color: #999999;
  @media ${device.mobile} {
    display: none;
  }
`;

const PrivacyMobileText = styled.div`
  color: #999999;
  display: none;

  div {
    margin-top: 4px;
  }
  @media ${device.mobile} {
    display: unset;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterDetails>
          <FooterTitleWrapper>
            <Image src="/logo.svg" alt="logo" width="152" height="42" />
            <FooterTitle>We design and build experiences people love to use.</FooterTitle>
          </FooterTitleWrapper>
          <FooterLinksWrapper>
            <IconLink href="http://google.com/">
              <FaLinkedin size={18} />
            </IconLink>
            <IconLink href="http://google.com/">
              <FaInstagram size={18} />
            </IconLink>
            <IconLink href="http://google.com/">
              <FaTwitter size={18} />
            </IconLink>
            <IconLink href="http://google.com/">
              <FaFacebookSquare size={18} />
            </IconLink>
          </FooterLinksWrapper>
        </FooterDetails>
        <LineBreak />
        <CopyrightWrapper>
          <Copyright>
            Copyright © 2003–2021 Concentrix Tigerspike. All rights reserved.
            <PrivacyText> | Privacy Policy | GDPR | Modern Slavery Statement</PrivacyText>
            <PrivacyMobileText>
              <div>Privacy Policy</div>
              <div>GDPR</div>
              <div>Modern Slavery Statement</div>
            </PrivacyMobileText>
          </Copyright>
          <HideInMobile>
            <Image src="/footer-logo.png" alt="logo" width="36" height="36" />
          </HideInMobile>
        </CopyrightWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
}
