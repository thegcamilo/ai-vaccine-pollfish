import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {agentText, agentQuestions} from './Data.js';
import shuffle from 'shuffle-array';

class Responsibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: new Date(),
            entities: agentText[this.props.agent],
            currEntity: 0,
            posNeg: this.props.consequences,
            disease: this.props.disease,
            responses: {},
            entityQuestions: shuffle(agentQuestions)
        }

        this.checkTime = this.checkTime.bind(this);
        this.saveResponses = this.saveResponses.bind(this);
    }

    saveResponses(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    checkTime() {
        const multiplier = (this.state.posNeg === "neg")? 3 : 2;
        const time = (this.state.posNeg === "neg")? 10 : 7;
        const delta_time = (new Date() - this.state.init) / 1000;
        if (delta_time < (time * (this.state.currEntity + 1))) {
            alert("Please take some time to carefully answer the questions.");
        } else {
            if (Object.keys(this.state.responses).length < (multiplier * (this.state.currEntity + 1))) {
                alert("You must answer all questions.");
            } else {
                if ((this.state.currEntity + 1) === this.state.entities.length) {
                    var responsesTmp = this.state.responses;
                    for (var key in responsesTmp) {
                        this.props.saveResponses(key, responsesTmp[key]);
                    }
                    this.props.checkTimeFuture();
                } else {
                    // need to reset inputs
                    this.setState({currEntity: this.state.currEntity + 1});
                }
            }
        }
    }

    render() {
        const entity = this.state.entities[this.state.currEntity];
        console.log(this.state.posNeg);
        return (
            <div>
                <div>
                    {this.state.entityQuestions.map((question, qIdx) => (
                        (question.id === "Punish" && (this.state.posNeg === "pos" || this.state.posNeg === "con"))?
                        <div></div>
                        :
                        // !(question.id === "Punish" && this.state.posNeg === "pos")? 
                        //<div style={(question.id === "Punish" && (this.state.posNeg === "pos" || this.state.posNeg === "con"))? {display: "none"}: {}} key={qIdx} className="Question">
                        <div key={qIdx} className="Question">
                            <span className="Question" style={{margin: "0px"}}>{question.initial[[this.state.posNeg]]} </span>
                            <span className="Spotlight Question" style={{margin: "0px"}}> {entity.text} </span> 
                            <span className="Question" style={{margin: "0px"}}> {question.conclusion[[this.state.posNeg]]}</span>
                            <div key={qIdx}>
                                <input key={question.id + qIdx}
                                value={((this.state.responses[entity.id + question.id] == null)? 50: this.state.responses[entity.id + question.id])} 
                                style={!((entity.id + question.id) in this.state.responses)? {background: "#000000"}: {}} type="range" min="0" max="100" 
                                step="1" 
                                onChange={(event) => {this.saveResponses(entity.id + question.id, event.target.value)}}
                                onClick={(event) => {this.saveResponses(entity.id + question.id, event.target.value)}}/>
                                <div className="SliderTicks">
                                    <span className="SliderLabel" style={{textAlign: "left"}}>|</span>
                                    <span className="SliderLabel">|</span>
                                    <span className="SliderLabel">|</span>
                                    <span className="SliderLabel" style={{textAlign: "right"}}>|</span>
                                </div>
                                <div className="SliderMarker">
                                    <span className="SliderLabel" style={{textAlign: "left"}}>{question.answers[0]}</span>
                                    <span className="SliderLabel">{question.answers[1]}</span>
                                    <span className="SliderLabel">{question.answers[2]}</span>
                                    <span className="SliderLabel" style={{textAlign: "right"}}>{question.answers[3]}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button variant="secondary" onClick={this.checkTime}>Next</Button> <div/>
            </div>
        );
    }
}

export default Responsibility;