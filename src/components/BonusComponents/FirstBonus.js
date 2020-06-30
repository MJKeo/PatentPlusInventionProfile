import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import "../../stylesheets/documents.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class FirstBonus extends Component {
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
                <h1 class="question-subtitle">Please provide synonyms/examples  for first fibers and secondary fibers</h1>
                <CoolInput ref="name" placeholder={"First fibers"} indent={"45px"} spanIndent={"176px"} />
                <CoolInput ref="name" placeholder={"Secondary fibers"} indent={"45px"} spanIndent={"176px"} />
            </div>
        )
    }

} export default FirstBonus