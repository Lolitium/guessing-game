class GuessingGame {
    numb=this.number;
    constructor(guessing, max, min) {
        this.guessing = 0;
        this.max = 0;
        this.min = 0;
       
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {

            this.guessing = Math.ceil((this.max + this.min)/2); 

            console.log(`рандом: ${this.guessing}`);
            console.log(`numb:${this.numb}`);
            console.log(`number: ${this.number}`);
            if (this.number == this.guessing) {return this.guessing}
            else if (this.guessing > this.numb) {this.lower()}
            else if (this.guessing < this.numb) {this.greater()}
            else return this.guessing;
    }

    lower() {
       console.log('low');
       this.max = this.guessing;
        this.setRange(this.min, this.max);
        this.guess();
    }

    greater() {
        console.log('high');
        this.min = this.guessing;
        this.setRange(this.min, this.max);
        this.guess();
    }
}

module.exports = GuessingGame;
