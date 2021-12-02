import { gql } from '@apollo/client';
import React from "react"
import "./App.css"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ethers } from "ethers";



import { ChainId, Token, WETH, Pair,Fetcher, Trade, Route, TokenAmount, TradeType } from '@quickswap-sdk'
import { checkProperties } from '@ethersproject/properties';

export const client = new ApolloClient({
 link: new HttpLink({
   uri: "https://api.thegraph.com/subgraphs/name/sameepsi/quickswap"
 }),
 cache: new InMemoryCache(),
})

function App() {
 return <div></div>
}

export default App


// const client = ...

client
  .query({
    query: gql`
    {
      pairs(orderBy: reserveETH,
        orderDirection: desc
           
        
        first:100) {
        token0{
          symbol
          
          totalLiquidity
          
        },
        token1{symbol},
         reserveETH
        reserve0
        reserve1
        reserveUSD
        totalSupply
        token0Price
        token1Price
        
      }
      
       bundle(id: "1" ) {
       ethPrice
     }
    }
    
    
    `
  })
  .then(result => console.log(result["data"]));

  console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)


  

  const chainId = ChainId.MAINNET
  const tokenAddress = '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9' // must be checksummed
  const AAVE = new Token(chainId, tokenAddress, 18)
  const provider = new ethers.providers.EtherscanProvider("homestead", "APWGPY3VJ6Z277NNZIXEUK1PGMWS3QXQX5");;

  

  async function getTokenData(chainId, tokenAddress, prv) {
   
    
    const AAVE: Token = await Fetcher.fetchTokenData(chainId, tokenAddress,provider)
    console.log(AAVE)
    
    
  }


  
  async function getPairData(tokenA: Token,tokenB: Token, prv) {
    
    const result = await Fetcher.fetchPairData(tokenA,tokenB, prv)
    console.log("this is pair result")
    console.log(result);
    return result
  }

  async function getPair() {


    const pair = await Fetcher.fetchPairData(AAVE, WETH[AAVE.chainId],provider)
    console.log(pair)
    return pair
  }


  const pairAddress = Pair.getAddress(AAVE, WETH[AAVE.chainId])
  console.log("this is weth")
  console.log(WETH[AAVE.chainId])


  console.log("this is get token data")
  getTokenData(chainId,tokenAddress,provider)


  console.log("this is pair data")
  getPair()







