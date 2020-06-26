import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import "../../stylesheets/documents.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class SecondBonus extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          index: 0
        };
    }

    render() {
        return (
            <div>
                <h1 class="question-subtitle">Please list any alternative configurations.</h1>
                <textarea ref="a1" type="text" rows="2" class="cc-input"></textarea>
            </div>
        )
    }

} export default SecondBonus