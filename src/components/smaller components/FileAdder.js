import React, { Component } from 'react';
import FileIcon from "../../images/add-file-icon.png";
import "../../stylesheets/fileadder.css"

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    
*/

class FileAdder extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.refreshIfNeeded = this.refreshIfNeeded.bind(this);
    }

    componentDidMount() {
        setInterval(this.refreshIfNeeded, 100)
    }

    refreshIfNeeded() {
        this.setState({})
    }

    render() {
        var title = ""
        if (this.refs.file != null && this.refs.file.files.length > 0) {
            title = this.refs.file.files.length == 1 ? "(1 file attached)" : ("(" + this.refs.file.files.length + " files attached)")
        }
        return (
            <div class="file-adder-whole">
                <h1 class="file-adder-title">{this.props.title}</h1>
                <div data-toggle="tooltip" title="Attach a file" class="file-adder-main-div">
                    <input ref="file" id="file" type="file" class="hiding-file-input" multiple></input>
                    <img src={FileIcon} alt="add file" class="file-adder-image" />
                    <label for="file" class="file-adder-label"></label>
                    <h1 class="file-adder-text">{title}</h1>
                </div>
            </div>
        )
    }

} export default FileAdder