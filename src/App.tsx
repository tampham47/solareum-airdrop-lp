import Layout from './components/Layout';
import { MyWalletProvider } from './roots/WalletProvider';
import { Container } from './components/Grid';

require('@solana/wallet-adapter-react-ui/styles.css');

const App = () => {
  return (
    <MyWalletProvider>
      <Layout>
        <Container>
          <div>
            Fugiat anim eu cupidatat tempor tempor. Occaecat incididunt eu
            mollit nisi amet ut cillum ex nostrud occaecat ea. Ipsum nulla eu
            veniam non officia do occaecat incididunt magna qui velit ea
            adipisicing non. Velit proident nisi culpa sunt nisi officia
            excepteur aliqua labore anim tempor non. Nulla enim ipsum laboris
            aliqua quis cupidatat commodo occaecat occaecat qui proident id.
          </div>
        </Container>
      </Layout>
    </MyWalletProvider>
  );
};
export default App;
