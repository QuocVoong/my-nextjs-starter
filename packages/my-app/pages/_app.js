import 'rsuite/lib/styles/index.less';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalLayout                         from 'components/GlobalLayout';
import MainLayout                           from 'components/MainLayout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps, router }) {
  if (['/login', '/error'].includes(router.pathname)) {
    return (
      <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <GlobalLayout>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
}