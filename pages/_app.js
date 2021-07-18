import { ThemeProvider } from 'styled-components';
import { CookieAccept } from '../components';

import GlobalStyle from '../styles/globals';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CookieAccept></CookieAccept>
      </ThemeProvider>
    </>
  );
}
