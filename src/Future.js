import React from 'react';
import './App.css';
import WillQuestions from './WillQuestions';
import Button from 'react-bootstrap/Button';
import Responsibility from './Responsibility.js';
import { consequences, getRandomItem } from './Data.js';

class Future extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: new Date(),
            stages: ["intro", "will", "resp"],
            currStageId: 0, 
            responses: {},
            hideButton: false, 
            consequences: getRandomItem(consequences),
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
            if (delta_time < 0) {
                alert("Please take some time to carefully read the provided paragraph.");
            } else {
                this.setState({currStageId: this.state.currStageId + 1});
            }
        } else if (currStage === "will"){
            if (delta_time < 0) {
                alert("Please take some time to carefully answer the questions.");
            } else {
                if (Object.keys(this.state.responses).length < 5) {
                    alert("You must answer all questions.");
                } else {
                    this.setState({hideButton: true});
                    this.setState({currStageId: this.state.currStageId + 1});
                }
            }
        } else if (currStage === "resp") {
            this.saveResponses("consequence", this.state.consequences);
            this.props.saveDictToState(this.state.responses);
            this.props.skipAppStage();
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
                    The following news excerpt is a future scenario where a vaccine has been finally approved by the U.S. FDA.
                    Please read it below. 
                </div>
                <div>
                    [ADD IMAGE HERE]
                </div>
                <hr/>
            </div>;

        } else if (currStage === "will") {
            content = <div>
                <div>
                    <div className="Subtitle">
                        Taking in consideration the news excerpt you have just read, please answer the following questions.
                    </div>
                    <div className="Text" onMouseEnter={() => this.setState({showNews: true})} onMouseLeave={() => this.setState({showNews: false})}>
                            If needed, please hover to see the news.
                        <div>
                            {(this.state.showNews)? "[ADD IMAGE HERE]": null}
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
                        We are also interested in how you would assign responsibility for the consequences of this vaccine.
                    </div>
                    <div className="Text" onMouseEnter={() => this.setState({showNews: true})} onMouseLeave={() => this.setState({showNews: false})}>
                            If needed, please hover to see the news.
                        <div>
                            {(this.state.showNews)? "[ADD IMAGE HERE]": null}
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