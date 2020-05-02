(this["webpackJsonpai-vaccine-pollfish"]=this["webpackJsonpai-vaccine-pollfish"]||[]).push([[0],{15:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/AI.009932ce.png"},42:function(e,t,a){e.exports=a.p+"static/media/human.170a0e83.png"},43:function(e,t,a){e.exports=a.p+"static/media/human-AI.224d0a77.png"},44:function(e,t,a){e.exports=a.p+"static/media/pos_.62f648b1.png"},45:function(e,t,a){e.exports=a.p+"static/media/neg_.2a9d07ee.png"},46:function(e,t,a){e.exports=a.p+"static/media/con_.b738c7a7.png"},51:function(e,t,a){e.exports=a(85)},56:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(22),r=a.n(i),o=(a(56),a(26)),l=a(39),c=a(5),u=a(6),h=a(3),d=a(7),m=a(8),p=a(11),v=a.n(p);function y(e){return e[Math.floor(Math.random()*e.length)]}var f=["COVID-19"],g=["human","human-AI","AI"],w=["after"],b=[{id:"cityLevel",question:"Has there been a case of COVID-19 in your city?",answers:["Yes","No","I don't know"]},{id:"personalLevel",question:"Have you or anyone you know been infected by the new coronavirus?",answers:["Yes","No","I don't know"]},{id:"symptomLevel",question:"Have you or anyone you know showed any of the following symptoms? Fever, cough, sore throat, shortness of breath.",answers:["Yes","No","I am not sure"]}],E=[{id:"illLikelihood",question:"How likely are you to become ill with COVID-19?",answers:["Not likely at all","Very likely"]},{id:"severeness",question:"How severe do you think the economic consequences of COVID-19 will be to you?",answers:["Not severe at all","Very severe"]},{id:"closeDeath",question:"If you become infected with COVID-19, how likely do you believe it is that you might fall severely ill or die from it?",answers:["Not likely at all","Very likely"]},{id:"concern",question:"How concerned are you about getting COVID-19?",answers:["Not concerned at all","Very concerned"]}],k=[[{id:"personalWill",question:"How willing are you to get this new vaccine",answers:["Not willing at all","I am not sure","Very willing"]},{id:"childWill",question:"How willing are you to get this new vaccine for your child",answers:["Not willing at all","I am not sure","Very willing"]},{id:"elderWill",question:"How willing are you to get this new vaccine for your elders (over 65 yrs. old)",answers:["Not willing at all","I am not sure","Very willing"]}],[{id:"worriness",question:"How worried would you be about getting this new vaccine",answers:["Not worried at all","I am not sure","Very worried"]}]],S={before:"?",after:"?",future:"?"},I=[{id:"public",text:"The general public"},{id:"human",text:"A team of researchers"},{id:"AI",text:"An artificial intelligence program"},{id:"human-AI",text:"A team of researchers with the help of an artificial intelligence program"}],N=["neg","pos","con"],O={human:[{id:"researchers",text:"the team of researchers"},{id:"government",text:"the goverment"},{id:"worker",text:"the health care worker who administers the vaccines"}],"human-AI":[{id:"researchers",text:"the team of researchers"},{id:"AI",text:"SAM, the AI program,"},{id:"company",text:"SAM's (the AI programs's) developing company"},{id:"government",text:"the goverment"},{id:"worker",text:"the health care worker who administers the vaccines"},{id:"programmer",text:"SAM's (the AI program's) main programmer"}],AI:[{id:"researchers",text:"the team of researchers, who solely synthesized the vaccine,"},{id:"AI",text:"SAM, the AI program,"},{id:"company",text:"SAM's (the AI programs's) developing company"},{id:"government",text:"the goverment"},{id:"worker",text:"the health care worker who administers the vaccines"},{id:"programmer",text:"SAM's (the AI program's) main programmer"}]},T=[{id:"Blame",initial:{pos:"How much credit does ",neg:"How much blame does ",con:"How much credit does "},conclusion:{pos:" deserve for the effectiveness of the COVID-19 vaccine?",neg:" deserve for the side effects of the COVID-19 vaccine?",con:" deserve for the development of the COVID-19 vaccine?"},answers:["None at all","A little","Some","A lot"]},{id:"Aware",initial:{pos:"How much do you think ",neg:"How much do you think ",con:"How much do you think "},conclusion:{pos:" should have been aware of the effectiveness of the COVID-19 vaccine?",neg:" should have been aware of the side effects of the COVID-19 vaccine?",con:" should have been aware of the development of the COVID-19 vaccine?"},answers:["Not aware at all","Not really aware","Somewhat aware","Very aware"]},{id:"Punish",initial:{pos:"How much should ",neg:"How much should ",con:"How much should "},conclusion:{pos:" be punished for the side effects of the COVID-19 vaccine?",neg:" be punished for the side effects of the COVID-19 vaccine?",con:" be punished for the side effects of the COVID-19 vaccine?"},answers:["Not at all","A little","Some","A lot"]}],x=["Strongly disagree","Neither agree nor disagree","Strongly agree"],C=[{id:"mmms0",text:"It is important to treat disease even when it does not make a difference in survival"},{id:"mmms1",text:"It is important to treat a disease even when it does not make a difference in quality of life"},{id:"mmms2",text:"Doing everything to fight illness is always the right choice"},{id:"mmms3",text:"When it comes to health care, the only responsible thing to do is to actively seek medical care"},{id:"mmms4",text:"If I have a health issue, my preference is to wait and see if the problem gets better on its own before going to the doctor"},{id:"mmms5",text:"If I feel unhealthy, the first thing that I do is to go to the doctor and get a prescription"},{id:"mmms6",text:"I often suggest that friends and family see their doctor"},{id:"mmms7",text:"When it comes to health care, watching and waiting is never an acceptable option"},{id:"mmms8",text:"If I have a medical problem, my preference is to go straight to a doctor and ask his or her opinion"},{id:"mmms9",text:"When it comes to medical treatment, more is usually better"}],q=[{id:"govt",questions:v()([{id:"govtOpen",question:"How open do you think the UK government is with information regarding COVID-19?",answers:["Not open at all"," I am not sure","Very open"]},{id:"govtHonest",question:"How honest do you think the UK government is with information regarding COVID-19?",answers:["Not honest at all"," I am not sure","Very honest"]},{id:"govtCompetent",question:"How competent do you believe the UK government is in handling COVID-19?",answers:["Not competent at all"," I am not sure","Very competent"]},{id:"govtCommitment",question:"How committed do you believe the UK government is to protect you from COVID-19?",answers:["Not committed at all"," I am not sure","Very committed"]},{id:"govtCare",question:"How much caring and concern do you think the UK government has shown about people who might be affected by this COVID-19 outbreak?",answers:["Not much at all"," I am not sure","Very much"]},{id:"govtBelief",question:"How much do you believe that the UK government\u2019s actions in response to COVID-19 are in your personal best interest?",answers:["I don't believe"," I am not sure","I do believe"]},{id:"govtProtect",question:"How much do you believe the UK government will protect you from COVID-19?",answers:["Not much at all"," I am not sure","Very much"]}])},{id:"newsSNS",questions:v()([{id:"socialMediaNews",question:"On average, how many news links regarding COVID-19 have you accessed through social media in the last week?",answers:["0 links","1-5 links","5-10 links","Over 10 links"]},{id:"news",question:"How often do you proactively check the news regarding COVID-19?",answers:["Never","Once a few days","Once a day","More than once a day"]},{id:"socialMediaLastWeek",question:"How often have you accessed any social media platform in the last week?",answers:["Never","Once a few days","Once every day","Many times a day"]},{id:"socialMediaDaily",question:"How much time do you usually spend daily on any social media platform?",answers:["None","Less than 30 minutes","Around 1 hour","2 hours or more"]},{id:"acquaintances",question:"How many people, excluding your household members, do you interact face-to-face daily these days (either online or offline)?",answers:["None","Less than 5 people","Around 5-10 people","More than 10 people"]}])},{id:"personalCovid",questions:v()([{id:"insurance",question:"Do you have health insurance at the moment?",answers:["Yes","No"]},{id:"eldersLive",question:"Do you live with any elders (over 65 years old)?",answers:["Yes","No"]},{id:"childLive",question:"Do you live with any children?",answers:["Yes","No"]},{id:"vaccinationFlu",question:"How often in the past have you gotten a flu vaccination?",answers:["Never","Once or twice","More than twice but not annually","Annually"]},{id:"vaccination",question:"Have you gotten shots of the required vaccines in the past?",answers:["All of them","Some","Never"]}])},{id:"personal",questions:v()([{id:"sex",question:"What is your sex?",answers:["Female","Male","Other"]},{id:"age",question:"How old are you?",answers:["Less than 18 years old","18-24 years old","25-34 years old","35-49 years old","50-64 years old","More than 64 years old"]},{id:"ethnicity",question:"What is your ethnicity?",answers:["Black (non-Hispanic)","White (non-Hispanic)","Asian","Hispanic","Other"]},{id:"education",question:"What is your highest degree or level of school you have completed?",answers:["Less than a high school diploma","High school or equivalent","Some college, no degree","Associate degree","Bachelor's degree","Master's degree","Professional degree","Doctorate"]},{id:"income",question:"What is your income level?",answers:["Less than $20,000","$20,000-$39,999","$40,000-$59,999","$60,000-$79,999","$80,000-$99,999","$100,000-$150,000","More than $150,000"]},{id:"usPolitics",question:"How would you declare yourself politically?",answers:["Conservative","Moderate","Liberal"]},{id:"socialPos",question:"How would you declare yourself socially?",answers:["Conservative","Moderate","Liberal"]}])},{id:"state",questions:"Which UK region do you currently reside in?",answers:[{label:"Scotland",value:"Scotland"},{label:"Northern Ireland",value:"Northern Ireland"},{label:"Wales",value:"Wales"},{label:"North East",value:"North East"},{label:"North West",value:"North West"},{label:"Yorkshire and the Humber",value:"Yorkshire and the Humber"},{label:"West Midlands",value:"West Midlands"},{label:"East Midlands",value:"East Midlands"},{label:"South East",value:"South East"},{label:"South West",value:"South West"},{label:"East of England",value:"East of England"},{label:"Greater London",value:"Greater London"}]}],D=(a(15),a(9)),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"Record of Consent"),n.a.createElement("div",{className:"Text"},"In this survey, we will present you with some situations involving COVID-19 and its vaccine that is currently under development and testing.",n.a.createElement("p",{style:{fontWeight:"bold"}},"We are not looking for the correct answers, but your opinion on the matter."),n.a.createElement("p",{className:"Question Spotlight"},"Please, read all the information provided in this survey carefully."),n.a.createElement("div",null,n.a.createElement("hr",null),n.a.createElement("div",{className:"Subtitle"},"Record of Consent"),"The purpose of this research is to understand public willingness to take a vaccine for COVID-19 under various circumstances. This experiment is composed of an online survey that takes less than 10 minutes to complete. Your responses will be used for research purposes only. Your responses may be shared with other researchers; all information, however, will be anonymized and allow no inference on any particular individual. Results will be published only as aggregate statistics, allowing no inference on any particular individual. Your participation is voluntary and you may withdraw from the study at any time without any penalty. To withdraw, simply close your browser.",n.a.createElement("div",{className:"Spotlight RedSpotlight Subtitle"}," Participants who complete the survey will receive financial compensation as an incentive. ",n.a.createElement("br",null),n.a.createElement("span",{style:this.props.Preview?{display:"none"}:{}},"If you answer the questions in this survey too quickly (e.g., less than a second per question) without reading, your response will be discarded. Please read the survey carefully.")),n.a.createElement("br",null),"Please contact the research administrator (ibs.dscig@gmail.com) if you have any questions. Thank you!",n.a.createElement("br",null),n.a.createElement("span",{className:"Question"},"Clicking ",n.a.createElement("span",{className:"Spotlight"},"next")," below indicates that you have understood the information and consent to your participation.")),n.a.createElement("hr",null)),n.a.createElement("div",null,n.a.createElement(D.a,{variant:"secondary",onClick:this.props.skipStage},"Next")))}}]),a}(n.a.Component),A=(a(35),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;Object(c.a)(this,s),n=t.call(this,e);var i=a(11);return n.state={contactQuestions:i(b),concernQuestions:i(E)},n}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.state.contactQuestions.map((function(t,a){return n.a.createElement("div",{key:a,className:"Question"},n.a.createElement("span",null,t.question),n.a.createElement("div",{key:a},t.answers.map((function(a,s){return n.a.createElement("div",{className:"Answer",key:s},n.a.createElement("input",{key:s,type:"radio",name:t.id,value:a,onClick:function(){return e.props.saveResponses(t.id,a)}}),n.a.createElement("label",{style:{display:"block"}},a))}))))})),n.a.createElement("hr",null),this.state.concernQuestions.map((function(t,a){return n.a.createElement("div",{key:a,className:"Question"},n.a.createElement("span",null,t.question),n.a.createElement("div",{key:a},n.a.createElement("input",{type:"range",min:"0",max:"100",style:e.props.responsesIncludeKey(t.id)?{}:{background:"#000000"},step:"1",onChange:function(a){e.props.saveResponses(t.id,a.target.value)},onClick:function(a){e.props.saveResponses(t.id,a.target.value)}}),n.a.createElement("div",{className:"SliderTicks"},n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"left",width:"50%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"right",width:"50%"}},"|")),n.a.createElement("div",{className:"SliderMarker"},n.a.createElement("span",{style:{float:"left"}},t.answers[0]),n.a.createElement("span",{style:{float:"right"}},t.answers[1]))))})),n.a.createElement("hr",null))}}]),s}(n.a.Component)),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={initialInfo:!0,responses:{},init:new Date},s.changeInternalState=s.changeInternalState.bind(Object(h.a)(s)),s.saveResponses=s.saveResponses.bind(Object(h.a)(s)),s.checkTime=s.checkTime.bind(Object(h.a)(s)),s.responsesIncludeKey=s.responsesIncludeKey.bind(Object(h.a)(s)),s}return Object(u.a)(a,[{key:"checkTime",value:function(){var e=(new Date-this.state.init)/1e3;console.log(e),this.state.initialInfo?e<5?alert("Please take some time to carefully read the provided paragraph."):(this.changeInternalState(),this.props.saveTime("introReadFinish")):e<15?alert("Please take some time to carefully answer the questions."):Object.keys(this.state.responses).length<7?alert("You must answer all questions."):(this.props.saveDictToState(this.state.responses),this.props.skipStage())}},{key:"responsesIncludeKey",value:function(e){return e in this.state.responses}},{key:"changeInternalState",value:function(){this.setState({initialInfo:!1,init:new Date})}},{key:"saveResponses",value:function(e,t){var a=this.state.responses;a[e]=t,this.setState({responses:a})}},{key:"render",value:function(){var e,t=this.state.initialInfo?n.a.createElement("div",null):n.a.createElement(A,{saveResponses:this.saveResponses,responsesIncludeKey:this.responsesIncludeKey});return e=n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"Introduction"),n.a.createElement("div",{className:"BigText"},"COVID-19 is a respiratory illness caused by a novel coronavirus, first found in China in November 2019. After spreading across Asia, the disease has reached Europe and America, leading the World Health Organization (WHO) to declare it a pandemic. COVID-19 has so far infected over 3,400,000 people and has killed more than 240,000 patients around the world."),n.a.createElement("hr",null)),n.a.createElement("div",null,n.a.createElement("div",null,e),n.a.createElement("div",null,t),n.a.createElement(D.a,{variant:"secondary",onClick:this.checkTime},"Next"))}}]),a}(n.a.Component),V=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;Object(c.a)(this,s),n=t.call(this,e);var i=a(11),r=i(k);return n.state={questions:i(r[0]).concat(r[1]),questionCompletion:S[[n.props.beforeAfter]],postQuestionID:"future"===n.props.beforeAfter?"Future":""},n}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.state.questions.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement("span",{className:"Question"},t.question+e.state.questionCompletion),n.a.createElement("div",{key:a},n.a.createElement("input",{key:t.id+a,style:e.props.responsesIncludeKey(t.id+e.state.postQuestionID)?{}:{background:"#000000"},type:"range",min:"0",max:"100",step:"1",onChange:function(a){e.props.saveResponses(t.id+e.state.postQuestionID,a.target.value)},onClick:function(a){e.props.saveResponses(t.id+e.state.postQuestionID,a.target.value)}}),n.a.createElement("div",{className:"SliderTicks"},n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"left",width:"33.3%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{width:"33.3%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"right",width:"33.4%"}},"|")),n.a.createElement("div",{className:"SliderMarker"},n.a.createElement("span",{style:{float:"left"}},t.answers[0]),n.a.createElement("span",{style:{float:"center",textAlign:"center"}},t.answers[1]),n.a.createElement("span",{style:{float:"right"}},t.answers[2]))))})))}}]),s}(n.a.Component),H=a(41),M=a.n(H),L=a(42),K=a.n(L),W=a(43),Q=a.n(W),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={initialInfo:!0,responses:{},init:new Date,showNews:!1,image:"AI"===s.props.agent?M.a:"human"===s.props.agent?K.a:Q.a},s.changeInternalState=s.changeInternalState.bind(Object(h.a)(s)),s.saveResponses=s.saveResponses.bind(Object(h.a)(s)),s.checkTime=s.checkTime.bind(Object(h.a)(s)),s.responsesIncludeKey=s.responsesIncludeKey.bind(Object(h.a)(s)),s}return Object(u.a)(a,[{key:"responsesIncludeKey",value:function(e){return e in this.state.responses}},{key:"checkTime",value:function(){var e=(new Date-this.state.init)/1e3;console.log(e),this.state.initialInfo?e<20?alert("Please take some time to carefully read the provided excerpt."):(this.props.saveTime("presentReadingFinish"),this.changeInternalState()):e<15?alert("Please take some time to carefully answer the questions."):Object.keys(this.state.responses).length<4?alert("You must answer all questions."):(this.props.saveDictToState(this.state.responses),this.props.skipStage())}},{key:"changeInternalState",value:function(){this.setState({initialInfo:!1,init:new Date})}},{key:"saveResponses",value:function(e,t){var a=this.state.responses;a[e]=t,this.setState({responses:a})}},{key:"render",value:function(){var e,t=this;return e=this.state.initialInfo?n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"Please read the following news excerpt."),n.a.createElement("div",null,n.a.createElement("img",{src:this.state.image,alt:"News Excerpt"})),n.a.createElement("hr",null)):n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"Subtitle"},"Taking in consideration the news excerpt you have just read, please answer the following questions."),n.a.createElement("div",{className:"Text",onMouseEnter:function(){return t.setState({showNews:!0})},onMouseLeave:function(){return t.setState({showNews:!1})}},"If needed, please hover to see the news.",n.a.createElement("div",null,this.state.showNews?n.a.createElement("img",{src:this.state.image,alt:"News Excerpt"}):null))),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement(V,{saveResponses:this.saveResponses,beforeAfter:this.props.beforeAfter,responsesIncludeKey:this.responsesIncludeKey}))),n.a.createElement("div",null,n.a.createElement("div",null,e),n.a.createElement(D.a,{variant:"secondary",onClick:this.checkTime},"Next"))}}]),a}(n.a.Component),F=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;Object(c.a)(this,s),n=t.call(this,e);var i=a(11);return n.state={answers:i(I)},n}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"Please pick the best answer to the question below:"),n.a.createElement("hr",null),n.a.createElement("div",{className:"Subtitle Question"},"Who was able to find a compound for a COVID-19 vaccine according to the article you just read?"),n.a.createElement("div",{style:{margin:"15px"}},this.state.answers.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement("input",{type:"radio",name:"attCheck",value:t.Id,onClick:function(){return e.props.saveDictToState({attCheck:t.id})}}),n.a.createElement("label",{style:{marginLeft:"5px"}},t.text))}))),n.a.createElement("hr",null),n.a.createElement(D.a,{variant:"secondary",onClick:this.props.responsesIncludeKey("attCheck")?this.props.skipStage:function(){return alert("Please answer the question.")}},"Next"))}}]),s}(n.a.Component),Y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={init:new Date,entities:O[s.props.agent],currEntity:0,posNeg:s.props.consequences,disease:s.props.disease,responses:{},entityQuestions:v()(T)},s.checkTime=s.checkTime.bind(Object(h.a)(s)),s.saveResponses=s.saveResponses.bind(Object(h.a)(s)),s}return Object(u.a)(a,[{key:"saveResponses",value:function(e,t){var a=this.state.responses;a[e]=t,this.setState({responses:a})}},{key:"checkTime",value:function(){var e="neg"===this.state.posNeg?3:2,t="neg"===this.state.posNeg?10:7;if((new Date-this.state.init)/1e3<t*(this.state.currEntity+1))alert("Please take some time to carefully answer the questions.");else if(Object.keys(this.state.responses).length<e*(this.state.currEntity+1))alert("You must answer all questions.");else if(this.state.currEntity+1===this.state.entities.length){var a=this.state.responses;for(var s in a)this.props.saveResponses(s,a[s]);this.props.checkTimeFuture()}else this.setState({currEntity:this.state.currEntity+1})}},{key:"render",value:function(){var e=this,t=this.state.entities[this.state.currEntity];return console.log(this.state.posNeg),n.a.createElement("div",null,n.a.createElement("div",null,this.state.entityQuestions.map((function(a,s){return"Punish"!==a.id||"pos"!==e.state.posNeg&&"con"!==e.state.posNeg?n.a.createElement("div",{key:s,className:"Question"},n.a.createElement("span",{className:"Question",style:{margin:"0px"}},a.initial[[e.state.posNeg]]," "),n.a.createElement("span",{className:"Spotlight Question",style:{margin:"0px"}}," ",t.text," "),n.a.createElement("span",{className:"Question",style:{margin:"0px"}}," ",a.conclusion[[e.state.posNeg]]),n.a.createElement("div",{key:s},n.a.createElement("input",{key:a.id+s,value:null==e.state.responses[t.id+a.id]?50:e.state.responses[t.id+a.id],style:t.id+a.id in e.state.responses?{}:{background:"#000000"},type:"range",min:"0",max:"100",step:"1",onChange:function(s){e.saveResponses(t.id+a.id,s.target.value)},onClick:function(s){e.saveResponses(t.id+a.id,s.target.value)}}),n.a.createElement("div",{className:"SliderTicks"},n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"left"}},"|"),n.a.createElement("span",{className:"SliderLabel"},"|"),n.a.createElement("span",{className:"SliderLabel"},"|"),n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"right"}},"|")),n.a.createElement("div",{className:"SliderMarker"},n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"left"}},a.answers[0]),n.a.createElement("span",{className:"SliderLabel"},a.answers[1]),n.a.createElement("span",{className:"SliderLabel"},a.answers[2]),n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"right"}},a.answers[3])))):n.a.createElement("div",null)}))),n.a.createElement(D.a,{variant:"secondary",onClick:this.checkTime},"Next")," ",n.a.createElement("div",null))}}]),a}(n.a.Component),B=a(44),$=a.n(B),U=a(45),z=a.n(U),_=a(46),G=a.n(_),J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;Object(c.a)(this,a),s=t.call(this,e);var n=y(N);return s.state={init:new Date,stages:["intro","resp","will"],currStageId:0,responses:{},hideButton:!1,consequences:n,image:"pos"===n?$.a:"neg"===n?z.a:G.a},s.responsesIncludeKey=s.responsesIncludeKey.bind(Object(h.a)(s)),s.checkTime=s.checkTime.bind(Object(h.a)(s)),s.saveResponses=s.saveResponses.bind(Object(h.a)(s)),s.showMainButton=s.showMainButton.bind(Object(h.a)(s)),s}return Object(u.a)(a,[{key:"showMainButton",value:function(){this.setState({hideButton:!1})}},{key:"responsesIncludeKey",value:function(e){return e in this.state.responses}},{key:"saveResponses",value:function(e,t){var a=this.state.responses;a[e]=t,this.setState({responses:a})}},{key:"checkTime",value:function(){var e=(new Date-this.state.init)/1e3;console.log(e);var t=this.state.stages[this.state.currStageId];if("intro"===t)e<15?alert("Please take some time to carefully read the provided excerpt."):(this.setState({hideButton:!0}),this.props.saveTime("futureReadingFinish"),this.setState({currStageId:this.state.currStageId+1}));else if("will"===t)if(e<15)alert("Please take some time to carefully answer the questions.");else{var a="personalWillFuture"in this.state.responses&&"childWillFuture"in this.state.responses&&"elderWillFuture"in this.state.responses;(a=a&&"worrinessFuture"in this.state.responses)?(this.props.saveDictToState(this.state.responses),this.props.skipAppStage()):alert("You must answer all questions.")}else"resp"===t?(this.saveResponses("consequence",this.state.consequences),this.setState({currStageId:this.state.currStageId+1}),this.props.saveTime("respQFinish"),this.setState({hideButton:!1})):alert("Not to be implemented")}},{key:"render",value:function(){var e,t=this,a=this.state.stages[this.state.currStageId];return e="intro"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"A vaccine for COVID-19 is expected to be widely available to the public in 12 to 18 months from now."),n.a.createElement("div",{className:"Subtitle"},"The following news excerpt is a future scenario where a vaccine has been finally approved by the U.S. Food and Drug Administration (FDA)."),n.a.createElement("div",null,n.a.createElement("img",{src:this.state.image,alt:"News Excerpt"})),n.a.createElement("hr",null)):"will"===a?n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"Subtitle"},"Taking in consideration the future news excerpt you have read, please answer the following questions."),n.a.createElement("div",{className:"Text",onMouseEnter:function(){return t.setState({showNews:!0})},onMouseLeave:function(){return t.setState({showNews:!1})}},"If needed, please hover to see the news.",n.a.createElement("div",null,this.state.showNews?n.a.createElement("img",{src:this.state.image,alt:"News Excerpt"}):null))),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement(V,{saveResponses:this.saveResponses,beforeAfter:"future",responsesIncludeKey:this.responsesIncludeKey}))):"resp"===a?n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"Subtitle"},"neg"!==this.state.consequences?n.a.createElement("span",null,"We are interested in how you would assign credit and awareness to the entities involved in the development of the COVID-19 vaccine."):n.a.createElement("span",null,"We are interested in how you would assign blame, awareness, and punishment to the entities involved in the development of the COVID-19 vaccine.")),n.a.createElement("div",{className:"Text",onMouseEnter:function(){return t.setState({showNews:!0})},onMouseLeave:function(){return t.setState({showNews:!1})}},"If needed, please hover to see the news.",n.a.createElement("div",null,this.state.showNews?n.a.createElement("img",{src:this.state.image,alt:"News Excerpt"}):null))),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement(Y,{saveResponses:this.saveResponses,responsesIncludeKey:this.responsesIncludeKey,checkTimeFuture:this.checkTime,agent:this.props.agent,disease:this.props.disease,consequences:this.state.consequences}))):"Not implemented",n.a.createElement("div",null,n.a.createElement("div",null,e),this.state.hideButton?n.a.createElement("div",null):n.a.createElement(D.a,{variant:"secondary",onClick:this.checkTime},"Next"))}}]),a}(n.a.Component),Z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={init:new Date,questions:v()(C),responses:{}},s.saveResponses=s.saveResponses.bind(Object(h.a)(s)),s.checkTime=s.checkTime.bind(Object(h.a)(s)),s}return Object(u.a)(a,[{key:"saveResponses",value:function(e,t){var a=this.state.responses;a[e]=t,this.setState({responses:a})}},{key:"checkTime",value:function(){var e=(new Date-this.state.init)/1e3;console.log(e),e<20?alert("Please take some time to answer the questions."):Object.keys(this.state.responses).length<10?alert("You must answer all questions."):(this.props.saveDictToState(this.state.responses),this.props.skipStage())}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"Please let us know a little bit about your utilization of the health care system."),n.a.createElement("div",{className:"Subtitle"},"To what extent to you agree with the following statements?"),n.a.createElement("hr",null),n.a.createElement("div",null,this.state.questions.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement("span",{className:"Question"},t.text),n.a.createElement("div",{key:a},n.a.createElement("input",{key:t.id+a,style:t.id in e.state.responses?{}:{background:"#000000"},type:"range",min:"0",max:"100",step:"1",onChange:function(a){e.saveResponses(t.id,a.target.value)},onClick:function(a){e.saveResponses(t.id,a.target.value)}}),n.a.createElement("div",{className:"SliderTicks"},n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"left",width:"33.3%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{width:"33.3%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"right",width:"33.4%"}},"|")),n.a.createElement("div",{className:"SliderMarker"},n.a.createElement("span",{style:{float:"left"}},x[0]),n.a.createElement("span",{style:{float:"center",textAlign:"center"}},x[1]),n.a.createElement("span",{style:{float:"right"}},x[2]))))}))),n.a.createElement("hr",null),n.a.createElement(D.a,{variant:"secondary",onClick:this.checkTime},"Next"))}}]),a}(n.a.Component),X=a(27),ee=a(50),te=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={init:new Date,responses:{},demographicQuestions:v()(q)},s.saveResponses=s.saveResponses.bind(Object(h.a)(s)),s.checkTime=s.checkTime.bind(Object(h.a)(s)),s}return Object(u.a)(a,[{key:"saveResponses",value:function(e,t){var a=this.state.responses;a[e]=t,this.setState({responses:a})}},{key:"checkTime",value:function(){var e=(new Date-this.state.init)/1e3;console.log(e),e<30?alert("Please take some time to answer the questions."):Object.keys(this.state.responses).length<25?alert("You must answer all questions."):(this.props.saveDictToState(this.state.responses),this.props.skipStage())}},{key:"render",value:function(){var e,t,a=this;e=[n.a.createElement("div",{key:"div0"},n.a.createElement("div",{className:"Title"},"Please let us know a little bit more about yourself."),n.a.createElement("div",{className:"Subtitle"},"All the information obtained below will be used solely for research purposes."))];for(var s=0;s<this.state.demographicQuestions.length;s++)"govt"===(t=this.state.demographicQuestions[s]).id?e=[].concat(Object(X.a)(e),[n.a.createElement("hr",{key:"hr"+s}),n.a.createElement("div",{key:"key"+s},t.questions.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("span",{className:"Question"},e.question),n.a.createElement("div",{key:t},n.a.createElement("input",{key:e.id+t,style:e.id in a.state.responses?{}:{background:"#000000"},type:"range",min:"0",max:"100",step:"1",onChange:function(t){a.saveResponses(e.id,t.target.value)},onClick:function(t){a.saveResponses(e.id,t.target.value)}}),n.a.createElement("div",{className:"SliderTicks"},n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"left",width:"33.3%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{width:"33.3%"}},"|"),n.a.createElement("span",{className:"SliderLabel",style:{textAlign:"right",width:"33.4%"}},"|")),n.a.createElement("div",{className:"SliderMarker"},n.a.createElement("span",{style:{float:"left"}},e.answers[0]),n.a.createElement("span",{style:{float:"center",textAlign:"center"}},e.answers[1]),n.a.createElement("span",{style:{float:"right"}},e.answers[2]))))})))]):"newsSNS"===t.id||"personalCovid"===t.id||"personal"===t.id?e=[].concat(Object(X.a)(e),[n.a.createElement("hr",{key:"hr"+s}),n.a.createElement("div",{key:"key"+s},t.questions.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("span",{className:"Question"},e.question),n.a.createElement("div",{key:t},e.answers.map((function(t,s){return n.a.createElement("div",{className:"Answer",key:s},n.a.createElement("input",{key:s,type:"radio",name:e.id,value:t,onClick:function(){return a.saveResponses(e.id,t)}}),n.a.createElement("label",{style:{display:"block"}},t))}))))})))]):"state"===t.id&&(e=[].concat(Object(X.a)(e),[n.a.createElement("hr",{key:"hr"+s}),n.a.createElement("div",{key:"key"+s},n.a.createElement("div",{className:"Question"},t.questions),n.a.createElement(ee.a,{options:t.answers,onChange:function(e){return a.saveResponses("state",e.value)}}))]));return n.a.createElement("div",null,n.a.createElement("div",null,e),n.a.createElement("hr",null),n.a.createElement(D.a,{variant:"secondary",onClick:this.checkTime},"Next"))}}]),a}(n.a.Component),ae=a(32),se=a.n(ae),ne={apiKey:"AIzaSyAiKXZv9QrpCsUzWDcUGE8normuwZ02FyQ",authDomain:"ai-vaccine.firebaseapp.com",databaseURL:"https://ai-vaccine.firebaseio.com",projectId:"ai-vaccine",storageBucket:"ai-vaccine.appspot.com",messagingSenderId:"124019639283",appId:"1:124019639283:web:e8a53663a178dd9cffc886"},ie=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;Object(c.a)(this,s),n=t.call(this,e);var i=a(69).parse(n.props.location.search);return n.state={time:{init:new Date},prolificId:i.RESPONDENT_ID,disease:y(f),agent:y(g),beforeAfter:y(w),stages:["consent","intro","present","att","future","mmms","demographics","end"],currStageId:0,responses:{}},n.saveDictToState=n.saveDictToState.bind(Object(h.a)(n)),n.saveTime=n.saveTime.bind(Object(h.a)(n)),n.skipStage=n.skipStage.bind(Object(h.a)(n)),n.redirectToSurveyCompletion=n.redirectToSurveyCompletion.bind(Object(h.a)(n)),n.saveToFirebase=n.saveToFirebase.bind(Object(h.a)(n)),n.responsesIncludeKey=n.responsesIncludeKey.bind(Object(h.a)(n)),se.a.initializeApp(ne),n}return Object(u.a)(s,[{key:"responsesIncludeKey",value:function(e){return e in this.state.responses}},{key:"saveDictToState",value:function(e){var t=this.state.responses;for(var a in e)t[a]=e[a];this.setState({responses:t})}},{key:"saveTime",value:function(e){var t=new Date-this.state.time.init;this.setState({time:Object(l.a)({},this.state.time,Object(o.a)({},e,t))})}},{key:"skipStage",value:function(){this.saveTime(this.state.stages[this.state.currStageId]+"End"),this.setState({currStageId:this.state.currStageId+1})}},{key:"saveToFirebase",value:function(){var e=this,t=this.state.responses;t.disease=this.state.disease,t.agent=this.state.agent,t.beforeAfter=this.state.beforeAfter,t.prolificId=this.state.prolificId;var a=this.state.time;for(var s in a)t[s]=a[s];se.a.database().ref("/pollfish/"+this.state.prolificId).set(t).catch((function(e){return console.log(e)})).then((function(){return e.redirectToSurveyCompletion()}))}},{key:"redirectToSurveyCompletion",value:function(){window.open("https://wss.pollfish.com/api/thirdparty/v1/complete","_self")}},{key:"render",value:function(){var e,t=this.state.stages[this.state.currStageId];return e="consent"===t?n.a.createElement(j,{skipStage:this.skipStage}):"intro"===t?n.a.createElement(R,{skipStage:this.skipStage,saveDictToState:this.saveDictToState,saveTime:this.saveTime}):"present"===t?n.a.createElement(P,{skipStage:this.skipStage,saveDictToState:this.saveDictToState,beforeAfter:this.state.beforeAfter,agent:this.state.agent,disease:this.state.disease,saveTime:this.saveTime}):"att"===t?n.a.createElement(F,{skipStage:this.skipStage,saveDictToState:this.saveDictToState,responsesIncludeKey:this.responsesIncludeKey}):"future"===t?n.a.createElement(J,{skipAppStage:this.skipStage,saveDictToState:this.saveDictToState,agent:this.state.agent,disease:this.state.disease,saveTime:this.saveTime}):"mmms"===t?n.a.createElement(Z,{skipStage:this.skipStage,saveDictToState:this.saveDictToState}):"demographics"===t?n.a.createElement(te,{skipStage:this.skipStage,saveDictToState:this.saveDictToState}):"end"===t?n.a.createElement("div",null,n.a.createElement("div",{className:"Title"},"Thank you for participating in our survey!"),n.a.createElement("div",{className:"Subtitle"},"If you have any questions, feel free to contact us at ibs.dscig@gmail.com.",n.a.createElement("hr",null)),n.a.createElement("div",{className:"QuestionMargin"},n.a.createElement("span",{className:"Title Spotlight RedSpotlight"},"Click on the button below to complete the survey."),n.a.createElement("div",{className:"QuestionMargin"},n.a.createElement(D.a,{variant:"secondary",onClick:this.saveToFirebase},"Complete Survey")))):n.a.createElement("div",{className:"Title"},"Please contact the research administrator (ibs.dscig@gmail.com)"),n.a.createElement("div",{className:"App"},e)}}]),s}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);var re=a(47),oe=a(19),le=n.a.createElement(re.a,null,n.a.createElement("div",null,n.a.createElement(oe.a,{path:"/",component:ie})));r.a.render(le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d2d33c9b.chunk.js.map