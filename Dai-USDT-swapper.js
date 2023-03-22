const { ethers } = require('ethers');
const { ChainId, Token, WETH, Fetcher, Route, Trade, TokenAmount, TradeType } = require('@uniswap/sdk');

// Initialize provider and signer
const provider = new ethers.providers.InfuraProvider('mainnet', 'your-project-id');
const signer = new ethers.Wallet('your-private-key', provider);

// Define the token addresses and amounts
const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const daiAmount = ethers.utils.parseUnits('1', 'ether'); // 1 DAI
const usdtAmount = ethers.utils.parseUnits('1', '6'); // 1 USDT

// Create token objects
const dai = new Token(ChainId.MAINNET, daiAddress, 18);
const usdt = new Token(ChainId.MAINNET, usdtAddress, 6);

// Fetch the token pairs
const pair = await Fetcher.fetchPairData(dai, usdt);

// Get the current price and create a trade
const route = new Route([pair], dai);
const trade = new Trade(route, new TokenAmount(dai, daiAmount), TradeType.EXACT_INPUT);

// Approve the trade
const daiContract = new ethers.Contract(daiAddress, ['function approve(address spender, uint256 amount) returns (bool)'], signer);
await daiContract.approve('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', daiAmount);

// Execute the trade
const uniswap = new ethers.Contract('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', ['function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)'], signer);
await uniswap.swapExactTokensForTokens(
  daiAmount,
  usdtAmount,
  [daiAddress, usdtAddress],
  '0xYourWalletAddress',
  Math.floor(Date.now() / 1000) + 60 * 20 // Expires in 20 minutes
);
