import React, { Component } from 'react';
import "../../stylesheets/dropdown.css" // NOTE: Any stylesheets of encompassng components (ex. Main.js) are inherited by subcomponents

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -Dropdown menu
*/

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          open: false,
          selected: ""
        };

        this.showItems = this.showItems.bind(this);
        this.hideItems = this.hideItems.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    showItems() {
        this.refs.dropdown.classList.remove("hidden")
    }

    hideItems() {
        this.refs.dropdown.classList.add("hidden")
    }

    toggle() {
        if (this.state.open) {
            this.hideItems()
        } else {
            this.showItems()
        }
        this.setState({
            open: !this.state.open
        })
    }

    handleSelect(text) {
        this.toggle();
        this.setState({
            selected: text
        })
    }

    getSelected() {
        return this.state.selected;
    }

    render() {
        return (
            <div style={{marginLeft: this.props.indent}}>
                <h1 class="dropdown-selected-text">{this.state.selected}</h1>
                <button class="dropdown-button" onClick={() => this.toggle()}>Select</button>
                <div>
                    <div ref="dropdown" class="dropdown hidden" style={{left: this.props.indent}}>
                        {
                            this.props.items.map((item, index) => {
                                return (
                                    <h1 class="dropdown-item dropdown-border-bottom" onClick={() => this.handleSelect(item)}>{item}</h1>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

} export default DropDown