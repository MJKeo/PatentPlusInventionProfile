import React, { Component } from 'react';
import CoolInput from "./smaller components/CoolInput.js";
import Switch from "./smaller components/Switch.js";
import Dropdown from "./smaller components/Dropdown.js";
import "../stylesheets/firstsection.css" // NOTE: Any stylesheets of encompassng components (ex. Main.js) are inherited by subcomponents

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class FirstSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          questionNumber: 1
        };

        this.flyLeft = this.flyLeft.bind(this);
        this.showMore = this.showMore.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in")
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition(1);
    }

    showMore() {
        var success = false
        if (this.state.questionNumber == 1 && this.refs.name.getText() != "") { // move on to question 2
            success = true;
            this.refs.question2.classList.remove("hidden")
            this.props.updateProgress(20);
        } else if (this.state.questionNumber == 2) { // move on to question 3
            success = true;
            this.refs.question3.classList.remove("hidden")
            this.props.updateProgress(40);
        } else if (this.state.questionNumber == 3 && this.refs.primaryInvent.getText() != "") { // move on to question 4
            success = true;
            this.props.setUserName(this.refs.primaryInvent.getText().split(" ")[0]);
            this.refs.inventNameTitle.textContent += this.refs.primaryInvent.getText().split(" ")[0] + "?"
            this.refs.question4.classList.remove("hidden")
            this.props.updateProgress(60);
        } else if (this.state.questionNumber == 4 && this.refs.inventName.getText() != "") { // move on to question 5
            success = true;
            this.props.setInventionName(this.refs.inventName.getText());
            this.refs.divisionTitle.textContent += this.refs.inventName.getText() + " belong?"
            this.refs.question5.classList.remove("hidden");
            this.props.updateProgress(80);
            this.refs.continueButton.textContent = "Next Page"
        } else {
            if (this.refs.dropdown.getSelected() != "") {
                success = true;
                this.props.updateProgress(102)
                this.flyLeft();
            }
        }
        if (success) {
            this.setState({
                questionNumber: this.state.questionNumber + 1
            })
        }
    }

    render() {
        console.log("refresh");
        if (this.refs.switch != undefined && this.refs.switch.getSelected() == "No") {
            console.log(this.refs.switch.getSelected())
            this.refs.question2Subquestion.classList.add("hidden");
        } else if (this.refs.switch != undefined) {
            this.refs.question2Subquestion.classList.remove("hidden");
        }
        return (
            <div ref="wholePage" class="on-right section-main-div">
                <h1 class="heading">Overview</h1>
                <h1 class="question-title">What is your name?</h1>
                <CoolInput ref="name" placeholder={"Name"} indent={"45px"} spanIndent={"46px"} /> {/*call this.refs.coolInput.getText() to get its value*/}
                <div ref="question2" class="hidden">
                    <h1 class="question-title">Are there any other inventors?</h1>
                    <Switch ref="switch" firstValue={"No"} secondValue={"Yes"} refreshParent={() => this.setState({})} indent={"45px"} /> {/*call this.refs.switch.getSelected() to get the value it's on*/}
                    <div ref="question2Subquestion" class="dashed-border-left hidden">
                        <h1 class="question-subtitle">Who are the other inventors?</h1>
                        <textarea type="text" rows="2" class="regular-input"></textarea>
                    </div>
                </div>
                <div ref="question3" class="hidden">
                    <h1 class="question-title">Whos is the primary inventor?</h1>
                    <CoolInput ref="primaryInvent" placeholder={"Primary Inventor"} indent={"45px"} spanIndent={"46px"} />
                </div>
                <div ref="question4" class="hidden">
                    <h1 ref="inventNameTitle" class="question-title">What is the name of your invention, </h1>
                    <CoolInput ref="inventName" placeholder={"Invention Name"} indent={"45px"} spanIndent={"46px"} />
                </div>
                <div ref="question5" class="hidden">
                    <h1 ref="divisionTitle" class="question-title">Your organization uses the following divisions, to which does </h1>
                    <Dropdown ref="dropdown" indent={"45px"} items={["Chemistry","Chemical Engineering Department", "Mechanical Engineering Department", "Computer Science Department", "Diagnostic Imaging Department", "+ More"]}/>
                </div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default FirstSection