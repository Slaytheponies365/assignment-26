class Student {

    constructor(sub1, sub2, sub3, sub4, sub5) {
        this.sub1 = sub1
        this.sub2 = sub2
        this.sub3 = sub3
        this.sub4 = sub4
        this.sub5 = sub5

    }

    calculateAverage() {
        this.average = (this.sub1 + this.sub2 + this.sub3 + this.sub4 + this.sub5)/5
    }

    outputData() {
        console.log("Average = " + this.average)
    }

}