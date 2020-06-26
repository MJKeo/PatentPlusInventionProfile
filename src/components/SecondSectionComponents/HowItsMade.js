import React, { Component } from 'react';
import Switch from "../smaller components/Switch.js";
import "../../stylesheets/howitsmade.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class HowItsMade extends Component {
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
        var success = false
        if (this.state.index == 0 && this.refs.a1.value != "") {
            success = true
            this.refs.questionSubquestion.classList.remove("hidden")
            this.refs.continueButton.textContent = "Next Page"
        } else if (this.state.index == 1) {
            this.flyLeft();
            this.props.updateProgress(55)
        }
        
        if (success) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        if (this.refs.firstSwitch != undefined && this.refs.firstSwitch.getSelected() == "No") {
            this.refs.switchQ1.classList.add("hidden");
        } else if (this.refs.firstSwitch != undefined) {
            this.refs.switchQ1.classList.remove("hidden");
        }

        if (this.refs.secondSwitch != undefined && this.refs.secondSwitch.getSelected() == "No") {
            this.refs.switchQ2.classList.add("hidden");
        } else if (this.refs.secondSwitch != undefined) {
            this.refs.switchQ2.classList.remove("hidden");
        }

        return (
            <div ref="wholePage" class="subsection-main-div on-right">
                <h1 class="question-title">How is the fibrous media made?</h1>
                <textarea ref="a1" type="text" rows="2" class="him-input"></textarea>
                <div ref="questionSubquestion" class="dashed-border-left hidden">
                    <h1 class="question-subtitle">Are there any synonyms for this term?</h1>
                    <Switch ref="firstSwitch" firstValue={"No"} secondValue={"Yes"} refreshParent={() => this.setState({})} indent={"45px"} /> {/*call this.refs.switch.getSelected() to get the value it's on*/}
                    <div ref="switchQ1" class="dashed-border-left hidden">
                        <h1 class="question-subtitle">Please list them.</h1>
                        <textarea ref="a2" type="text" rows="2" class="him-input"></textarea>
                    </div>
                    <h1 class="question-subtitle">Are there alternative methods of making the media? </h1>
                    <Switch ref="secondSwitch" firstValue={"No"} secondValue={"Yes"} refreshParent={() => this.setState({})} indent={"45px"} /> {/*call this.refs.switch.getSelected() to get the value it's on*/}
                    <div ref="switchQ2" class="dashed-border-left hidden">
                        <h1 class="question-subtitle">Please elaborate.</h1>
                        <textarea ref="a3" type="text" rows="2" class="him-input"></textarea>
                    </div>
                </div>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default HowItsMade