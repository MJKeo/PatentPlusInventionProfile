import React, { Component } from 'react';
// images
import OverviewDefault from "../images/overview-icon-default.png";
import OverviewSelected from "../images/overview-icon-selected.png";
import DetailsDefault from "../images/details-icon-default.png";
import DetailsSelected from "../images/details-icon-selected.png";
import NoveltyDefault from "../images/novelty-icon-default.png";
import NoveltySelected from "../images/novelty-icon-selected.png";
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
          noveltyStatus: 0,
          reviewStatus: 0
        };

        this.selectOverview = this.selectOverview.bind(this);
        this.selectDetails = this.selectDetails.bind(this);
        this.selectReview = this.selectReview.bind(this);
        this.selectNovelty = this.selectNovelty.bind(this);
    }

    componentDidMount() {
        this.selectOverview();
    }

    selectOverview() {
        this.refs.overviewIcon.classList.add("section-bar-image-selected")
        this.refs.overview.classList.add("selected")
        this.refs.overviewText.classList.add("section-bar-text-selected")
        this.setState({
            overviewStatus: 1
        })
    }

    selectDetails() {
        this.refs.line1.classList.add("section-bar-line-selected")
        this.refs.detailsIcon.classList.add("section-bar-image-selected")
        this.refs.detailsText.classList.add("section-bar-text-selected")
        this.refs.details.classList.add("selected")
        this.setState({
            detailsStatus: 1
        })
    }

    selectNovelty() {
        this.refs.line2.classList.add("section-bar-line-selected")
        this.refs.noveltyIcon.classList.add("section-bar-image-selected")
        this.refs.noveltyText.classList.add("section-bar-text-selected")
        this.refs.novelty.classList.add("selected")
        this.setState({
            noveltyStatus: 1
        })
    }

    selectReview() {
        this.refs.line3.classList.add("section-bar-line-selected")
        this.refs.reviewIcon.classList.add("section-bar-image-selected")
        this.refs.reviewText.classList.add("section-bar-text-selected")
        this.refs.review.classList.add("selected")
        this.setState({
            reviewStatus: 1
        })
    }

    render() {
        const overViewIcon = this.state.overviewStatus == 0 ? OverviewDefault : OverviewSelected
        const detailsIcon = this.state.detailsStatus == 0 ? DetailsDefault : DetailsSelected
        const noveltyIcon = this.state.noveltyStatus == 0 ? NoveltyDefault : NoveltySelected
        const reviewIcon = this.state.reviewStatus == 0 ? ReviewDefault : ReviewSelected
        
        return (
            <div class="main-bar-div">
                <div class="section-bar-div">
                    <div ref="overview" class="section-bar-item">
                        <img ref="overviewIcon" class="overview-icon" src={overViewIcon} alt="overview" />
                    </div>
                    <h1 ref="overviewText" class="section-bar-text">Overview</h1>
                </div>
                <div ref="line1" class="section-bar-line"></div>
                <div class="section-bar-div">
                    <div ref="details" class="section-bar-item">
                        <img ref="detailsIcon" class="details-icon" src={detailsIcon} alt="details" onClick={this.selectDetails}/>
                    </div>
                    <h1 ref="detailsText" class="section-bar-text">Invention Details</h1>
                </div>
                <div ref="line2" class="section-bar-line"></div>
                <div class="section-bar-div">
                    <div ref="novelty" class="section-bar-item">
                        <img ref="noveltyIcon" class="novelty-icon" src={noveltyIcon} alt="novelty" onClick={this.selectNovelty}/>
                    </div>
                    <h1 ref="noveltyText" class="section-bar-text">Novelty Determination</h1>
                </div>
                <div ref="line3" class="section-bar-line"></div>
                <div class="section-bar-div">
                    <div ref="review" class="section-bar-item">
                        <img ref="reviewIcon" class="review-icon" src={reviewIcon} alt="review" onClick={this.selectReview}/>
                    </div>
                    <h1 ref="reviewText" class="section-bar-text">Final Review</h1>
                </div>
            </div>
        )
    }

} export default PageBar