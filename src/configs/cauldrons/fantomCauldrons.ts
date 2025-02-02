/* eslint-disable */
import poolsAbi from "@/abis/borrowPoolsAbi/index";
import tokensAbi from "@/abis/tokensAbi/index";
import swapAbi from "@/abis/swap";
import reverseSwapAbi from "@/abis/reverseSwap";
import { useImage } from "@/helpers/useImage";

import type { CauldronConfig } from "@/configs/cauldrons/configTypes";

const mimInfo = {
  name: "MIM",
  icon: useImage(`assets/images/tokens/MIM.png`),
  decimals: 18,
  address: "0x82f0B8B456c1A451378467398982d4834b6829c1",
  abi: tokensAbi.MIM,
};

const config: Array<CauldronConfig> = [
  {
    icon: useImage(`assets/images/tokens/FTM.png`),
    name: "WFTM",
    chainId: 250,
    id: 1,
    liquidationFee: 12.5,
    mcr: 75,
    borrowFee: 0.05,
    version: 2,
    cauldronSettings: {
      isSwappersActive: true,
      isDegenBox: false,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
    },
    contract: {
      name: "CauldronV2Flat",
      address: "0x8E45Af6743422e488aFAcDad842cE75A09eaEd34",
      abi: poolsAbi.CauldronV2Flat,
    },
    collateralInfo: {
      name: "WFTM",
      decimals: 18,
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      abi: tokensAbi.WFTM,
    },
    mimInfo,
    leverageInfo: {
      address: "0x3d19f3Af2AA7A6fFec2324f92421A8f4156309D1",
      abi: swapAbi,
    },
    deleverageInfo: {
      address: "0xE8f1D5D6B83c59aC3Ba6D1CB9aFbfF54408EcBDC",
      abi: reverseSwapAbi,
    },
  },
  {
    icon: useImage(`assets/images/tokens/FTM.png`),
    name: "WFTM",
    chainId: 250,
    id: 2,
    liquidationFee: 7.5,
    mcr: 50,
    borrowFee: 0.05,
    version: 2,
    cauldronSettings: {
      isSwappersActive: true,
      isDegenBox: false,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
    },
    contract: {
      name: "CauldronV2Flat",
      address: "0xd4357d43545F793101b592bACaB89943DC89d11b",
      abi: poolsAbi.CauldronV2Flat,
    },
    collateralInfo: {
      name: "WFTM",
      decimals: 18,
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      abi: tokensAbi.WFTM,
    },
    mimInfo,
    leverageInfo: {
      address: "0x3d19f3Af2AA7A6fFec2324f92421A8f4156309D1",
      abi: swapAbi,
    },
    deleverageInfo: {
      address: "0xE8f1D5D6B83c59aC3Ba6D1CB9aFbfF54408EcBDC",
      abi: reverseSwapAbi,
    },
  },
  {
    icon: useImage(`assets/images/tokens/FTM.png`),
    name: "yvWFTM",
    chainId: 250,
    id: 3,
    liquidationFee: 12.5,
    mcr: 80,
    borrowFee: 0.5,
    version: 2,
    cauldronSettings: {
      isSwappersActive: true,
      isDegenBox: false,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
    },
    contract: {
      name: "CauldronV2Flat",
      address: "0xed745b045f9495B8bfC7b58eeA8E0d0597884e12",
      abi: poolsAbi.CauldronV2Flat,
    },
    collateralInfo: {
      name: "yvWFTM",
      decimals: 18,
      address: "0x0DEC85e74A92c52b7F708c4B10207D9560CEFaf0",
      abi: tokensAbi.yvWFTM,
    },
    mimInfo,
    leverageInfo: {
      address: "0x26FA3fFFB6EfE8c1E69103aCb4044C26B9A106a9",
      abi: swapAbi,
    },
    deleverageInfo: {
      address: "0xFE2b09980D1f579E13a0Ce3f45AB240d5b1C2f6b",
      abi: reverseSwapAbi,
    },
  },
  {
    icon: useImage(`assets/images/tokens/xBOO.png`),
    name: "xBOO",
    chainId: 250,
    id: 5,
    liquidationFee: 12.5,
    mcr: 70,
    borrowFee: 1,
    version: 2,
    cauldronSettings: {
      isSwappersActive: true,
      isDegenBox: true,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
    },
    contract: {
      name: "CauldronV2FTM",
      address: "0xa3Fc1B4b7f06c2391f7AD7D4795C1cD28A59917e",
      abi: poolsAbi.CauldronV2FTM,
    },
    collateralInfo: {
      name: "xBOO",
      decimals: 18,
      address: "0xa48d959ae2e88f1daa7d5f611e01908106de7598",
      abi: tokensAbi.xBOO,
    },
    mimInfo,
    leverageInfo: {
      address: "0x791aaB38C442a327Df0beb1fEc5767D8cA91dcc1",
      abi: swapAbi,
    },
    deleverageInfo: {
      address: "0x9732D3Ee0f185D7c2D610E30DC5de28EF68Ad7c9",
      abi: reverseSwapAbi,
    },
  },
  {
    icon: useImage(`assets/images/tokens/FTM-MIM.png`),
    name: "FTM/MIM",
    chainId: 250,
    id: 7,
    liquidationFee: 8,
    mcr: 85,
    borrowFee: 0.5,
    version: 2,
    cauldronSettings: {
      isSwappersActive: true,
      isDegenBox: true,
      strategyLink:
        "https://abracadabramoney.medium.com/our-spiritswap-lp-degenbox-strategy-11c1a786ff67",
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: true,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
    },
    contract: {
      name: "CauldronV2FTM",
      address: "0x7208d9F9398D7b02C5C22c334c2a7A3A98c0A45d",
      abi: poolsAbi.CauldronV2FTM,
    },
    collateralInfo: {
      name: "FTM/MIM",
      decimals: 18,
      address: "0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488",
      abi: tokensAbi.WFTM,
    },
    mimInfo,
    leverageInfo: {
      address: "0xe45217A77C332FF767112dC89E568c473c5fad2b",
      abi: swapAbi,
    },
    deleverageInfo: {
      address: "0xD7477321A84F3d39B8D742580F3740016658135D",
      abi: reverseSwapAbi,
    },
  },
  {
    icon: useImage(`assets/images/tokens/FTM-MIM.png`),
    name: "FTM/MIM",
    chainId: 250,
    id: 8,
    liquidationFee: 8,
    mcr: 85,
    borrowFee: 0.5,
    version: 2,
    cauldronSettings: {
      isSwappersActive: true,
      isDegenBox: true,
      strategyLink:
        "https://mirror.xyz/0x5744b051845B62D6f5B6Db095cc428bCbBBAc6F9/EORl4KYTfOLX7g9-Ypqi4mw_E_VZCsseZ5-ZcDKbPIE",
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: true,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
    },
    contract: {
      name: "CauldronV2FTM",
      address: "0x4fdfFa59bf8dda3F4d5b38F260EAb8BFaC6d7bC1",
      abi: poolsAbi.CauldronV2FTM,
    },
    collateralInfo: {
      name: "FTM/MIM",
      decimals: 18,
      address: "0x6f86e65b255c9111109d2D2325ca2dFc82456efc",
      abi: tokensAbi.WFTM,
    },
    mimInfo,
    leverageInfo: {
      address: "0xe788aBab092c165fAb7Ded7b7D2962abc808eE6C",
      abi: swapAbi,
    },
    deleverageInfo: {
      address: "0xFDF2C2689c130B0686331C9ADa0E40Ec1A1A58d7",
      abi: reverseSwapAbi,
    },
  },
];

export default config;
