function firstWord(s) {
  // your code here
	const spaceIndex = str.indexOf(' ');
	

    if (spaceIndex === -1) {
        return str;
    }
    
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
