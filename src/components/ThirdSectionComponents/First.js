import React, { Component } from 'react';
import CoolInput from "../smaller components/CoolInput.js";
import Switch from "../smaller components/Switch.js";
import Dropdown from "../smaller components/Dropdown.js";
import "../../stylesheets/first.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class First extends Component {
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
        this.props.updateProgress(14);
        this.flyLeft();
    }

    render() {
        var toRender = <div>
                            <h1 class="question-subtitle indenty">* It looks like your company purchased the full package, and you have access to the PatentPlus patent search engine. Browsing the patent database will give you a great idea of the prior art.</h1>
                            <a class="link" href="#">[Navigation Tool]</a>
                            <div></div>
                            <a class="link" href="#" onClick={this.flyLeft}>[Continue with Invention Profile]</a>
                        </div>
        if (this.refs.switch != undefined && this.refs.switch.getSelected() == "Yes") {
            toRender = <div></div>
        }
        return (
            <div ref='wholePage' class="subsection-main-div on-right">
                <h1 class="question-title">{"First, have you had a chance to look at the prior art related to " + this.props.names[1] + "?"}</h1>
                <Switch ref="switch" firstValue={"No"} secondValue={"Yes"} refreshParent={() => this.setState({})} indent={"45px"}/>
                {toRender}
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Next Page</button>
            </div>
        )
    }

} export default First