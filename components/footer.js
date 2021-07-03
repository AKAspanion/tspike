import Image from 'next/image';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

import Container from './styled/container';
import Flex from './styled/flex';

const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.bg.dark};
`;

const FooterContainer = styled(Container)`
  text-align: left;
  padding: 0px 36px;
  padding-top: 72px;
  padding-bottom: 33px;
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

const FooterDetails = styled(Flex)`
  padding-bottom: 32px;
  justify-content: start;
`;

const FooterTitle = styled.div`
  padding-left: 42px;
  font-size: 17px;
  font-weight: 700;
  line-height: 21.6px;
`;

const IconWrapper = styled.div`
  margin-left: 36px;
`;

const CopyrightWrapper = styled(Flex)`
  padding-top: 20px;
`;

const PrivacyText = styled.span`
  color: #999999;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Flex>
          <FooterDetails>
            <Image src="/logo.svg" alt="logo" width="152" height="42" />
            <FooterTitle>We design and build experiences people love to use.</FooterTitle>
          </FooterDetails>
          <FooterDetails>
            <IconWrapper>
              <FaLinkedin size={18} />
            </IconWrapper>
            <IconWrapper>
              <FaInstagram size={18} />
            </IconWrapper>
            <IconWrapper>
              <FaTwitter size={18} />
            </IconWrapper>
            <IconWrapper>
              <FaFacebookSquare size={18} />
            </IconWrapper>
          </FooterDetails>
        </Flex>
        <LineBreak />
        <CopyrightWrapper>
          <Copyright>
            Copyright © 2003–2021 Concentrix Tigerspike. All rights reserved.
            <PrivacyText> | Privacy Policy | GDPR | Modern Slavery Statement</PrivacyText>
          </Copyright>
          <Image src="/footer-logo.png" alt="logo" width="36" height="36" />
        </CopyrightWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
}
