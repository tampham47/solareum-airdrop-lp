import styled from 'styled-components';
import { useWallet } from '@solana/wallet-adapter-react';

import { Container } from './components/Grid';
import Lottie from 'lottie-react';
import diamon from './lottie-files/diamond.json';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';

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

const ScSelectWallet = styled.div`
  display: flex;
  justify-content: center;
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

export const Airdrop = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { publicKey } = useWallet();
  console.log('publicKey', publicKey);

  const receiveAirdrop = async () => {
    if (!publicKey) return;

    setLoading(true);

    // await fetch('http://localhost:3030/api/v1/mission/distribute', {
    await fetch('https://xsb.solareum.app/api/v1/mission/distribute', {
      headers: {
        'Content-Type': 'application/json',
        'A-Agent': 'solareum-app',
      },
      method: 'POST',
      body: JSON.stringify({
        solAddress: publicKey?.toBase58(),
      }),
    }).catch(() => {
      setLoading(false);
    });

    setLoading(false);
  };

  return (
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
            0.055% from your XSB balance, APR is up to 20%. Your referrer will
            receive 0.015% as well.
          </p>
        </ScSection>
        <ScSection>
          {publicKey ? (
            <ScButton onClick={receiveAirdrop}>
              {loading ? 'Loading...' : 'Receive XSB'}
            </ScButton>
          ) : (
            <ScSelectWallet>
              <WalletMultiButton />
            </ScSelectWallet>
          )}
        </ScSection>
      </div>
    </Container>
  );
};
