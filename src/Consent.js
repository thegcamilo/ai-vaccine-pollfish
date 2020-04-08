import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

class Consent extends React.Component {
    render() {
        return (
            <div>
                <div className="Title">Record of Consent</div>
                    <div className="Text">
                        In this survey, we will present you with some situations involving COVID-19 and its vaccine that is currently under development and testing.
                        <p style={{"fontWeight": "bold"}}>We are not looking for the correct answers, but your opinion on the matter.</p>
                        <p className="Question Spotlight">Please, read all the information provided in this survey carefully.</p>
                        <div>
                        <hr/>
                        <div className="Subtitle">
                            Record of Consent
                        </div>
                        The purpose of this research is to understand public willingness to take a vaccine for COVID-19 under various circumstances. This experiment is composed of an online survey that takes less than 10 minutes to complete. Your responses will be used for research purposes only. Your responses may be shared with other researchers; all information, however, will be anonymized and allow no inference on any particular individual. 
                        Results will be published only as aggregate statistics, allowing no inference on any particular individual. Your participation is voluntary and you may withdraw from the study at any time without any penalty. To withdraw, simply close your browser.
                        <div className="Spotlight RedSpotlight Subtitle"> Participants who complete the survey will receive financial compensation as an incentive. <br/> 
                        <span style={(this.props.Preview)? {"display": "none"} : {}}>If you answer the questions in this survey too quickly (e.g., less than a second per question) without reading, 
                        your response will be discarded. Please read the survey carefully.</span></div>
                        <br/>
                        Please contact the research administrator (ibs.dscig@gmail.com) if you have any questions. Thank you!
                        <br/>
                        <span className="Question">Clicking <span className="Spotlight">next</span> below indicates that you have understood the information and consent to your participation.</span>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <Button variant="secondary" onClick={this.props.skipStage}>Next</Button>
                    </div>
            </div>
        );
    }

    
}

export default Consent;