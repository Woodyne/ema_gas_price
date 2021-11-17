export default class EmaCalc {
    private lastEma:number
    private firstPrices: number[]
    

    constructor(){
        this.lastEma = 0
        this.firstPrices = []
    }
    private  reducer = (prev:number,cur:number):number => prev+cur

    public calc(price:number):number {
        if (this.firstPrices.length <5){
            this.firstPrices.push(price)
            this.lastEma = this.firstPrices.reduce(this.reducer)/this.firstPrices.length
        } 
        this.lastEma = 0.4 *price +(1-0.4)*this.lastEma
        return this.lastEma
        
    }
}