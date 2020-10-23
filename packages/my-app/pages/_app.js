import 'rsuite/lib/styles/index.less';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalLayout                         from 'components/GlobalLayout';
import MainLayout                           from 'components/MainLayout';
import { themeBase }                        from 'ui-components/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps, router }) {
  if (['/login', '/error'].includes(router.pathname)) {
    return (
      <>
        <GlobalStyle/>
        <ThemeProvider theme={themeBase}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={themeBase}>
        <GlobalLayout>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
}