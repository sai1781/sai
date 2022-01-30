console.log("hi");


// question 1(print the first n numbers of a fibonacci series?)


var count = prompt("enter the number");
var num1=0;
var num2=1;
	console.log(num1);
	console.log(num2);
	console.log(  count  +" Fibonacci series numbers");

var num3;
    for(var i =2;i<=count;i++)
     {
	    num3=num1+num2;
	    console.log(num3);
	    num1=num2;
	     num2=num3;
     }	


// question 2 (Write a programme to print all prime numbers in range 1 to n. take n from the user?



var num = prompt("enter the number");
var num = parseInt(num);
num1 = 1;
console.log(  num   +  " prime numbers");
while( num1 <= num*2){
	if(num1 % 2 != 0){
		console.log(num1);
		}
	num1 = num1+1;
	}

		
