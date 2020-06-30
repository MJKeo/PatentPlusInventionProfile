import React, { Component } from 'react';
import First from "./ThirdSectionComponents/First";
import Second from "./ThirdSectionComponents/Second";
import Third from "./ThirdSectionComponents/Third";
import Fourth from "./ThirdSectionComponents/Fourth";
import Fifth from "./ThirdSectionComponents/Fifth";
import Sixth from "./ThirdSectionComponents/Sixth";
import Seventh from "./ThirdSectionComponents/Seventh";
import "../stylesheets/thirdsection.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class ThirdSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          index: 0
        };

        this.flyLeft = this.flyLeft.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in")
        this.props.updateProgress(0);
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition(3);
    }

    async changeIndex() {
        await(this.sleep(500))
        this.setState({
            index: this.state.index + 1
        })
        console.log(this.state.index)
        if (this.state.index == 7) {
            console.log("YES")
            this.flyLeft();
        }
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    render() {
        const list=[<First transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names} />, 
            <Second transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
            <Third transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
            <Fourth transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
            <Fifth transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
            <Sixth transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>,
            <Seventh transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>]
        const toRender = list[this.state.index]

        return (
            <div ref="wholePage" class="section-main-div on-right">
                <h1 class="heading">Novelty Determination</h1>
                {toRender}
            </div>
        )
    }

} export default ThirdSection