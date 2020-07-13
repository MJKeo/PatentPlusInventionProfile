import React, { Component } from 'react';
import Switch from "../smaller components/Switch.js";
import FileAdder from "../smaller components/FileAdder.js";
import "../../stylesheets/discuss.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class Discuss extends Component {
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
        if (this.refs.switch.getSelected() == "No") {
            this.flyLeft();
            this.props.updateProgress(85)
        } else if (this.refs.a1.value != "") {
            this.flyLeft();
            this.props.updateProgress(85)
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
            <div ref="wholePage" class="subsection-main-div on-right">
                <FileAdder title={"Are there any other aspects of your invention that you’d like to discuss?"} />
                <Switch ref="switch" firstValue={"No"} secondValue={"Yes"} refreshParent={() => this.setState({})} indent={"45px"} /> {/*call this.refs.switch.getSelected() to get the value it's on*/}
                <div ref="questionSubquestion" class="dashed-border-left hidden">
                    <h1 class="question-subtitle">Please feel free to write down your thoughts below.</h1>
                    <textarea ref="a1" type="text" rows="2" class="him-input"></textarea>
                </div>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default Discuss