function rot13(str) {
  
   var input = 'NOPQRSTUVWXYZABCDEFGHIJKLM !?.';
  var output = "";

  for(let i = 0; i < str.length; i++){
    const myWord = str[i];
    let mySearch = input.indexOf(myWord)
    if(mySearch.indexOf !== -1){
    output += "ABCDEFGHIJKLMNOPQRSTUVWXYZ !?."[mySearch];
    } 
  }
  
  return output;
}

console.log(rot13("SERR PBQR PNZC"));
