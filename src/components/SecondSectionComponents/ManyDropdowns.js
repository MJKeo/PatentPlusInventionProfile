import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import Switch from "../smaller components/Switch.js";
import Dropdown from "../smaller components/Dropdown.js";
import "../../stylesheets/manydropdowns.css";
/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class ManyDropdowns extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          question: 1
        };

        this.interval = undefined;

        this.showMore = this.showMore.bind(this);
        this.flyLeft = this.flyLeft.bind(this);
        this.checkForAnswer = this.checkForAnswer.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in")
        this.interval = setInterval(this.checkForAnswer,100);
        this.props.updateProgress(0)
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition();
        this.props.updateProgress(15)
    }

    showMore() {
        if (this.state.question == 1 && this.refs.dropdown1.getSelected() != "") {
            this.refs.question2.classList.remove("hidden");
            this.setState({
                question: this.state.question + 1
            })
        } else if (this.state.question == 3 && this.refs.dropdown3.getSelected() != "") {
            this.flyLeft();
        }
    }

    checkForAnswer() {
        if (this.refs.dropdown2.getSelected() != "") {
            clearInterval(this.interval);
            this.refs.question2Subquestion.classList.remove("hidden");
            this.refs.continueButton.textContent = "Next Page";
            this.setState({
                question: this.state.question + 1
            })
        }
    }

    render() {
        return (
            <div ref="wholePage" class="subsection-main-div on-right">
                <h1 ref="typeTitle" class="question-title">{"What type of invention is " + this.props.names[1] + "?"}</h1>
                <Dropdown ref="dropdown1" indent={"45px"} items={["Software","Method/Process", "Physical Product", "+ More"]}/>
                <div ref="question2" class="hidden">
                    <h1 ref="fieldTitle" class="question-title">{"What is the field of your invention, " + this.props.names[0] + "?"}</h1>
                    <Dropdown ref="dropdown2" indent={"45px"} items={["Computer Science","Mechanical Engineering", "Chemistry", "Biology", "Electrical Engineering", "+ More"]}/>
                    <div ref="question2Subquestion" class="dashed-border-left hidden">
                        <h1 ref="areaTitle" class="question-subtitle">{"Within Chemistry, which subject area covers " + this.props.names[1] + "?"}</h1>
                        <Dropdown ref="dropdown3" indent={"45px"} items={["Pharmaceuticals","Textiles", "Filtration", "Food", "+ More"]}/>
                    </div>
                </div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default ManyDropdowns