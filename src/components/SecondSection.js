import React, { Component } from 'react';

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class SecondSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
    }

    componentDidMount() {
        this.refs.test.classList.add("fly-in")
    }

    render() {
        return (
            <div class="text-center pt-5">
                <h1 ref="test" class="on-right">Second Section</h1>
            </div>
        )
    }

} export default SecondSection