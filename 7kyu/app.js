/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str){
    let count = 0;
    const vowels = 'aeiou';

    for( let char of str){
     if( vowels.includes(char)){
      count ++;
     }

    }
     return count;
    }

/*n this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

 */

function filter_list(arr){
    return arr.filter( item => typeof item === "number")
}

console.log( filter_list([1,2,4,6,'y','a','b']))

/*The new zookeeper has lost track of how many animals are in the zoo because the last person to do the count thought it would be funny to do it in binary.
 Write a function that can help the zookeper convert the binary count. Input will be an object where key:value-pairs will represent an animal and a binary number.
 Output should be an integer that equals the sum of all the animals in the zoo.*/

 function countAnimals(animals){
    let total = 0
    for( let animal in animals){
        // covert binary string to decimal
      total += parseInt(animals[animal], 2)
    }

    return total;
 }

 let zoo = {
    pandas: "101",
    monkeys: "10",
    lions: "111"
 }

 console.log(countAnimals(zoo))

 /*Create a function that accepts an array of names,
  and returns an array of each name with its first letter capitalized and the remainder in lowercase.
  */
 function capNames(names){
    return names.map( names => {
      return names.charAt(0).toUpperCase() + names.slice(1).toLowerCase()
    })
   
 }

 const myArr = ["mudassir", "aLiYu", "johN", "marYaM"]
 console.log( capNames(myArr));