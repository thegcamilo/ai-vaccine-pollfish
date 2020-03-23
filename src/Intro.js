import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import ConcernContact from './ConcernContact.js';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialInfo: true,
            responses: {},
            init: new Date()
        };
        this.changeInternalState = this.changeInternalState.bind(this);
        this.saveResponses = this.saveResponses.bind(this);
        this.checkTime = this.checkTime.bind(this);

    }

    checkTime() {
        const delta_time = (new Date() - this.state.init) / 1000;
        console.log(delta_time);
        if (this.state.initialInfo) {
            if (delta_time < 10) {
                alert("Please take some time to carefully read the provided paragraph.");
            } else {
                this.changeInternalState();
            }
        } else {
            if (delta_time < 30) {
                alert("Please take some time to carefully answer the questions.");
            } else {
                if (Object.keys(this.state.responses).length < 8) {
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
        let questions = (!this.state.initialInfo)? <ConcernContact saveResponses={this.saveResponses}/> : <div></div>;
        content = <div>
            <div className="Title">Introduction</div>
            <div className="BigText">
                COVID-19 is a respiratory illness caused by a new coronavirus, first found in China in November 2019. 
                After spreading across Asia, the disease has reached Europe and America, leading the World Health Organization (WHO) to declare it a pandemic. 
                COVID-19 has so far infected over 190,000 people and has killed more than 8000 patients around the world. 
            </div>
            <hr/>
        </div>;
        return (
            <div>
                <div>
                    {content}
                </div>
                <div>
                    {questions}
                </div>
                <Button variant="secondary" onClick={this.checkTime}>Next</Button>
            </div>
        );
    }
}

export default Intro;