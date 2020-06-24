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
          isOpen: false,
          percent: 0,
          difference: 0
        };
        this.changeProgress = this.changeProgress.bind(this);
        this.updatePercent = this.updatePercent.bind(this);
    }

    componentDidMount() {
        // Start the timer
        setInterval(this.updatePercent, 10);
    }

    /* 
        Actually updates the state 
        Runs every 0.1 seconds to check if it needs to update
    */
    updatePercent() {
        if (this.state.difference > 0) {
            this.setState({
                percent: this.state.percent + 1,
                difference: this.state.difference - 1
            });
        } else if (this.state.difference < 0) {
            this.setState({
                percent: this.state.percent - 1,
                difference: this.state.difference + 1
            });
        }
    }

    /* Used by other components to move the progress percent */
    changeProgress(newPercent) {
        this.setState({
            difference: newPercent - this.state.percent
        })
    }

    render() {
        return (
            <div class="progress-main">
                <h1>Progress</h1>
                <div class="progress-background">
                    <div class="progress-indicator" style={{width: this.state.percent + "%"}} />
                </div>
            </div>
        )
    }

} export default ProgressBar