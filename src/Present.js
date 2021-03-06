import React from 'react';
import './App.css';
import WillQuestions from './WillQuestions';
import Button from 'react-bootstrap/Button';
import AINews from './assets/AI.png';
import humanNews from "./assets/human.png";
import humanAINews from "./assets/human-AI.png";

class Present extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialInfo: true,
            responses: {},
            init: new Date(),
            showNews: false,
            image: (this.props.agent === "AI")? AINews : (this.props.agent === "human")? humanNews : humanAINews
        }
        this.changeInternalState = this.changeInternalState.bind(this);
        this.saveResponses = this.saveResponses.bind(this);
        this.checkTime = this.checkTime.bind(this);
        this.responsesIncludeKey = this.responsesIncludeKey.bind(this);
    }

    responsesIncludeKey(key) {
        return (key in this.state.responses);
    }

    checkTime() {
        const delta_time = (new Date() - this.state.init) / 1000;
        console.log(delta_time);
        if (this.state.initialInfo) {
            if (delta_time < 20) {
                alert("Please take some time to carefully read the provided excerpt.");
            } else {
                this.props.saveTime("presentReadingFinish");
                this.changeInternalState();
            }
        } else {
            if (delta_time < 15) {
                alert("Please take some time to carefully answer the questions.");
            } else {
                if (Object.keys(this.state.responses).length < 4) {
                    alert("You must answer all questions.");
                } else {
                    this.props.saveDictToState(this.state.responses);
                    this.props.skipStage();
                }
            }
        }
    }

    changeInternalState() {
        this.setState({initialInfo: false, init: new Date()});
    }

    saveResponses(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    render() {
        let content;
        if (this.state.initialInfo) {
            content = <div>
                <div className="Title">Please read the following news excerpt.</div>
                {/* <div className="SubTitle">We have removed the real publisher as to not bias your judgement.</div> */}
                <div>
                    <img src={this.state.image} alt="News Excerpt"/>
                </div>
                <hr/>
            </div>;
        } else {
            content = <div>
                <div>
                    <div className="Subtitle">
                        Taking in consideration the news excerpt you have just read, please answer the following questions.
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
                    <WillQuestions saveResponses={this.saveResponses} beforeAfter={this.props.beforeAfter} responsesIncludeKey={this.responsesIncludeKey}/>
                </div>
            </div>
        }
        return (
            <div>
                <div>
                    {content}
                </div>
                <Button variant="secondary" onClick={this.checkTime}>Next</Button>
            </div>
        );
    }
}

export default Present;