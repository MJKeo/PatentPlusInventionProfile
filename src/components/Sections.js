import React, { Component } from 'react';
// components
import SectionBar from "./SectionBar.js";
import ProgressBar from "./ProgressBar.js";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import "../stylesheets/sections.css"

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -First Section
    -Second Section
    -Third Section
    
*/

class Sections extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          sectionIndex: 0,
          progressBarPercent: 0
        };

        // methods
        this.transitionBetweenScreens = this.transitionBetweenScreens.bind(this);
        this.sleep = this.sleep.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
    }

    async transitionBetweenScreens(newSectionIndex) {
        await this.sleep(500)
        this.setState({
            sectionIndex: newSectionIndex
        })
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    updateProgress(percent) {
        this.refs.percentBar.changeProgress(percent);
    }

    render() {
        const sectionList = [<FirstSection transition={this.transitionBetweenScreens} updateProgress={this.updateProgress}/>, <SecondSection />, <ThirdSection />]
        const toBeRendered = sectionList[this.state.sectionIndex]

        return (
            <div class="content-div">
                <SectionBar />
                <ProgressBar ref="percentBar"/>
                {toBeRendered}
            </div>
        )
    }

} export default Sections