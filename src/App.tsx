import Layout from './components/Layout';
import { MyWalletProvider } from './roots/WalletProvider';
import { Airdrop } from './Airdrop';

require('@solana/wallet-adapter-react-ui/styles.css');

const App = () => {
  return (
    <MyWalletProvider>
      <Layout>
        <Airdrop />
      </Layout>
    </MyWalletProvider>
  );
};
export default App;
