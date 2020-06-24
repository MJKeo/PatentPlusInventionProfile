import React, { Component } from 'react';
import "../stylesheets/progressbar.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -The progress bar
*/

class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
    }

    render() {
        return (
            <div class="progress-main">
                <h1>Progress</h1>
                <div class="progress-background">
                    <div class="progress-indicator" style={{width: this.props.percent + "%"}} />
                </div>
            </div>
        )
    }

} export default ProgressBar