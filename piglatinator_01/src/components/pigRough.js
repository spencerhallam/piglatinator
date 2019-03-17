//this is is the orignal proceedural code from es6console.io

const initialMessage = console.log("Enter a message to translate.");
const testMessage = "Ge|ta yo^ur d.og o#ff my la$wn!";

const messageToArray = [];
const messageNoPunct = testMessage.replace(/[.,\|#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log("1st Message: " + messageNoPunct);

const wordsToArray = function(message){
  return message.trim().split(" ");
}

const wordsAsArray = wordsToArray(messageNoPunct);
console.log("Words As Array Result:");
console.log(wordsAsArray);

const lettersToArray = function(){
    letterArray = [];
  for(i = 0; i < wordsAsArray.length; i++){
    let x = wordsAsArray[i].split("").toString();
    let y = x.split(",");
    letterArray.push(y);
  };
  console.log("Letter To Array Result:");
  console.log(letterArray);
  return letterArray
}

const masterArray = lettersToArray();
console.log("MasterArray Result:");
console.log(masterArray);

const pigLatinizeRough = function(){
  let pigArray = [];
  for(i=0; i< masterArray.length; i++){
    let firstLetter = masterArray[i][0];
    console.log(firstLetter);
    let newArray = masterArray[i];
    console.log("New Array Result:")
    newArray.push(firstLetter);
    newArray.shift();
    newArray.push("a","y", " ");
    let joinedWords = newArray.join('');
    console.log("joinedWords");
    pigArray.push(joinedWords);
  }
  console.log("PigLatined Result:");
  console.log(pigArray);
  let joinedArray = pigArray.join('');
  console.log(joinedArray);
}

pigLatinizeRough().toLowerCase();


console.log("******* End Message ********");