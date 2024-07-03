// import React, { useEffect, useState } from 'react';
// import ConnectWalletButtonStyleWrapper from './ConnectWalletButton.style.jsx';
// import { useWallet, ConnectButton, darkTheme } from '@thirdweb-dev/react';
// import { sepolia } from '@thirdweb-dev/chains';
// import { createWallet, walletConnect, inAppWallet } from '@thirdweb-dev/wallets';
// import { createThirdwebClient } from '@thirdweb-dev/react';

// const client = createThirdwebClient({
//   clientId: '2e7a022f8e8feeed19b2d44beb429e5b',
// });

// const wallets = [
//   createWallet('io.metamask'),
//   createWallet('com.coinbase.wallet'),
//   createWallet('me.rainbow'),
//   walletConnect(),
//   inAppWallet({
//     auth: {
//       options: ['email', 'google', 'apple', 'phone'],
//     },
//   }),
//   createWallet('com.trustwallet.app'),
// ];

// const ConnectWalletButton = ({ variant }) => {
//   const { account, connectWallet, disconnect, isConnected } = useWallet();
//   const [walletAddress, setWalletAddress] = useState('');
//   const [shortWalletAddress, setShortWalletAddress] = useState('');

//   useEffect(() => {
//     // Check connection status and extract wallet address
//     const checkConnection = async () => {
//       try {
//         const address = await client.getAddress();
//         setWalletAddress(address);
//         setShortWalletAddress(address.slice(0, 6) + '...' + address.slice(-4));
//       } catch (error) {
//         setWalletAddress('');
//         setShortWalletAddress('');
//       }
//     };

//     if (isConnected) {
//       checkConnection();
//     }
//   }, [isConnected, client]);

//   const handleConnectWallet = () => {
//     connectWallet('injected');
//   };

//   const handleDisconnect = () => {
//     disconnect();
//   };

//   return (
//     <ConnectWalletButtonStyleWrapper variant={variant}>
//       {isConnected? (
//         <div className="connected-wallet">
//           <span className="wallet-address">{shortWalletAddress}</span>
//           <button className="disconnect-button" onClick={handleDisconnect}>
//             Disconnect
//           </button>
//         </div>
//       ) : (
//         <ConnectButton
//           client={client}
//           wallets={wallets}
//           accountAbstraction={{
//             chain: sepolia,
//             factoryAddress: '0xa8835FD0b8Ec162eEae861F33c482EaD31355C7a',
//             gasless: true,
//           }}
//           theme={darkTheme({
//             colors: {
//               accentText: '#a98842',
//               accentButtonBg: '#a98842',
//             },
//           })}
//           connectButton={{ label: 'Login' }}
//           connectModal={{
//             size: 'wide',
//             title: 'Signin',
//             titleIcon:
//               'https://ml816vmyywwg.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://metaestateempire.com/wp-content/uploads/2021/07/LOGO-TABLE-1-e1.700675506305.png',
//             welcomeScreen: {
//               title: 'Welcome to META ESTATE EMPIRE ',
//               subtitle:
//                 'Making Real Estate Investment Available to anyone, anywhere, anytime.',
//               img: {
//                 src: 'https://metaestateempire.com/wp-content/uploads/2024/05/Untitled-design-2.gif',
//                 width: 200,
//                 height: 200,
//               },
//             },
//             termsOfServiceUrl: 'https://metaestateempire.com',
//             privacyPolicyUrl: 'https://metaestateempire.com',
//             showThirdwebBranding: false,
//           }}
//           onClick={handleConnectWallet}
//         />
//       )}
//     </ConnectWalletButtonStyleWrapper>
//   );
// };

// export default ConnectWalletButton;

import { ConnectWallet } from '@thirdweb-dev/react'
import React from 'react'
import { useAccount } from 'wagmi'

export default function ConnectWalletButton() {
  const address = useAccount()
  return (
    <ConnectWallet
    theme={'dark'}
    modalSize={'wide'}
    className={address ? 'wallet-connect-button' : 'not_connected'}
  />
  )
}
