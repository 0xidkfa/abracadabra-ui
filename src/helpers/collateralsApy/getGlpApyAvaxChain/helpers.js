const {
  getRewardReaderContract,
  getGlpManagerContract,
  getPoolContract,
  getChainLinkAvaxContract,
  getVaultContract,
  getReaderContract,
  getMagicGlpHarvestorContract,
} = require("./contracts");

const {
  address,
  rewardTrackersForStakingInfo,
  nativeToken,
  walletTokens,
} = require("./constants");

const { utils } = require("ethers");

function getStakingInfo() {
  const rewardReaderContract = getRewardReaderContract();

  return rewardReaderContract.getStakingInfo(
    address,
    rewardTrackersForStakingInfo
  );
}

module.exports.getStakingData = async () => {
  const stakingInfo = await getStakingInfo();

  const keys = [
    "stakedGmxTracker",
    "bonusGmxTracker",
    "feeGmxTracker",
    "stakedGlpTracker",
    "feeGlpTracker",
  ];
  const data = {};
  const propsLength = 5;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    data[key] = {
      claimable: stakingInfo[i * propsLength],
      tokensPerInterval: stakingInfo[i * propsLength + 1],
      averageStakedAmounts: stakingInfo[i * propsLength + 2],
      cumulativeRewards: stakingInfo[i * propsLength + 3],
      totalSupply: stakingInfo[i * propsLength + 4],
    };
  }

  return data;
};

module.exports.getAum = async () => {
  const glpManagerContract = getGlpManagerContract();
  const [aum0, aum1] = await glpManagerContract.getAums();
  return aum0.add(aum1).div(2);
};

module.exports.getGmxPrice = async () => {
  const poolContract = getPoolContract();
  const { _reserve0: reserve0, _reserve1: reserve1 } =
    await poolContract.getReserves();

  const reserve0Parse = utils.formatUnits(reserve0.toString(), 18);
  const reserve1Parse = utils.formatUnits(reserve1.toString(), 18);

  const avaxAmount = reserve1Parse / reserve0Parse;

  const oracleAvaxContract = getChainLinkAvaxContract();
  const avaxPrice = await oracleAvaxContract.latestAnswer();
  const avaxPriceParse = utils.formatUnits(avaxPrice.toString(), 8);

  const gmxPrice = avaxAmount * avaxPriceParse;
  return utils.parseUnits(gmxPrice.toString(), 18);
};

module.exports.getNativeTokenPrice = () => {
  const contract = getVaultContract();
  return contract.getMinPrice(nativeToken);
};

function getBalances() {
  const contract = getReaderContract();
  return contract.getTokenBalancesWithSupplies(address, walletTokens);
}

module.exports.getBalanceAndSupplyData = async () => {
  const balances = await getBalances();
  const keys = ["gmx", "esGmx", "glp", "stakedGmxTracker"];
  const balanceData = {};
  const supplyData = {};
  const propsLength = 2;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    balanceData[key] = balances[i * propsLength];
    supplyData[key] = balances[i * propsLength + 1];
  }

  return { balanceData, supplyData };
};

module.exports.getMagicFeePercent = async () => {
  const MagicGlpHarvestorContrac = await getMagicGlpHarvestorContract();
  return await MagicGlpHarvestorContrac.feePercentBips();
};
