import React, { Component } from 'react';
import "../stylesheets/thirdsection.css";

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class ThirdSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.flyLeft = this.flyLeft.bind(this);
    }

    componentDidMount() {
        this.refs.wholePage.classList.add("fly-in")
        this.props.updateProgress(0);
    }

    flyLeft() {
        this.refs.wholePage.classList.remove("fly-in")
        this.refs.wholePage.classList.remove("on-right")
        this.refs.wholePage.classList.add("fly-out")
        this.props.transition();
    }

    render() {
        return (
            <div ref="wholePage" class="section-main-div on-right">
                <h1 class="heading">Final Review</h1>
                <div class="centered">
                    <h1 class="title-text">{"Thank You " + this.props.names[0] + " for trying" }</h1>
                    <h1 class="title-text">{"the PatentPlus demo!" }</h1>
                </div>
            </div>
        )
    }

} export default ThirdSection