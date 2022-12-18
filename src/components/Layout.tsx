import Helmet from 'react-helmet';
import { GlobalStyle } from './GlobalStyle';
import { Footer } from './Footer';
import { Header } from './Header';
import styled from 'styled-components';

const ScMain = styled.div`
  position: relative;

  &:before {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    height: 400px;
    left: 0;
    top: 0;
    right: 0;
    background: rgb(153, 69, 255);
    background: linear-gradient(
      180deg,
      rgba(153, 69, 255, 0.5) 0%,
      rgba(6, 4, 0, 0.75) 75%,
      rgba(6, 4, 0, 0.5) 100%
    );
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScMain>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <GlobalStyle />
      <Header />

      <main>{children}</main>

      <Footer siteTitle="Solareum Technology Co., Ltd" />
    </ScMain>
  );
};

export default Layout;
