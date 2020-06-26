import React, { Component } from 'react';
import "../stylesheets/startscreen.css"

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class StartScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.transition = this.transition.bind(this)
    }

    transition() {
        this.props.transitionBetweenScreens(1)
    }

    render() {
        return (
            <div class="centering-div">
                <h1 class="title-text">Patent Plus Invention Profile</h1>
                <h1 class="title-text">Demo</h1>
                <button class="large-button" onClick={this.transition}>Get Started</button>
            </div>
        )
    }

} export default StartScreen