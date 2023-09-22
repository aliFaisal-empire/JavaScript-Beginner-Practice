
/** 2) Topic: Filter Even Numbers


Description:
In this assignment, you will create a JavaScript program that filters even numbers from a given array and displays the filtered numbers on the webpage.


Output is:-
Original Array: [12, 34, 45, 23, 6, 78, 54, 90]
Filtered Even Numbers: [12, 34, 6, 78, 54, 90]

Tasks:

Implement a JavaScript function to filter even numbers from the array.
Display /console.log the filtered even numbers on the code. **/



let Array=[12,34,45,23,6,78,54,90]


//Even Output result in Filtter Method;


$newEvenNum= Array.filter(function(item){
    $remainder= item%2;

    return ($remainder===0);
});

// Even Output result using Function & filter Method;
 

function filterEvenNum(Array){
    
    return Array.filter(function(item){

        return item%2===0;

    });
}

$evenNumber= filterEvenNum(Array);



$result = Array;

console.log('Original Array:',$result);
console.log('Filtered Even Numbers:',$newEvenNum);





