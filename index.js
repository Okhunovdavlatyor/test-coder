function evalNumbers() {
    let num1 = 2;
    let num2 = 2;
    if (num1+num2==4){
        console.log('add')
    }
    else {
        console.log('invalid operation')
    }
}
evalNumbers();
function evalNumbers() {
   let num1 = 2;
   let num2 = 2;
    if (num1-num2==0){
       console.log('subtract')
   }
    else {
        console.log('invalid operation')
    }
}
evalNumbers();
function evalNumbers() {
    let num1 = 2;
    let num2 = 2;
    if (num1*num2==4){
        console.log('multiply')
    }
    else {
        console.log('invalid operation')
    }
}
evalNumbers();
function evalNumbers() {
    let num1 = 2;
    let num2 = 2;
    if (num1/num2==1){
        console.log('divide')
    }
    else {
        console.log('invalid operation')
    }
}
evalNumbers();
function evalNumbers() {
    let num1 = 4;
    let num2 = 2;
    if (num1%num2==0){
        console.log('modulus');
    }
    else {
        console.log('invalid operation')
    }
}
evalNumbers();

function isEvenOrOdd() {
    let num = 4;
    if (num%2==0){
        console.log ('Number is ever');
    }     
    else {
        console.log ('Number is odd');
    }
}

isEvenOrOdd();

function findTriangleType() {
    let side1=2;
    let side2=2;
    let side3=2;
    if (side1==side2&&side3) {
        console.log ('Equilateral triangle')
    }
    else {
        console.log ('Scalene triangle')
    }
}
findTriangleType();

function findTriangleType() {
    let side1=2;
    let side2=2;
    let side3=2;
    if (side1==side2&&side2==side3) {
        console.log ('Isosceles triangle')
    }
    else {
        console.log ('Scalene triangle')
    }
}
findTriangleType();

function checkLeapYear () {
    let year=20;
    if (year%4==0||year%100==1) {
        console.log ('leap year')
    }
    else {
        console.log ('not a leap year')
    }
}
checkLeapYear ();
function checkLeapYear () {
    let year=20;
    if (year%4==0||year%400==0) {
        console.log ('leap year')
    }
    else {
        console.log ('not a leap year')
    }
}
checkLeapYear ();

function findGrade() {
    let mark = 90;
    if (mark>=90 && mark<100) {
        console.log ('A+ grade')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

function findGrade() {
    let mark = 80;
    if (mark>=80 && mark<90) {
        console.log ('A grade')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

function findGrade() {
    let mark = 70;
    if (mark>=70 && mark<80) {
        console.log ('B grade')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

function findGrade() {
    let mark = 60;
    if (mark>=60 && mark<70) {
        console.log ('C grade')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

function findGrade() {
    let mark = 50;
    if (mark>=50 && mark<60) {
        console.log ('D grade')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

function findGrade() {
    let mark = 40;
    if (mark>=40 && mark<50) {
        console.log ('E grade')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

function findGrade() {
    let mark = 40;
    if (mark>=0 && mark==40) {
        console.log ('Student has failed')  
    }
    
    else {
        console.log ('Invalid marks')
    }
       
}
findGrade();

//funksiya bo`lsin bo`yini aniqlash uchun. 1 guruh 160gacha bulsa 'a' guruh bo`lsin. 2 guruh 160-180 bo`lsa 'b' guruh bo`lsin. 3guruh 180 balan bo`lsa 3guruh bo`lsin
 function guruh(size) {
    if (size<=160) {
        console.log ('a guruh');
    }
    else if (size<180) {
        console.log ('b guruh')

    }
    else if (size>=180) {
        console.log ('c guruh')
    }
    else {
        console.log ('bunday guruh yo`q')
    }
 }
 guruh(150);
 guruh(175);
 guruh(180);