import styled from 'styled-components';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { Container } from './Grid';

const ScContainer = styled(Container)`
  margin-top: 0;
  margin-bottom: 0;
`;

const ScHeaderWrp = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

const ScLogoLink = styled.a`
  display: inline-block;
  height: 44px;
`;

const ScHeaderLogo = styled.img`
  width: 44px;
  flex: none;
`;

const ScHeaderRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Header = () => {
  return (
    <ScContainer>
      <ScHeaderWrp>
        <ScLogoLink>
          <ScHeaderLogo src="./images/Logo-XSB-P.png" alt="Solareum Logo" />
        </ScLogoLink>
        <ScHeaderRight>
          <WalletMultiButton />
        </ScHeaderRight>
      </ScHeaderWrp>
    </ScContainer>
  );
};
