import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import Switch from "../smaller components/Switch.js";
import Dropdown from "../smaller components/Dropdown.js";
import FileAdder from "../smaller components/FileAdder.js";
import "../../stylesheets/documents.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class Second extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          index: 0
        };

        this.showMore = this.showMore.bind(this);
        this.flyLeft = this.flyLeft.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in")
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition();
    }

    showMore() {
        this.props.updateProgress(28);
        this.flyLeft();
    }

    render() {
        return (
            <div ref='wholePage' class="subsection-main-div on-right">
                <FileAdder title={"Based on your understanding of the prior art, what makes " + this.props.names[1] + " a novel invention?"} />
                <textarea ref="a1" type="text" rows="2" class="him-input"></textarea>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Next Page</button>
            </div>
        )
    }

} export default Second