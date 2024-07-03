import React, { useEffect, useState } from "react";
import TokenInfoWrapper from "./components/tokenInfo/TokenInfo.style.jsx";
import { useAccount, useContractRead, useNetwork } from "@thirdweb-dev/react"; 
import { formatEther } from "viem";
import * as configModule1 from "../../contracts/config.js";
import * as configModule2 from "../../contracts/configBnb.js";
import Data from "../../assets/data/networkInfo.js";

const TokenInfo = ({ variant }) => {
  const [configModule, setConfigModule] = useState(configModule1);
  const bnbChainId = Data[1]?.chainId;
  const ethChainId = Data[0]?.chainId;
  const [userChainId, setUserChainId] = useState(null); // This state is declared but not used

  const [tokenName, setTokenName] = useState("Meta Estate Empire");
  const [tokenSymbol, setTokenSymbol] = useState("MEET");
  const [maxStage, setMaxStage] = useState(0);
  const [currentStageId, setCurrentStageId] = useState(2); // Renamed to currentStageId
  const [currentPrice, setCurrentPrice] = useState("0.075 USD");
  const [nextStage, setNextStage] = useState(0);
  const [nextPrice, setNextPrice] = useState("0.09 USD");

  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: tokenNameData } = useContractRead({
   ...configModule.tokenNameCall,
  });
  const { data: tokenSymbolData } = useContractRead({
   ...configModule.tokenSymbolCall,
  });
  const { data: maxStageData } = useContractRead({
   ...configModule.maxStageCall,
  });
  const { data: currentStageIdData } = useContractRead({
   ...configModule.currentStageIdCall,
  });
  const { data: currentStageInfoData } = useContractRead({
   ...configModule.currentStageInfoCall,
    args: [currentStageIdData],
  });
  const { data: nextStageInfoData } = useContractRead({
   ...configModule.currentStageInfoCall,
    args: [nextStage],
  });

  useEffect(() => {
    if (isConnected) {
      if (chain) {
        const tmp = chain?.id;
        if (tmp == ethChainId) {
          setConfigModule(() => configModule1);
        }
        if (tmp == bnbChainId) {
          setConfigModule(() => configModule2);
        }
      }

      if (tokenNameData) {
        setTokenName(tokenNameData);
      }

      if (tokenSymbolData) {
        setTokenSymbol(tokenSymbolData);
      }

      if (maxStageData) {
        setMaxStage(maxStageData.toString());
      }

      if (currentStageIdData) {
        setCurrentStageId(currentStageIdData.toString());

        let tmp = parseInt(currentStageIdData);
        setNextStage(tmp + 1);

        if (maxStage < tmp + 1) {
          setNextStage(tmp);
        }
      }

      if (currentStageInfoData) {
        const tmp = formatEther(currentStageInfoData[2]);
        setCurrentPrice(tmp.toString() + " " + "USD");
      }

      if (nextStageInfoData) {
        const tmp = formatEther(nextStageInfoData[2]);
        setNextPrice(tmp.toString() + " " + "USD");
      }
    }
  }, [
    isConnected,
    chain,
    configModule,
    tokenNameData,
    tokenSymbolData,
    maxStageData,
    currentStageIdData,
    currentStageInfoData,
    nextStageInfoData,
    maxStage,
  ]);

  return (
    <TokenInfoWrapper variant={variant}>
      <li>
        <p>Token Name</p>
        <h6>{tokenName}</h6>
      </li>
      <li>
        <p>Token Symbol</p>
        <h6>{tokenSymbol}</h6>
      </li>
      <li>
        <p>Current Stage</p>
        <h6>{currentPrice}</h6>
      </li>
      <li>
        <p>Next Stage</p>
        <h6>{nextPrice}</h6>
      </li>
    </TokenInfoWrapper>
  );
};

export default TokenInfo;