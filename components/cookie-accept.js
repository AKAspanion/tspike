import CookieConsent, { getCookieConsentValue, Cookies } from 'react-cookie-consent';
import styled from 'styled-components';
import { headingText } from '../mixins/';
import device from '../theme/device';
import { Container } from '.';
import { useEffect } from 'react';
import { InitializeGA } from './ga-init';
import { envVars } from '../constants';
import theme from '../theme';

export const CookieConsentWrapper = styled.div`
  .buttonWrapper {
    width: 45%;
    text-align: left;
  }
  button {
    background: ${({ theme }) => theme.colors.cookieButton};
  }
`;
export const LearnMoreWrapper = styled.a`
  ${headingText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

{
  /* <div id="catapult-cookie-bar" class=""><div class="ctcc-inner "><span class="ctcc-left-side">We use cookies. <a class="ctcc-more-info-link" tabindex="0" target="_blank" href="https://tigerspike.com/privacy-notice/">Learn more</a></span><span class="ctcc-right-side"><button id="catapultCookie" tabindex="0" onclick="catapultAcceptCookies();">OK</button></span></div><!-- custom wrapper class --></div> */
}

const handleAcceptCookie = () => {
  if (envVars.REACT_APP_GOOGLE_ANALYTICS_ID) {
    InitializeGA(envVars.REACT_APP_GOOGLE_ANALYTICS_ID);
  }
};

const handleDeclineCookie = () => {
  //remove google analytics cookies
  Cookies.remove('_ga');
  Cookies.remove('_gat');
  Cookies.remove('_gid');
};

export default function CookieAccept(props) {
  const cookieData = {
    buttonText: 'OK',
    learnMoreLink: 'https://tigerspike.com/privacy-notice/',
    cookieName: 'tigerspikeCookie',
    hideOnAccept: true,
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  return (
    <CookieConsentWrapper>
      <CookieConsent
        buttonText={cookieData.buttonText}
        cookieName={cookieData.cookieName}
        style={{
          background: theme.colors.white,
          alignItems: 'center',
          color: theme.colors.black,
          textAlign: 'center',
          fontFamily: theme.fontFamily.primary,
          fontSize: '18px',
          padding: '1em',
        }}
        contentStyle={{
          flex: 'none',
          width: '55%',
          textAlign: 'right',
          margin: '0px',
        }}
        buttonStyle={{
          background: theme.colors.cookieButton,
          padding: '6px 9px',
          borderRadius: '3px',
          color: theme.colors.white,
          fontFamily: theme.fontFamily.primary,
        }}
        hideOnAccept={true}
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        buttonWrapperClasses={'buttonWrapper'}
        hideOnAccept={cookieData.hideOnAccept}>
        We use cookies.
        <LearnMoreWrapper href={cookieData.learnMoreLink}>&nbsp;Learn More</LearnMoreWrapper>
      </CookieConsent>
    </CookieConsentWrapper>
  );
}
