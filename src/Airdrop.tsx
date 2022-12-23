import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Lottie from 'lottie-react';

import { Container } from './components/Grid';
import diamon from './lottie-files/diamond.json';
import { Modal } from './components/Modal';
import { RewardComp } from './components/RewardComp';
import { ScButton } from './components/Button';

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

type Reward = {
  missionLeft: number;
  missionReward: number;
  missionSignature: string;
  referAddress: string;
  referRate: number;
  referReward: number;
  referSignature: number;
  rewardRate: number;
};

const API_ENDPOINT = 'https://xsb.solareum.app/api/v1';
// const API_ENDPOINT = 'https://xsb-stg.solareum.app/api/v1';
// const API_ENDPOINT = 'http://localhost:3030/api/v1';

export const Airdrop = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [noMission, setNoMission] = useState<number>(0);
  const [reward, setReward] = useState<Reward | undefined>(undefined);
  const { publicKey } = useWallet();

  const receiveAirdrop = async () => {
    if (!publicKey) return;

    setLoading(true);

    try {
      const resp: Reward = await fetch(`${API_ENDPOINT}/mission/distribute`, {
        headers: {
          'Content-Type': 'application/json',
          'A-Agent': 'solareum-app',
        },
        method: 'POST',
        body: JSON.stringify({
          solAddress: publicKey?.toBase58(),
          meta: { deviceId: 'web' },
        }),
      }).then((resp) => resp.json());

      setNoMission(resp.missionLeft);
      setReward(resp);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const checkMission = async () => {
    const data: any = await fetch(`${API_ENDPOINT}/mission/check`, {
      headers: {
        'Content-Type': 'application/json',
        'A-Agent': 'solareum-app',
      },
      method: 'POST',
      body: JSON.stringify({
        solAddress: publicKey?.toBase58(),
        meta: { deviceId: 'web' },
      }),
    })
      .then((resp) => resp.json())
      .catch(() => ({
        missionLeft: 0,
      }));

    setNoMission(data?.missionLeft || 0);
  };

  useEffect(() => {
    if (!publicKey) return;
    checkMission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return (
    <Container>
      {reward ? (
        <Modal
          body={
            <RewardComp
              value={reward.missionReward}
              signature={reward.missionSignature}
              close={() => {
                setReward(undefined);
              }}
            />
          }
          withConfetti={true}
          closeOnBackdrop={true}
        />
      ) : null}

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
            <ScSelectWallet>
              <ScButton onClick={receiveAirdrop} disabled={!noMission}>
                {loading ? 'Loading...' : 'Receive XSB'}
              </ScButton>
            </ScSelectWallet>
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
