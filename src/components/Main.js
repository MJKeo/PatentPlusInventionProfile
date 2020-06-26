import React, { Component } from 'react';
// components
import StartScreen from "./StartScreen.js"
import Sections from "./Sections.js"
// images
import NavbarLogo from "../images/navbar-logo.png"
import NavbarDivider from "../images/navbar-divider.png"
import UserIcon from "../images/user-icon.png"
// styling
import "../stylesheets/main.css"

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -NAVBAR

    IT'LL ALSO CONTAIN THE REST OF MY COMPONENTS
*/

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          pageIndex: 0
        };

        // methods
        this.sleep = this.sleep.bind(this);
        this.transitionBetweenScreens = this.transitionBetweenScreens.bind(this);
    }

    async transitionBetweenScreens(newPageIndex) {
        this.refs.contentTransitionDiv.classList.add("hide")
        await this.sleep(1000)
        this.refs.contentTransitionDiv.classList.add("show")
        this.refs.contentTransitionDiv.classList.remove("hide")
        this.setState({
            pageIndex: newPageIndex
        })
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    render() {
        var pages = [<StartScreen transitionBetweenScreens={this.transitionBetweenScreens} />,<Sections />]
        var toRender = pages[this.state.pageIndex]
        console.log(this.state.pageIndex)


        return (
            <div class="main-background">
                <div class="navbar">
                    <img src={NavbarLogo} alt="PatentPlus" />
                    <div class="navbar-right">
                        <img class="user-icon" src={UserIcon} alt="user: " />
                        <h1>Mike Joe</h1>
                        <img src={NavbarDivider} alt="|" />
                        <h1 class="underline">Invention Profile</h1>
                        <img src={NavbarDivider} alt="|" />
                        <h1>Intelligent Search</h1>
                    </div>
                </div>
                <div ref="contentTransitionDiv">
                    {toRender}
                </div>
            </div>
        )
    }

} export default Main