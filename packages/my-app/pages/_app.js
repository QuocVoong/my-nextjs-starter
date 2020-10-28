import 'rsuite/lib/styles/index.less';
import { ReactQueryDevtools } from 'react-query-devtools'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalLayout                         from 'components/GlobalLayout';
import MainLayout                           from 'components/MainLayout';
import { themeBase }                        from 'ui-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps, router }) {
  if (['/login', '/error', '/404'].includes(router.pathname)) {
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