import React from 'react';
import './App.css';
import { introQuestions } from './Data.js';
import './Slider.css';

class ConcernContact extends React.Component {
    constructor(props) {
        super(props);
        var shuffle = require('shuffle-array');
        this.state = {
            contactQuestions: shuffle(introQuestions.contact),
            concernQuestions: shuffle(introQuestions.concern)
        }

    }

    render() {
        return (
            <div>
                {this.state.contactQuestions.map((question, qIdx) => (
                    <div key={qIdx} className="Question">
                        <span>{question.question}</span>
                        <div key={qIdx}>
                            {question.answers.map((answer, aIdx) => (
                                <div className="Answer" key={aIdx}>
                                    <input key={aIdx} type="radio" name={question.id} value={answer} onClick={() => this.props.saveResponses(question.id, answer)}/>
                                    <label style={{"display": "block"}}>
                                        {answer}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <hr/>
                {this.state.concernQuestions.map((question, qIdx) => (
                    <div key={qIdx} className="Question">
                        <span>{question.question}</span>
                        <div key={qIdx}>
                            <input type="range" min="0" max="100" step="1" onChange={(event) => {this.props.saveResponses(question.id, event.target.value)}}/>}
                            <div className="SliderMarker">
                                <span style={{float: "left"}}>{question.answers[0]}</span>
                                <span style={{float: "center", textAlign: "center"}}>{question.answers[1]}</span>
                                <span style={{float: "right"}}>{question.answers[2]}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <hr/>

            </div>
        );
    }
}

export default ConcernContact;