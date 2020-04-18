import React from 'react';
import { getRandomItem, treatDiseases, treatAgents, treatTimes } from './Data.js';
import './App.css';
import Button from 'react-bootstrap/Button';
import Consent from './Consent.js';
import Intro from './Intro.js';
import Present from './Present.js';
import AttCheck from './AttCheck.js';
import Future from './Future.js';
import Medical from './Medical.js';
import Demographics from './Demographics.js';
import firebase from 'firebase';
import config from './config.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    const queryString = require('query-string');
    const params = queryString.parse(this.props.location.search);
    this.state = {
      time: {"init": new Date()},
      prolificId: params.PROLIFIC_PID,
      studyId: params.STUDY_ID,
      sessionId: params.SESSION_ID,
      disease: getRandomItem(treatDiseases),
      agent: getRandomItem(treatAgents),
      beforeAfter: getRandomItem(treatTimes),
      stages: ["consent", "intro", "present", "att", "future", "mmms", "demographics", "end"],
      currStageId: 0,
      responses: {}
    }

    this.saveDictToState = this.saveDictToState.bind(this);
    this.saveTime = this.saveTime.bind(this);
    this.skipStage = this.skipStage.bind(this);
    this.redirectToSurveyCompletion = this.redirectToSurveyCompletion.bind(this);
    this.saveToFirebase = this.saveToFirebase.bind(this);
    this.responsesIncludeKey = this.responsesIncludeKey.bind(this);

    firebase.initializeApp(config);
  }

  responsesIncludeKey(key) {
    return (key in this.state.responses);
  }

  saveDictToState(dict) {
    var responsesTmp = this.state.responses;
    for (var key in dict) {
        responsesTmp[key] = dict[key];
    }
    this.setState({responses: responsesTmp});
  }

  saveTime(nameTime) {
    const delta_time = new Date() - this.state.time["init"];
    this.setState({time: {...this.state.time, [nameTime]: delta_time}});
  }


  skipStage() {
    this.saveTime(this.state.stages[this.state.currStageId] + "End");
    this.setState({currStageId: this.state.currStageId + 1});
  }

  saveToFirebase() {
    var allResponses = this.state.responses;
    allResponses.disease = this.state.disease;
    allResponses.agent = this.state.agent;
    allResponses.beforeAfter = this.state.beforeAfter;
    allResponses.prolificId = this.state.prolificId;
    allResponses.studyId = this.state.studyId;
    allResponses.sessionId = this.state.sessionId;
    const times = this.state.time;
    for (var keyTime in times) {
        allResponses[keyTime] = times[keyTime];
    }
    firebase.database().ref("/" + this.state.prolificId).set(allResponses).catch(error => console.log(error)).then(() => this.redirectToSurveyCompletion());
    //this.redirectToSurveyCompletion();
}

  redirectToSurveyCompletion() {
    let path = 'https://app.prolific.co/submissions/complete?cc=472B9295';
    window.open(path, "_self");
}
  render() {
    const stage = this.state.stages[this.state.currStageId];
    let content;
    if (stage === "consent") {
      content = <Consent skipStage={this.skipStage}/>;
    } else if (stage === "intro") {
      content = <Intro skipStage={this.skipStage} saveDictToState={this.saveDictToState} saveTime={this.saveTime}/>
    } else if (stage === "present") {
      content = <Present skipStage={this.skipStage} 
      saveDictToState={this.saveDictToState} beforeAfter={this.state.beforeAfter} 
      agent={this.state.agent} disease={this.state.disease} saveTime={this.saveTime}/>
    } else if (stage === "att") {
      content = <AttCheck skipStage={this.skipStage} saveDictToState={this.saveDictToState} responsesIncludeKey={this.responsesIncludeKey}/>
    } else if (stage === "future") {
      content = <Future skipAppStage={this.skipStage} 
      saveDictToState={this.saveDictToState} agent={this.state.agent} 
      disease={this.state.disease} saveTime={this.saveTime}/>
    } else if (stage === "mmms") {
      content = <Medical skipStage={this.skipStage} saveDictToState={this.saveDictToState}/>
    } else if (stage === "demographics") {
      content = <Demographics skipStage={this.skipStage} saveDictToState={this.saveDictToState}/>
    } else if (stage === "end") {
      content = <div>
                  <div className="Title">Thank you for participating in our survey!</div>
                  <div className="Subtitle">
                      If you have any questions, feel free to contact us at ibs.dscig@gmail.com.
                      <hr/>
                  </div>
                  <div className="QuestionMargin">
                      <span className="Title Spotlight RedSpotlight">Click on the button below to complete the survey.</span>
                      <div className="QuestionMargin">
                          <Button variant="secondary" onClick={this.saveToFirebase}>Complete Survey</Button>
                      </div>
                  </div>
                </div>; 
    } else {
      content = <div className="Title">Please contact the research administrator (ibs.dscig@gmail.com)</div>
    }
  return (
    <div className="App">
      {content}
    </div>
    );
  }
}

export default App;
