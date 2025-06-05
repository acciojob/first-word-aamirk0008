function firstWord(s) {
  // your code here
 if (str === '') {
        return '';
    }
    
    // Skip leading spaces
    let start = 0;
    while (start < str.length && str[start] === ' ') {
        start++;
    }
    
    // If string is all spaces, return empty string
    if (start === str.length) {
        return '';
    }
    
    // Find the end of the first word (next space or end of string)
    let end = start;
    while (end < str.length && str[end] !== ' ') {
        end++;
    }
    
    // Return the first word
    return str.substring(start, end);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
