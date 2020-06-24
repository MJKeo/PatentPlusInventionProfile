import React, { Component } from 'react';
import "../../stylesheets/coolinput.css" // NOTE: Any stylesheets of encompassng components (ex. Main.js) are inherited by subcomponents

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -A text input whos placeholder values translate up when selected
*/

class CoolInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          status: 0
        };

        this.getText = this.getText.bind(this);
    }

    getText() {
        return this.refs.input.value
    }

    render() {
        return (
            <div class="input-box" style={{marginLeft: this.props.indent}}>
                <input ref="input" class="cool-input" type="text" required="required" />
                <span style={{left: this.props.spanIndent}}>{this.props.placeholder}</span>
            </div>
        )
    }

} export default CoolInput