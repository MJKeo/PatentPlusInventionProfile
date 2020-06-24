import React, { Component } from 'react';
// images
import OverviewDefault from "../images/overview-icon-default.png";
import OverviewSelected from "../images/overview-icon-selected.png";
import DetailsDefault from "../images/details-icon-default.png";
import DetailsSelected from "../images/details-icon-selected.png";
import ReviewDefault from "../images/review-icon-default.png";
import ReviewSelected from "../images/review-icon-selected.png";
import "../stylesheets/sectionbar.css"

/*
    THIS COMPONENT WILL HAVE THE FOLLOWING:
    -Images for each 'section' of your profile completion
        -3 in total
    
    It'll update the style based on where you are
*/

class PageBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          overviewStatus: 0,
          detailsStatus: 0,
          reviewStatus: 0
        };

        this.selectOverview = this.selectOverview.bind(this);
        this.selectDetails = this.selectDetails.bind(this);
        this.selectReview = this.selectReview.bind(this);
    }

    componentDidMount() {
        this.selectOverview();
    }

    selectOverview() {
        this.refs.overviewIcon.classList.add("section-bar-image-selected")
        this.refs.overview.classList.add("selected")
        this.setState({
            overviewStatus: 1
        })
    }

    selectDetails() {
        this.refs.line1.classList.add("section-bar-line-selected")
        this.refs.detailsIcon.classList.add("section-bar-image-selected")
        this.refs.details.classList.add("selected")
        this.setState({
            detailsStatus: 1
        })
    }

    selectReview() {
        this.refs.line2.classList.add("section-bar-line-selected")
        this.refs.reviewIcon.classList.add("section-bar-image-selected")
        this.refs.review.classList.add("selected")
        this.setState({
            reviewStatus: 1
        })
    }

    render() {
        const overViewIcon = this.state.overviewStatus == 0 ? OverviewDefault : OverviewSelected
        const detailsIcon = this.state.detailsStatus == 0 ? DetailsDefault : DetailsSelected
        const reviewIcon = this.state.reviewStatus == 0 ? ReviewDefault : ReviewSelected
        
        return (
            <div class="main-bar-div">
                <div ref="overview" class="section-bar-item">
                    <img ref="overviewIcon" class="overview-icon" src={overViewIcon} alt="overview" />
                </div>
                <div ref="line1" class="section-bar-line"></div>
                <div ref="details" class="section-bar-item">
                    <img ref="detailsIcon" class="details-icon" src={detailsIcon} alt="overview" onClick={this.selectDetails}/>
                </div>
                <div ref="line2" class="section-bar-line"></div>
                <div ref="review" class="section-bar-item">
                    <img ref="reviewIcon" class="review-icon" src={reviewIcon} alt="overview" onClick={this.selectReview}/>
                </div>
            </div>
        )
    }

} export default PageBar