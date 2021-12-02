import { NavProps } from "./types";

const links: NavProps["links"] = [
  {
    label: "Trade",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.quickswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.quickswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    href: "/farms",
  },
  {
    label: "Pools",
    href: "/syrup",
  },
  {
    label: "Lottery",
    href: "/lottery",
  },
  {
    label: "Info",
    href: "https://quickswap.info",
  },
  {
    label: "IFO",
    href: "/ifo",
  },
  {
    label: "NFT",
    href: "/nft",
  },
];

export default links;
