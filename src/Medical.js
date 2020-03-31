import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { MMMS } from './Data.js';
import shuffle from 'shuffle-array';

class Medical extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: new Date(),
            questions: shuffle(MMMS.questions),
            responses: {},
        };

        this.saveResponses = this.saveResponses.bind(this);
        this.checkTime = this.checkTime.bind(this);
    }

    saveResponses(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    checkTime() {
        const delta_time = (new Date() - this.state.init) / 1000;
        console.log(delta_time);
        if (delta_time < 20){
            alert("Please take some time to answer the questions.");
        } else {
            if (Object.keys(this.state.responses).length < 10) {
                alert("You must answer all questions.");
            } else {
                this.props.saveDictToState(this.state.responses);
                this.props.skipStage();
            }
        }
    }

    render() {
        return (
            <div>
                <div className="Title">
                        Please let us know a little bit about your utilization of the health care system.
                </div>
                <div className="Subtitle">
                    To what extent to you agree with the following statements?
                </div>
                <hr/>
                <div>
                    {this.state.questions.map((question, qIdx) => (
                    <div key={qIdx}>
                        <span className="Question">{question.text}</span>
                        <div key={qIdx}>
                            <input key={question.id + qIdx} 
                            style={!(question.id in this.state.responses)? {background: "#000000"}: {}} 
                            type="range" min="0" max="100" step="1" 
                            onChange={(event) => {this.saveResponses(question.id, event.target.value)}}/>
                            <div className="SliderTicks">
                                    <span className="SliderLabel" style={{textAlign: "left", width: "33.3%"}}>|</span>
                                    <span className="SliderLabel" style={{width: "33.3%"}}>|</span>
                                    <span className="SliderLabel" style={{textAlign: "right", width: "33.4%"}}>|</span>
                                </div>
                            <div className="SliderMarker">
                                <span style={{float: "left"}}>{MMMS.answers[0]}</span>
                                <span style={{float: "center", textAlign: "center"}}>{MMMS.answers[1]}</span>
                                <span style={{float: "right"}}>{MMMS.answers[2]}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <hr/>
                <Button variant="secondary" onClick={this.checkTime}>Next</Button>
            </div>
        );
    }
}

export default Medical;