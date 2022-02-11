import ethIcon from "@/assets/images/networks/ethereum-icon.svg";
import fantomIcon from "@/assets/images/networks/fantom-icon.svg";
import polygonIcon from "@/assets/images/networks/polygon-icon.svg";
import binanceIcon from "@/assets/images/networks/binance-icon.svg";
import avalancheIcon from "@/assets/images/networks/avalanche-icon.png";
import arbitrumIcon from "@/assets/images/networks/arbitrum-icon.svg";

export default {
  state: {
    networks: [
      {
        chainId: 1,
        name: "ETH",
        icon: ethIcon,
        switchData: {
          chainId: "0x01",
        },
      },
      {
        chainId: 56,
        name: "BSC",
        icon: binanceIcon,
        switchData: {
          chainId: "0x38",
          chainName: "Binance Smart Chain",
          nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
          },
          rpcUrls: [
            "https://bsc-dataseed.binance.org/",
            "https://bsc-dataseed1.defibit.io/",
            "https://bsc-dataseed1.ninicoin.io/",
          ],
          blockExplorerUrls: ["https://bscscan.com"],
          iconUrls: [
            "https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png",
          ],
        },
      },
      {
        chainId: 250,
        name: "FTM",
        icon: fantomIcon,
        switchData: {
          chainId: "0xfa",
          chainName: "Fantom Opera Mainnet",

          rpcUrls: [
            "https://rpcapi.fantom.network/",
            "https://rpc.fantom.network/",
          ],

          iconUrls: ["https://ftmscan.com/images/logo-ftmscan.svg?v=0.0.2"],

          blockExplorerUrls: ["https://ftmscan.com/"],

          nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
          },
        },
      },
      {
        chainId: 43114,
        name: "AVAX",
        icon: avalancheIcon,
        switchData: {
          chainId: "0xa86a",
          chainName: "Avalanche Mainnet",

          rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],

          blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
        },
      },
      {
        chainId: 42161,
        name: "AETH",
        icon: arbitrumIcon,
        switchData: {
          chainId: "0xa4b1",
          chainName: "Arbitrum One",

          rpcUrls: ["https://arb1.arbitrum.io/rpc"],

          blockExplorerUrls: ["https://arbiscan.io"],
        },
      },
      {
        chainId: 137,
        name: "MATIC",
        icon: polygonIcon,
        switchData: {
          chainId: "0x89",
          chainName: "Polygon Mainnet",

          rpcUrls: ["https://polygon-rpc.com/"],

          iconUrls: ["https://polygonscan.com/images/svg/brands/polygon.svg"],

          blockExplorerUrls: ["https://polygonscan.com/"],

          nativeCurrency: {
            name: "Polygon",
            symbol: "MATIC",
            decimals: 18,
          },
        },
      },
    ],
  },
  getters: {
    getAvailableNetworks: (state) => state.networks,
  },
};
