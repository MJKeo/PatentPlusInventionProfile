import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import Switch from "../smaller components/Switch.js";
import Dropdown from "../smaller components/Dropdown.js";
import "../../stylesheets/seventh.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class Seventh extends Component {
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
        this.props.updateProgress(101);
        this.flyLeft();
    }

    render() {
        if (this.refs.switch != undefined && this.refs.switch.getSelected() == "Yes") {
            this.refs.sub.classList.remove("hidden");
        } else if (this.refs.switch != undefined) {
            this.refs.sub.classList.add("hidden");
        }

        return (
            <div ref='wholePage' class="subsection-main-div on-right">
                <h1 class="question-title">Would you like to submit any files to help explain the novelty of your invention? </h1>
                <Switch ref="switch" firstValue={"No"} secondValue={"Yes"} refreshParent={() => this.setState({})} indent={"45px"}/>
                <div ref="sub" class="dashed-border-left hidden">
                    <input type="file" class="file"></input>
                </div>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Next Page</button>
            </div>
        )
    }

} export default Seventh