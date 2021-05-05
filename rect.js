class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;

    }


    calculate() {
        this.area = this.length * this.breadth;
        this.perimeter = 2 * this.length + 2 * this.breadth

    }


    outputData() {
        console.log("Area = " + this.area)
        console.log("Perimeter = " + this.perimeter)
    }

}












