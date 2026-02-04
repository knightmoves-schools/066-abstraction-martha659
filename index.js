class TaxCalculator{
    #rate
    
    constructor(){
        this.rate = 15;
        this.state = 'TX'
        this.exempt = false;
    }
    
    calculate(){
        if(this.exempt){
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
    #calculateExempt(number) {
        return number * 100;
    }
}

#calculateNonExempt(number) {
    return number * 100;
};
