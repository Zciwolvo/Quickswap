import Metamask from "./icons/Metamask";
import Coinbase from "./icons/BinanceChain";
import WalletConnect from "./icons/WalletConnect";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "Wallet link",
    icon: Coinbase,
    connectorId: "walletlink",
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  }
];

export default connectors;
export const localStorageKey = "accountStatus";
