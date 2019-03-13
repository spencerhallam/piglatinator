import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const testMessage = this.state.value;
        alert(testMessage);
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

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Your Text:
                    <input type="textarea" name="inputstring" onChange={this.handleChange} />
                </label>
                <input type="submit" value="translate" />
            </form>
          )
    }
  
} 

export default InputForm;