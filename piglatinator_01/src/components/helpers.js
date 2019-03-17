//export default function noPunctX( message ){
//    const messageNoPunct = message.replace(/[.,#!$%^&*;:{}=\-_`~()]/g,"");
//    alert("1st Message: " + messageNoPunct);
//}

export default function noPunct( message ){
    const messageNoPunct = message.replace(/[.,#!?$%^&*;:{}=\-_`~()]/g,"");
    const wordsAsArray = messageNoPunct.trim().split(" "); 
    function lettersToArray(wordArr){
          const letterArray = [];     
      for(let i = 0; i < wordArr.length; i++){
          let x = wordArr[i].split("").toString();
          let y = x.split(",");
          letterArray.push(y);  
          console.log(letterArray); 
      }
      console.log('LetterArray');
      console.log(letterArray);
      return letterArray
    }
    const masterArray = lettersToArray(wordsAsArray);
      
    function pigLatinizeRough(masArr){
      let pigArray = [];
      for(let i = 0; i < masArr.length; i++){
        let firstLetter = masArr[i][0];
        let newArray = masArr[i];
        newArray.push(firstLetter);
        newArray.shift();
        newArray.push("a","y", " ");
        let joinedWords = newArray.join('');
        pigArray.push(joinedWords);
      }
      let joinedArray = pigArray.join('').toLowerCase();
      return joinedArray;
    }
      return pigLatinizeRough(masterArray);
}