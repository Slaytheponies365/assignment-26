var length;
var breadth;
var area; 
var perimeter;

var rectangle1, rectangle2

var subject1,subject2,subject3,subject4,subject5
var average

var student1, student2

function setup() {
  createCanvas(800,800);

  rectangle1 = new Rectangle(5,10)
  rectangle1.calculate();
  rectangle1.outputData();

  rectangle2 = new Rectangle(4,8)
  rectangle2.calculate();
  rectangle2.outputData();

  student1 = new Student (3.25,3.83,3.67,3.10,3.5)
  student1.calculateAverage();
  student1.outputData();

  student2 = new Student (2.0,3.0,4.0,3.0,3.0)
  student2.calculateAverage();
  student2.outputData();

}

function draw() {
  background("black");  
    
}




