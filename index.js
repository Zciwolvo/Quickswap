import { gql } from '@apollo/client';
import React from "react"
import "./App.css"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ethers } from "ethers";


import { ChainId, Token, WETH, Pair,Fetcher, Trade, Route, TokenAmount, TradeType } from 'quickswap-sdk'
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


  console.log(`The chainId of mainnet is ${ChainId.MATIC}.`)
  const tokenAddress = "0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6"
  const  WMATIC = WETH
  const chainId = ChainId.MATIC
  

const network =  ChainId.MATIC
const provider = new ethers.providers.JsonRpcProvider( "https://rpc-mainnet.matic.network",network )




  async function getTokenData(chainId, tokenAddress, provider) {
   
    
    var mToken =  await Fetcher.fetchTokenData(chainId, tokenAddress, provider)
    
    
    
  }



  
  
  async function getPairData(tokenA,tokenB,provider) {
    
   
    var pair = await Fetcher.fetchPairData(tokenA, tokenB,provider)

   
    
    
  }


 
 

console.log("this is eth")
console.log(WETH[137])

const DAIAddress = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' // must be checksummed
const GHSTAdress = "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
const WBTCAdress = "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
const celsiusAdress = "0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6"
const decimals = 18



const celsius = getTokenData(chainId, celsiusAdress, provider)



const DAI = new Token(chainId, DAIAddress, decimals)
const GHST = new Token(chainId, GHSTAdress, decimals)
const CELSIUS = new Token(chainId, celsiusAdress, decimals)
const WBTC = new Token(chainId, WBTCAdress, decimals)




const pairAddress = Pair.getAddress(DAI, WETH[DAI.chainId])


const pair =  getPairData(DAI, WETH[DAI.chainId],provider)
console.log("this is pari adress")
console.log(pairAddress)



const route = new Route([pair],WETH[DAI.chainId])


