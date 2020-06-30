import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import Switch from "../smaller components/Switch.js";
import Dropdown from "../smaller components/Dropdown.js";
import "../../stylesheets/documents.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class Sixth extends Component {
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
        if (this.state.index == 0) {
            this.refs.subquestion.classList.remove("hidden")
        } else {
            this.props.updateProgress(84);
            this.flyLeft();
        }
        this.setState({
            index: this.state.index + 1
        })
    }

    render() {
        return (
            <div ref='wholePage' class="subsection-main-div on-right">
                <h1 class="question-title">Do you know of any alternative structural features that could achieve this technical effect? </h1>
                <textarea ref="a1" type="text" rows="2" class="him-input"></textarea>
                <div ref="subquestion" class="dashed-border-left hidden">
                    <h1 class="question-subtitle">I notice you used the term “MFC” could you provide a synonym for this term? </h1>
                    <CoolInput ref="synonym" placeholder={"Synonym"} indent={"45px"} spanIndent={"92px"} />
                </div>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default Sixth