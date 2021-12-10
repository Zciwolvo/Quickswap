import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, ConnectorId, useWalletModal } from 'uikit'
import { bsc, injected, walletconnect, walletlink, fortmatic } from 'connectors'
import useI18n from 'hooks/useI18n'

const UnlockButton: React.FC<ButtonProps> = props => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: ConnectorId) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    else if (connectorId === 'walletlink'){
      return activate(walletlink)
    } 
    else if (connectorId === 'injected'){
      return activate(injected)
    } 
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <Button style={{border:"1px solid white"}} onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Connect Wallet')}
    </Button>
  )
}

export default UnlockButton
