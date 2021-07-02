import { ChainId, Token } from "@becoswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0x648259243f8a060c38b20dc16214cf0f928f49f1";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0x704923893Eb29E989bB34f95cE57aC906613d907";
export const MASTERCHEF_CONTRACT = "0xE30D1F5E94C8e45d473FCA48e66136D719D5401c";
export const LOTTERY_CONTRACT = "0x091fF4ee8b12dF117a9b3A9F3D7E8fd5f6F79ac1";
export const MULTICALL_CONTRACT = "0xa599b2591d4b5b5d3b3b158efa9bd155b0107b1f";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);
