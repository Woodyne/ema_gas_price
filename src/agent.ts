import BigNumber from 'bignumber.js';
import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,

  

} from 'forta-agent'

import Calculator from  "./calculator"

const CALC = new Calculator()

const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
  findings.push(
    Finding.fromObject({
      name: "GAS_PRICE",
      description: `EMA Gas Price `,
      alertId: "FORTA-180",
      severity: FindingSeverity.Info,
      type: FindingType.Info,
      metadata:{
        price_ema: `${CALC.calc(parseInt(txEvent.transaction.gasPrice, 16))}`,
        currentPrice:`${parseInt(txEvent.transaction.gasPrice, 16)}`
    }
               
        
  })
  )
    
      

  return findings;
}

export default {
  handleTransaction
}