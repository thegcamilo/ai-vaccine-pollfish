import React from 'react';
import './App.css';
import './Slider.css';
import { willQuestions, beforeAfter } from './Data.js';

class WillQuestions extends React.Component {
    constructor(props) {
        super(props);
        var shuffle = require('shuffle-array');
        const tmpShuffle = shuffle(willQuestions);
        this.state = {
            questions: shuffle(tmpShuffle[0]).concat(tmpShuffle[1]),
            questionCompletion: beforeAfter[[this.props.beforeAfter]],
        }
    }

    render() {
        return (
            <div>
                {this.state.questions.map((question, qIdx) => (
                    <div key={qIdx} >
                        <span className="Question">{question.question + this.state.questionCompletion}</span>
                        <div key={qIdx}>
                            <input key={question.id + qIdx} style={(!this.props.responsesIncludeKey(question.id))? {background: "#000000"}: {}} type="range" min="0" max="100" step="1" onChange={(event) => {this.props.saveResponses(question.id, event.target.value)}}/>
                            <div className="SliderTicks">
                                    <span className="SliderLabel" style={{textAlign: "left", width: "33.3%"}}>|</span>
                                    <span className="SliderLabel" style={{width: "33.3%"}}>|</span>
                                    <span className="SliderLabel" style={{textAlign: "right", width: "33.4%"}}>|</span>
                                </div>
                            <div className="SliderMarker">
                                <span style={{float: "left"}}>{question.answers[0]}</span>
                                <span style={{float: "center", textAlign: "center"}}>{question.answers[1]}</span>
                                <span style={{float: "right"}}>{question.answers[2]}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default WillQuestions;