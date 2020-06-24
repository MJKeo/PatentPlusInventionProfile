import React, { Component } from 'react';
import "../../stylesheets/switch.css" // NOTE: Any stylesheets of encompassng components (ex. Main.js) are inherited by subcomponents

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -A switch that toggles between 2 values
*/

class Switch extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          status: false
        };

        this.toggleInventors = this.toggleInventors.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    async toggleInventors(otherInventors) {
        if (otherInventors) {
            this.refs.slider.classList.add("slider-right");
            this.refs.firstButton.classList.remove("switch-button-selected");
            this.refs.secondButton.classList.add("switch-button-selected");
        } else {
            this.refs.slider.classList.remove("slider-right");
            this.refs.firstButton.classList.add("switch-button-selected");
            this.refs.secondButton.classList.remove("switch-button-selected");
        }
        this.setState({
            status: otherInventors
        })
        await(this.sleep(10))
        this.props.refreshParent()
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    getSelected() {
        return this.state.status ? this.props.secondValue : this.props.firstValue
    }

    render() {
        return (
            <div style={{marginLeft: this.props.indent}}>
                <label class="switch">
                    <div ref="slider" class="slider" />
                    <button ref="firstButton" class="switch-button-selected" onClick={() => this.toggleInventors(false)}>{this.props.firstValue}</button>
                    <button ref="secondButton" onClick={() => this.toggleInventors(true)}>{this.props.secondValue}</button>
                </label>
            </div>
        )
    }

} export default Switch