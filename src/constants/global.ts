import { parseUnits } from "viem";
import { Wallet, utils } from "ethers";

export const ONE_ETHER: string = utils.parseEther("1").toString();
export const ONE_ETHER_VIEM: bigint = parseUnits("1", 18);
export const MIM_PRICE: bigint = parseUnits("1", 18);
export const BIPS: number = 10_000;
export const SECONDS_PER_DAY: number = 86400;
export const MAX_APPROVAL_AMOUNT: string =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
export const ARBITRUM_CHAIN_ID: number = 42161;
export const MAINNET_CHAIN_ID: number = 1;

export const ANALYTICS_URK: string = "https://analytics.abracadabra.money/api";
export const RANDOM_ACCOUNT: string = Wallet.createRandom().address;
export const KAVA_CHAIN_ID: number = 2222;

