import React, { Component } from 'react';
import Switch from "../smaller components/Switch.js";
import "../../stylesheets/documents.css";

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
        this.flyLeft();
        this.props.updateProgress(102)
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
                <h1 class="question-title">Are there any documents that help fully disclose your idea that you would like to disclose?</h1>
                
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Not Now</button>
            </div>
        )
    }

} export default Discuss