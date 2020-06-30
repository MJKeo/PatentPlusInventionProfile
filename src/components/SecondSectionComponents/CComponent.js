import React, { Component } from 'react';
import Switch from "../smaller components/Switch.js";
import CoolInput from "../smaller components/CoolInput.js";
import Dropdown from "../smaller components/Dropdown.js";
import "../../stylesheets/ccomponent.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class CComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          index: 0
        };

        this.showMore = this.showMore.bind(this);
    }

    componentDidMount() {

    }

    showMore() {
        var success = false
        if (this.state.index == 0) {
            success = true;
            this.refs.part2.classList.remove("hidden");
        } else if (this.state.index == 1 && this.props.hasBonus) {
            this.refs.bonus.classList.remove("hidden")
            this.refs.continueButton.classList.add("hidden")
        } else {
            this.refs.continueButton.classList.add("hidden")
        }

        if (success) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        console.log("refresh");
        if (this.refs.switch != undefined && this.refs.switch.getSelected() == "No") {
            console.log(this.refs.switch.getSelected())
            this.refs.questionSubquestion.classList.add("hidden");
        } else if (this.refs.switch != undefined) {
            this.refs.questionSubquestion.classList.remove("hidden");
        }

        return (
            <div ref="wholePage" class="component-div">
                <h1 class="question-subtitle component-sub">{this.props.title}</h1>
                <CoolInput ref="name" placeholder={"component name"} indent={"35px"} spanIndent={"70px"} />
                <h1 class="question-subtitle">What is the purpose of this component?</h1>
                <textarea ref="a1" type="text" rows="2" class="cc-input"></textarea>
                <div ref="part2" class="dashed-border-left hidden">
                    <h1 class="question-subtitle">What is this component made of?</h1>
                    <textarea ref="a1" type="text" rows="2" class="cc-input"></textarea>
                    <div ref="bonus" class="dashed-border-left hidden">
                        {this.props.bonus}
                    </div>
                </div>
                <div></div>
                <button ref="continueButton" class="button continue-button" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default CComponent