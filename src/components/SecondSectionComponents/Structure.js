import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import "../../stylesheets/structure.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class Structure extends Component {
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
            success = true;
            this.refs.questionSubquestion.classList.remove("hidden")
        } else if (this.state.index == 1 && (this.refs.poreSize.getText() != "" && this.refs.depth.getText() != "" && this.refs.angle.getText() != "")) {
            this.flyLeft();
            this.props.updateProgress(70)
        }
        
        if (success) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        return (
            <div ref="wholePage" class="subsection-main-div on-right">
                <h1 class="question-title">What does the structure/design of the web look like?</h1>
                <textarea ref="a1" type="text" rows="2" class="him-input"></textarea>
                <div ref="questionSubquestion" class="dashed-border-left hidden">
                    <h1 class="question-subtitle">What are the pore sizes?</h1>
                    <CoolInput ref="poreSize" placeholder={"pore size"} indent={"45px"} spanIndent={"92px"} />
                    <h1 class="question-subtitle extra-space">What is the corrugation depth?</h1>
                    <CoolInput ref="depth" placeholder={"depth"} indent={"45px"} spanIndent={"92px"} />
                    <h1 class="question-subtitle extra-space">What’s the angle of the pleats? </h1>
                    <CoolInput ref="angle" placeholder={"angle"} indent={"45px"} spanIndent={"92px"} />
                </div>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default Structure