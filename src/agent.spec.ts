import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("calc gas ema agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTxWithGas = (gas:string) => createTransactionEvent({
      transaction:{
        hash:"0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
        to:"0xcEba60280fb0ecd9A5A26A1552B90944770a4a0e",
        from:"123",
        nonce:1,
        gas:"",
        gasPrice:gas,
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:false,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:[{
          address:"",
          data:"",
          topics:["0x000000000000000000000000000000000000000000000000000000000000dead"],
          logIndex:1,
          blockHash:"",
          blockNumber:1,
          transactionHash:"",
          transactionIndex:1,
          removed:false


        }],
        contractAddress:"0x18b2a687610328590bc8f2e5fedde3b582a49cda",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      block:{}as any


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("calc", () => {
      it("is failed", async () => {
        const txEvent = createTxWithGas("0xF4240")
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(1)
      })
      
  
    })
  })