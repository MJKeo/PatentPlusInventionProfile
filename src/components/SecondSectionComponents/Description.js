import React, { Component } from 'react';
import "../../stylesheets/description.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class Description extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
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
        if (this.refs.description.value != "") {
            this.flyLeft();
            this.props.updateProgress(25)
        }
    }

    render() {
        return (
            <div ref="wholePage" class="on-right subsection-main-div">
                <h1 class="question-title">{"Please briefly describe " + this.props.names[1] + "."}</h1>
                <textarea ref="description" type="text" rows="2" class="description-input"></textarea>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Continue</button>
            </div>
        )
    }

} export default Description