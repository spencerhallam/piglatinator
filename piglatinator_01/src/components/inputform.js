import React, { Component } from 'react';
import noPunct from './helpers'

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Your Text:
                    <input type="textarea" name="inputstring" onChange={this.handleChange} />
                </label>
            </form>
            <span className="trans-title">Translation:</span>
            <span className="pig-result">{this.state.value ? '"' + noPunct(this.state.value) + '"' : null }</span>
            </div>
          )
    }
  
} 

export default InputForm;