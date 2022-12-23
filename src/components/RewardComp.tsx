import styled from 'styled-components';
import Lottie from 'lottie-react';
import { X } from 'react-feather';

import { ScOutlineButton } from './Button';
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

const ScCloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  height: 36px;
  transition: all 0.3s;

  &:hover {
    background: #ff33ff;
  }
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
      <ScCloseButton onClick={close}>
        <X size={24} />
      </ScCloseButton>
      <Lottie
        animationData={diamon}
        loop={true}
        style={{ width: 280, marginLeft: 'auto', marginRight: 'auto' }}
      />
      <label htmlFor="">You Received</label>
      <ScText>{value} XSB</ScText>
      <ScOutlineButton
        disabled={!signature}
        href={`https://solscan.io/tx/${signature}`}
        onClick={() => {
          close();
        }}
      >
        Check
      </ScOutlineButton>
    </ScMain>
  );
};
