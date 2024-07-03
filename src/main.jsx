import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import ThemeStyles from "./assets/styles/ThemeStyles";
import GlobalStyles from "./assets/styles/GlobalStyles";
import {
  ChainId,
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  trustWallet,
  useChainId,
  walletConnect,
} from '@thirdweb-dev/react';

//import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Sepolia } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId={'b446f463951c304215f55f72be155c75'}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({ recommended: true }),
        trustWallet(),
        localWallet(),

        embeddedWallet({
          auth: {
            options: ['email', 'google', 'apple', 'facebook'],
          },
        }),
      ]}>
      <ThemeProvider theme={{...ThemeStyles}}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);