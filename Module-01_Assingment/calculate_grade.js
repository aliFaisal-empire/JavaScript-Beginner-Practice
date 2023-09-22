/** 

4) Topic: Grade Calculator (JavaScript Switch Case)

Create a function called "calculateGrade" that takes a student's score as input and returns the corresponding grade using the following scale:

90 or above: 'A'
80 to 89: 'B'
70 to 79: 'C'
60 to 69: 'D'
Below 60: 'F'

**/


//function for Grade Calculator



function calculateGrade(marks){

    // Use a switch case to determine the grade

    switch(true){

        case (marks>=90 && marks<=100):
            return 'A';
        break;

        case (marks>=80 && marks<=89):
            return 'B';
        break;

        case (marks>=70 && marks<=79):
            return 'C';
        break;

        case (marks>=60 && marks<=69):
            return 'D';
        break;

        default:
            return 'F';

    };
    

    
}


const studentMark = 45;
const studentGrade = calculateGrade(studentMark);
console.log(`Student Mark ${studentMark}, and the grade is ${studentGrade}`);