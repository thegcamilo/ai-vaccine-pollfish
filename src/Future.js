import React from 'react';
import './App.css';
import WillQuestions from './WillQuestions';
import Button from 'react-bootstrap/Button';
import Responsibility from './Responsibility.js';
import { consequences, getRandomItem } from './Data.js';
import PosImg from './assets/pos_.png';
import NegImg from './assets/neg_.png';
import ConImg from './assets/con_.png';

class Future extends React.Component {
    constructor(props) {
        super(props);
        var consequence = getRandomItem(consequences);
        this.state = {
            init: new Date(),
            stages: ["intro", "resp", "will"],
            currStageId: 0, 
            responses: {},
            hideButton: false, 
            consequences: consequence,
            image: (consequence === "pos")? PosImg : (consequence === "neg")? NegImg : ConImg
        }

        this.responsesIncludeKey = this.responsesIncludeKey.bind(this);
        this.checkTime = this.checkTime.bind(this);
        this.saveResponses = this.saveResponses.bind(this);
        this.showMainButton = this.showMainButton.bind(this);
    }

    showMainButton() {
        this.setState({hideButton: false});
    }

    responsesIncludeKey(key) {
        return (key in this.state.responses);
    }

    saveResponses(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    checkTime() {
        const delta_time = (new Date() - this.state.init) / 1000;
        console.log(delta_time);
        const currStage = this.state.stages[this.state.currStageId];
        if (currStage === "intro") {
            if (delta_time < 15) {
                alert("Please take some time to carefully read the provided excerpt.");
            } else {
                this.setState({hideButton: true});
                this.props.saveTime("futureReadingFinish");
                this.setState({currStageId: this.state.currStageId + 1});
            }
        } else if (currStage === "will"){
            if (delta_time < 15) {
                alert("Please take some time to carefully answer the questions.");
            } else {
                var condition = ("personalWillFuture" in this.state.responses) && ("childWillFuture" in this.state.responses) && ("elderWillFuture" in this.state.responses);
                condition = condition && ("worrinessFuture" in this.state.responses);
                if (!condition) { // change this
                    alert("You must answer all questions.");
                } else {
                    // this.setState({hideButton: true});
                    // this.setState({currStageId: this.state.currStageId + 1});
                    this.props.saveDictToState(this.state.responses);
                    this.props.skipAppStage();
                }
            }
        } else if (currStage === "resp") {
            this.saveResponses("consequence", this.state.consequences);
            this.setState({currStageId: this.state.currStageId + 1});
            // this.props.saveDictToState(this.state.responses);
            // this.props.skipAppStage();
            this.props.saveTime("respQFinish");
            this.setState({hideButton: false});
        } else {
            alert("Not to be implemented");
        }
    }

    render() {
        let content;
        const currStage = this.state.stages[this.state.currStageId];
        if (currStage === "intro") {
            content = <div>
                <div className="Title">A vaccine for COVID-19 is expected to be widely available to the public in 12 to 18 months from now.</div>
                <div className="Subtitle">
                    The following news excerpt is a future scenario where a vaccine has been finally approved by the U.S. Food and Drug Administration (FDA).
                </div>
                <div>
                    <img src={this.state.image} alt="News Excerpt"/>
                </div>
                <hr/>
            </div>;

        } else if (currStage === "will") {
            content = <div>
                <div>
                    <div className="Subtitle">
                        Taking in consideration the future news excerpt you have read, please answer the following questions.
                    </div>
                    <div className="Text" onMouseEnter={() => this.setState({showNews: true})} onMouseLeave={() => this.setState({showNews: false})}>
                            If needed, please hover to see the news.
                        <div>
                            {(this.state.showNews)? <img src={this.state.image} alt="News Excerpt"/>: null}
                        </div>
                    </div>  
                </div>
                <hr/>
                <div>
                    <WillQuestions saveResponses={this.saveResponses} beforeAfter={"future"} responsesIncludeKey={this.responsesIncludeKey}/>
                </div>
            </div>;
        } else if (currStage === "resp") {
            content = <div>
                <div>
                    <div className="Subtitle">
                        {(this.state.consequences !== "neg")? 
                        <span>We are interested in how you would assign credit and awareness to the entities involved in the development of the COVID-19 vaccine.</span>:
                        <span>We are interested in how you would assign blame, awareness, and punishment to the entities involved in the development of the COVID-19 vaccine.</span>}
                    </div>
                    <div className="Text" onMouseEnter={() => this.setState({showNews: true})} onMouseLeave={() => this.setState({showNews: false})}>
                            If needed, please hover to see the news.
                        <div>
                            {(this.state.showNews)? <img src={this.state.image} alt="News Excerpt"/>: null}
                        </div>
                    </div>  
                </div>
                <hr/>
                <div>
                    <Responsibility saveResponses={this.saveResponses}
                    responsesIncludeKey={this.responsesIncludeKey} 
                    checkTimeFuture={this.checkTime}
                    agent={this.props.agent}
                    disease={this.props.disease} 
                    consequences={this.state.consequences}/>
                </div>
            </div>;
        } else {
            content = "Not implemented";
        }
        return (
            <div>
                <div>
                    {content}
                </div>
                {(!this.state.hideButton)? <Button variant="secondary" onClick={this.checkTime}>Next</Button>: <div/>}
            </div>

        );
    }
 
}
export default Future;