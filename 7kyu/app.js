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
    return count
}

/*n this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

 */

function filter_list(arr){
    return arr.filter( item => typeof item === "number");
}

console.log( filter_list([1,2,4,6,'y','a','b']));