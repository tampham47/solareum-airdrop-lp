import styled from 'styled-components';

import { Container } from './Grid';

const StRoot = styled.div`
  background: #1d201f;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.32);
  padding-top: 4em;
  padding-bottom: 4em;
`;

const StFooter = styled.footer`
  margin-bottom: 2em;

  .footerItemMain {
  }
  .footerItem {
  }

  @media only screen and (min-width: 1024px) {
    display: flex;

    .footerItemMain {
      flex: 2;
    }
    .footerItem {
      flex: 1;
    }
  }
`;

const StFooterItem = styled.div`
  font-size: 16px;
  margin-bottom: 2em;

  .fiTitle {
    color: #fff8f0;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    margin-bottom: 16px;
  }

  .fiLink {
    color: rgba(255, 248, 240, 0.5);
    display: block;
    margin-bottom: 8px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: #ff33ff;
    }
  }
`;

const StContainer = styled(Container)`
  max-width: 1140px;
  font-weight: 300;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
`;

const StSolareum = styled.div`
  margin-bottom: 3em;

  .solareumTitle {
    color: #ff33ff;
    text-transform: uppercase;
    margin: 0;
    font-size: 24px;
    line-height: 1;
    font-weight: 500;
  }
  .solareumHelper {
    font-size: 16px;
    line-height: 1.2;
    margin: 0.5em 0;
    color: rgba(255, 248, 240, 0.75);
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: 6em;
  }
`;

const StCompany = styled.div`
  color: gray;
  font-size: 14px;
`;

const Download = styled.div`
  .storeIcon {
    margin-right: 12px;
    max-width: 140px;
    margin-bottom: 12px;
    background: #272b29;
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
`;

export const Footer = ({ siteTitle }: { siteTitle: string }) => (
  <StRoot>
    <StContainer>
      <StFooter>
        <div className="footerItemMain">
          <StSolareum>
            <h3 className="solareumTitle">Solareum</h3>
            <p className="solareumHelper">Safe & easy wallet for your tokens</p>
          </StSolareum>
        </div>

        <div className="footerItem">
          <StFooterItem>
            <h6 className="fiTitle">Product</h6>
            <a
              className="fiLink"
              href="https://docs.solareum.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <a href="/lightning-rewards" className="fiLink">
              Lightning Rewards
            </a>
            <a
              className="fiLink"
              href="https://docs.solareum.app/white-paper"
              target="_blank"
              rel="noopener noreferrer"
            >
              White Paper
            </a>
            <a
              href="https://docs.solareum.app/xsb-distribution"
              target="_blank"
              rel="noopener noreferrer"
              className="fiLink"
            >
              Airdrop
            </a>
            <a
              href="https://docs.solareum.app/evaluation-strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="fiLink"
            >
              Evaluation
            </a>
          </StFooterItem>
        </div>
        <div className="footerItem">
          <StFooterItem>
            <h6 className="fiTitle">Company</h6>
            <a
              className="fiLink"
              href="https://docs.solareum.app/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of use
            </a>
            <a
              className="fiLink"
              href="https://twitter.com/solareum_wallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="fiLink"
              href="https://t.me/solareum_wallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </StFooterItem>
        </div>
        <div className="footerItem">
          <StFooterItem>
            <h6 className="fiTitle">Download</h6>
            <Download>
              <a
                href="https://solareum.app/getwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="googleLink"
              >
                <img
                  src="/imgs/download-googleplay.png"
                  className="storeIcon"
                  alt="Download"
                />
              </a>
              <a
                href="https://solareum.app/getwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="appleLink"
              >
                <img
                  src="/imgs/download-appstore.png"
                  className="storeIcon"
                  alt="Download"
                />
              </a>
            </Download>
          </StFooterItem>
        </div>
      </StFooter>

      <StCompany>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </StCompany>
    </StContainer>
  </StRoot>
);

export default Footer;
