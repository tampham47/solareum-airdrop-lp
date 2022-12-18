import styled from 'styled-components';

import Layout from './components/Layout';
import { MyWalletProvider } from './roots/WalletProvider';
import { Container } from './components/Grid';
import Lottie from 'lottie-react';
import diamon from './lottie-files/diamond.json';

require('@solana/wallet-adapter-react-ui/styles.css');

const ScTitle = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  line-height: 1.2;
`;

const ScSection = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const ScButton = styled.button`
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.32);
  border: 1px solid #ff33ff;
  border-radius: 8px;
  height: 56px;
  color: white;
  padding: 8px 24px;
  display: block;
  font-size: 18px;
  line-height: 1.2;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  min-width: 240px;
  background: #ff33ff;
  cursor: pointer;

  &:hover {
  }
`;

const App = () => {
  return (
    <MyWalletProvider>
      <Layout>
        <Container>
          <div>
            <Lottie
              animationData={diamon}
              loop={true}
              style={{ width: 280, marginLeft: 'auto', marginRight: 'auto' }}
            />
            <ScTitle>Hold XSB to receive airdrop&nbsp;daily</ScTitle>

            <ScSection>
              <p>
                Every day you need to show up here to receive a distribution of
                0.055% from your XSB balance, APR is up to 20%. Your referrer
                will receive 0.015% as well.
              </p>
            </ScSection>
            <ScSection>
              <ScButton onClick={() => {}}>Receive XSB</ScButton>
            </ScSection>
          </div>
        </Container>
      </Layout>
    </MyWalletProvider>
  );
};
export default App;
