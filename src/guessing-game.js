class GuessingGame {
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

            if (this.guessing > this.numb) {this.lower()}
            else if (this.guessing < this.numb) {this.greater()}
            else return this.guessing;
    }

    lower() {
       this.max = this.guessing;
        this.setRange(this.min, this.max);
        this.guess();
    }

    greater() {
        this.min = this.guessing;
        this.setRange(this.min, this.max);
        this.guess();
    }
}

module.exports = GuessingGame;
