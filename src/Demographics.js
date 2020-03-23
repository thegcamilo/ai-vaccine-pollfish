import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import shuffle from 'shuffle-array';
import { demographics } from './Data.js';
import Select from 'react-select';

class Demographics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: new Date(),
            responses: {},
            demographicQuestions: shuffle(demographics),
        }

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
        if (delta_time < 0){
            alert("Please take some time to answer the questions.");
        } else {
            if (Object.keys(this.state.responses).length < 21) {
                alert("You must answer all questions.");
            } else {
                this.props.saveDictToState(this.state.responses);
                this.props.skipStage();
            }
        }
    }

    render() {
        let content, setQuestions;
        content = [<div key="div0">
            <div className="Title">Please let us know a little bit more about yourself.</div>
            <div className="Subtitle">All the information obtained below will be used solely for research purposes.</div>
        </div>];
        for (let i=0; i < this.state.demographicQuestions.length; i++) {
            setQuestions = this.state.demographicQuestions[i];
            if (setQuestions.id === "govt") {
                content = [...content, <hr key={"hr" + i}/>, 
                <div key={"key" + i}>
                    {setQuestions.questions.map((question, qIdx) => (
                        <div key={qIdx}>
                            <span className="Question">{question.question}</span>
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
                                    <span style={{float: "left"}}>{question.answers[0]}</span>
                                    <span style={{float: "center", textAlign: "center"}}>{question.answers[1]}</span>
                                    <span style={{float: "right"}}>{question.answers[2]}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>];
            } else if (setQuestions.id === "newsSNS" || setQuestions.id === "personalCovid" || setQuestions.id === "personal") {
                content = [...content, <hr key={"hr" + i}/>, 
                <div key={"key" + i}>
                    {setQuestions.questions.map((question, qIdx) => (
                        <div key={qIdx}>
                            <span className="Question">{question.question}</span>
                            <div key={qIdx}>
                                {question.answers.map((answer, aIdx) => (
                                    <div className="Answer" key={aIdx}>
                                        <input key={aIdx} type="radio" name={question.id} value={answer} onClick={() => this.saveResponses(question.id, answer)}/>
                                        <label style={{"display": "block"}}>
                                            {answer}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>];
            } else if (setQuestions.id === "state") {
                content = [...content, <hr key={"hr" + i}/>,
                <div key={"key" + i}>
                    <div className="Question">{setQuestions.questions}</div>
                    <Select options={setQuestions.answers} onChange={(value) => this.saveResponses("state", value["value"])}/>
                </div>
                ]
            }
        }
        return (
            <div>
                <div>
                    {content}
                </div>
                <hr/>
                <Button variant="secondary" onClick={this.checkTime}>Next</Button>
            </div>
        );
    }
}

export default Demographics;