/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function calculateSum(x,y){
    console.log("Exercise 1:")
    if(x==y){
        return console.log("Both given numbers are same, the triple their sum is", (x+y) * 3)
    }else{
     return console.log("The sum value is:", x+y) 
    }
}
calculateSum(5,8) //test the function

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function check50(x,y){
    console.log("Exercise 2:")
    let sum=x+y
    if(x==50 || y==50 || sum==50){
        return console.log(true)
    }else{
        return console.log(false)
    }
}

check50(50,6) //test the function
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function removeChar(string, position){
    console.log("Exercise 3:")
    string = string.slice(0, position) + string.slice(position+1);
    return console.log(string)
}
removeChar("Strive",2) //it will remove "r" which index postion is 2

/*

4)
 Create a function to find the largest of three given integers.
*/
function findLargest(a,b,c){
    console.log("Exercise 4:")
    if(a > b && a> c){
        return console.log("The largest value is:", a)
    }else if(b>a && b> c){
        return console.log("The largest value is:", b)
    }else{
        return console.log("The largest value is:", c)
    }
}
findLargest(15,2,10) //test the function

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkrange(x,y){
    console.log("Exercise 5:")
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}
console.log(checkrange(47,56)) //test the function
console.log(checkrange(21,35)) //test the function


/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function stringCopies(string,copies){
    console.log("Exercise 6:")
    if (copies < 0)
    return false;
    else
    return string.repeat(copies);
}
console.log(stringCopies("Strive ", 5));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityName(string) {
    console.log("Exercise 7:")
    if (string.length >= 3 && ((string.substring(0, 3) == 'Los') || (string.substring(0, 3) == 'New'))){
            return string;
      }else{
          return ''
      }
}
console.log(cityName("Los Angeles"));
console.log(cityName("Stockholm"));
console.log(cityName("New York"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sumThree(nums){
  console.log("Exercise 8:")
  return nums[0] + nums[1] + nums[2];
}

console.log(sumThree([23, 12, 64]));  //test the function
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function check13(nums) {
    
    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}
console.log("Exercise 9:", check13([1, 5]));  //test the function
console.log("Exercise 9:", check13([6, 3]));  //test the function

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
//Already done in above function, if 1 or 3 is not contain it will return false
console.log("Exercise 10:",check13([2, 6]));  //test the function
console.log("Exercise 10:",check13([4, 8]));  //test the function


/*
11)
Create a function to find the longest string from a given array of strings.
*/
function longestString(stringArray) {
    console.log("Exercise 11:")
    let max = stringArray[0].length;
    stringArray.map(v => max = Math.max(max, v.length));
    let result = stringArray.filter(v => v.length == max);
    return result;
  }
  
  console.log(longestString(['abc', 'dghe', 'aserd','asdsaedwre','xxcvbghertasd']))


/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
function angleType(degree) {
    console.log("Exercise 12:")

    if(degree < 90) {
      return "Acute angle.";
    }else if(degree === 90) {
      return "Right angle.";
    }else if(degree < 180) {
      return "Obtuse angle.";
    }else{
        return "Straight angle.";
    }
    
  }
  console.log(angleType(180))
  console.log(angleType(47))
  console.log(angleType(90))

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
function greatestElement(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
     
  return max;
}
let myArray = [10, 324, 5462, 90, 654];
console.log("Exercise 13: The Greatest element of a given array is",greatestElement(myArray) )

/*
14)
Create a function to get the largest even number from an array of integers.
*/
function maxEven(array) {
    let evenArry=[]

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0)
      evenArry.push(array[i])
      }
    return greatestElement(evenArry)
}
console.log("Exercise 14:", maxEven([20, 400, 200, 31]));
    
  
/*
15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
function positiveNegative(x, y){
    console.log("Exercise 15:")
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positiveNegative(5, 1));
console.log(positiveNegative(-3, 9));
console.log(positiveNegative(12, -34));
/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function characterCase(string){
    console.log("Exercise 16:")
    if(string.length<3){
        return string.toUpperCase()
    }else{
        let Firstpart = (string.substring(0, 3)).toLowerCase();
        let Lastpart = (string.substring(3, string.length)).toUpperCase();  
        return Firstpart + Lastpart;
    }
}
console.log(characterCase("Javascript"));
console.log(characterCase("StriveSchool"));
console.log(characterCase("am"));


/*
17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
function calculateSum(x,y){
    console.log("Exercise 16:")
    let sum=x+y
    if(sum >= 50 && sum <= 80){
        return 65
    }else{
        return 80
    }
}
console.log(calculateSum(55,45))
console.log(calculateSum(45,15))
/*
18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/



/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/