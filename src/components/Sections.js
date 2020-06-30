import React, { Component } from 'react';
// components
import SectionBar from "./SectionBar.js";
import ProgressBar from "./ProgressBar.js";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
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

        // variables
        this.userName = "UNDEFINED"
        this.inventionName = "UNDEFINED"

        // methods
        this.transitionBetweenScreens = this.transitionBetweenScreens.bind(this);
        this.sleep = this.sleep.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setInventionName = this.setInventionName.bind(this);
    }

    async transitionBetweenScreens(newSectionIndex) {
        await this.sleep(500)
        this.setState({
            sectionIndex: newSectionIndex
        })
        if (newSectionIndex == 1) {
            this.refs.sectionBar.selectDetails();
        } else if (newSectionIndex == 2) {
            this.refs.sectionBar.selectNovelty();
        } else if (newSectionIndex == 3) {
            this.refs.sectionBar.selectReview();
        }
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    updateProgress(percent) {
        this.refs.percentBar.changeProgress(percent);
    }

    setUserName(name) {
        this.userName = name
    }

    setInventionName(name) {
        this.inventionName = name
    }

    render() {
        const sectionList = [<FirstSection transition={this.transitionBetweenScreens} updateProgress={this.updateProgress} setUserName={this.setUserName} setInventionName={this.setInventionName}/>,
        <SecondSection transition={this.transitionBetweenScreens} updateProgress={this.updateProgress} names={[this.userName,this.inventionName]}/>,
        <ThirdSection transition={this.transitionBetweenScreens} updateProgress={this.updateProgress} names={[this.userName,this.inventionName]}/>,
        <FourthSection updateProgress={this.updateProgress} names={[this.userName,this.inventionName]}/>]
        const toBeRendered = sectionList[this.state.sectionIndex]

        return (
            <div class="content-div">
                <SectionBar ref="sectionBar" />
                <ProgressBar ref="percentBar"/>
                {toBeRendered}
            </div>
        )
    }

} export default Sections