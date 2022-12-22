import styled from 'styled-components';
import Lottie from 'lottie-react';

import { ScButton } from './Button';
import diamon from '../lottie-files/diamond-in-hand.json';

const ScMain = styled.div`
  min-width: 380px;
  max-width: 420px;
  padding: 24px;
  background: black;
  border-radius: 8px;
  text-align: center;

  label {
  }
`;

const ScText = styled.h3`
  text-align: center;
  margin-top: 8px;
  margin-bottom: 36px;
  font-size: 42px;
  font-weight: bold;
  color: #ffbf00;
`;

export const RewardComp = ({
  value,
  signature,
  close,
}: {
  value: number;
  signature: string;
  close: () => void;
}) => {
  return (
    <ScMain>
      <Lottie
        animationData={diamon}
        loop={true}
        style={{ width: 280, marginLeft: 'auto', marginRight: 'auto' }}
      />
      <label htmlFor="">You Received</label>
      <ScText>{value} XSB</ScText>
      <ScButton
        disabled={!signature}
        href={`https://solscan.io/tx/${signature}`}
        onClick={() => {
          close();
        }}
      >
        Check
      </ScButton>
    </ScMain>
  );
};
