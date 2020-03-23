import React from 'react';
import './App.css';
import { attentionCheck } from './Data.js';
import Button from 'react-bootstrap/Button';

class AttCheck extends React.Component {
    constructor(props) {
        super(props);
        var shuffle = require('shuffle-array');
        this.state = {
            answers: shuffle(attentionCheck.answers)
        }

    }

    render() {
        return (
            <div>
                <div className="Title">Please pick the best answer to the question below:</div>
                <hr/>
                <div className="Subtitle Question">Who was able to find a compound for a COVID-19 vaccine according to the article you just read?</div>
                <div style={{margin: "15px"}}>
                    {this.state.answers.map((answer, aIdx) => (
                        <div key={aIdx}>
                            <input type="radio" name="attCheck" value={answer.Id} onClick={() => this.props.saveDictToState({"attCheck": answer.id})}/>
                            <label style={{marginLeft: "5px"}}>
                                {answer.text}
                            </label>
                        </div>
                    ))}
                </div>
                <hr/>
                <Button variant="secondary" onClick={(this.props.responsesIncludeKey("attCheck")? this.props.skipStage: (() => (alert("Please answer the question."))))}>Next</Button>
            </div>
        );
    }
}

export default AttCheck;