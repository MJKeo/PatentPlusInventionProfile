import React, { Component } from 'react';
import ManyDropdowns from "./SecondSectionComponents/ManyDropdowns.js";
import Description from "./SecondSectionComponents/Description.js";
import InventionComponents from "./SecondSectionComponents/InventionComponents.js";
import HowItsMade from "./SecondSectionComponents/HowItsMade.js";
import Structure from "./SecondSectionComponents/Structure.js";
import Discuss from "./SecondSectionComponents/Discuss.js";
import Documents from "./SecondSectionComponents/Documents.js";
import "../stylesheets/secondsection.css";
/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class SecondSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          index: 0
        };

        this.interval = undefined;
        this.validIndices = [];

        this.flyLeft = this.flyLeft.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in")
        this.props.updateProgress(0)
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition(2);
    }

    async changeIndex() {
        await(this.sleep(500))
        this.setState({
            index: this.state.index + 1
        })
        console.log(this.state.index)
        if (this.state.index == 7) {
            this.flyLeft();
        }
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    render() {
        const list=[<ManyDropdowns transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names} />, 
                <Description transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
                <InventionComponents transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
                <HowItsMade transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
                <Structure transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
                <Discuss transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
                <Documents transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>]
        const toRender = list[this.state.index]
        const thing = "←"
        const thing2 = "→"
        return (
            <div ref="wholePage" class="section-main-div on-right">
                <h1 class="heading">Invention Details</h1>
                {toRender}
                {/* <button ref="goBack" class="back-button">{thing}</button>
                <button ref="goForward" class="forward-button">{thing2}</button> */}
            </div>
        )
    }

} export default SecondSection