import React, { Component } from 'react';
import CComponent from "./CComponent.js";
import FirstBonus from "../BonusComponents/FirstBonus.js";
import SecondBonus from "../BonusComponents/SecondBonus.js";
import ThirdBonus from "../BonusComponents/ThirdBonus.js";
import "../../stylesheets/inventioncomponents.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class InventionComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          components: [],
          numComponents: 0
        };

        this.flyLeft = this.flyLeft.bind(this);
        this.showMore = this.showMore.bind(this);
        this.addComponent = this.addComponent.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in");
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition();
        this.props.updateProgress(45)
    }

    showMore() {
        this.flyLeft();
    }

    addComponent() {
        let arr = []
        for (var i = 0; i <= this.state.numComponents; i++) {
            arr.push(1)
        }
        this.setState({
            components: arr,
            numComponents: this.state.numComponents + 1
        })
        console.log(this.state.components)
    }

    render() {
        return (
            <div ref="wholePage" class="on-right subsection-main-div">
                <h1 class="question-title">{"What are the main components of " + this.props.names[1] + "?"}</h1>
                {
                    this.state.components.map((item, index) => {
                        if (index == 0) {
                            return (
                                <CComponent hasBonus={true} bonus={<FirstBonus />} title={"Component 1"} transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>
                            )
                        } else if (index == 1) {
                            return (
                                <CComponent hasBonus={true} bonus={<SecondBonus />} title={"Component 2"} transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>
                            )
                        } else if (index == 3) {
                            return (
                                <CComponent hasBonus={true} bonus={<ThirdBonus />} title={"Component 4"} transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>
                            )
                        }  else {
                            return (
                                <CComponent hasBonus={false} title={"Component " + (index + 1)} transition={this.changeIndex} updateProgress={this.props.updateProgress} names={this.props.names}/>
                            )
                        }
                    })
                }
                <div></div>
                <button ref="addButton" class="add-button" onClick={this.addComponent}>Add Component</button>
                <div></div>
                <button ref="continueButton" class="button section-button-indent" onClick={this.showMore}>Next Page</button>
            </div>
        )
    }

} export default InventionComponents