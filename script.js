function firstWord(s) {
  // your code here
	if (s === '') {
        return '';
    }
    
    // Skip leading spaces
    let start = 0;
    while (start < s.length && s[start] === ' ') {
        start++;
    }
    
    // If string is all spaces, return empty string
    if (start === s.length) {
        return '';
    }
    
    // Find the end of the first word (next space or end of string)
    let end = start;
    while (end < s.length && s[end] !== ' ') {
        end++;
    }
    
    // Return the first word
    return s.substring(start, end);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
