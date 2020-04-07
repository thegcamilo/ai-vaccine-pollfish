import shuffle from 'shuffle-array';

export function getRandomItem(items) {return items[Math.floor(Math.random()*items.length)];}

export const treatDiseases = ["COVID-19"];
export const treatAgents = ["human", "human-AI", "AI"];
export const treatTimes = ["after"];

export const introQuestions = {
    contact: [
        {id: "cityLevel", question: "Has there been a case of COVID-19 in your city?", answers: ["Yes", "No", "I don't know"]},
        {id: "personalLevel", question: "Have you or anyone you know been infected by the new coronavirus?", answers: ["Yes", "No", "I don't know"]},
        {id: "symptomLevel", question: "Have you or anyone you know showed any of the following symptoms? Fever, cough, sore throat, shortness of breath." , answers: ["Yes", "No", "I am not sure"]}
    ],
    concern: [
        {id: "closeLikelihood", question: "How likely do you think it is that COVID-19 will affect your family, friends, and neighbors?", answers: ["Not likely at all", "Very likely"]},
        {id: "personalLikelihood", question: "How likely are you to become ill with COVID-19?", answers: ["Not likely at all", "Very likely"]},
        {id: "severeness", question: "If COVID-19 was or is in your community, how severe do you think the consequences might be to you and your family?", answers: ["Not severe at all", "Very severe"]},
        {id: "closeDeath", question: "If a member of your immediate household became ill with COVID-19, how likely do you believe it is that the person might die from it?", answers: ["Not likely at all", "Very likely"]},
        {id: "concern", question: "How concerned are you about getting COVID-19?", answers: ["Not concerned at all", "Very concerned"]}
    ]
}

// export const willQuestions = [
//     [{id: "personalWill", question: "How willing would you be to get a shot of this new vaccine ", answers: ["Not willing at all", "I am not sure", "Very willing"]},
//      {id: "childWill", question: "How willing would you be to take a child to get a shot of this new vaccine ", answers: ["Not willing at all", "I am not sure", "Very willing"]},
//      {id: "elderWill", question: "How willing would you be to take an elder (over 65 yrs. old) to get a shot of this new vaccine ", answers: ["Not willing at all", "I am not sure", "Very willing"]}],
//     [{id: "worriness", question: "How worried would you be about getting a shot of this new vaccine ", answers: ["Not worried at all", "I am not sure", "Very worried"]},
//      {id: "riskness", question: "How risky do you think it would be for someone to get a shot of this new vaccine ", answers: ["Not risky at all", "I am not sure", "Very risky"]}]
// ]

// export const beforeAfter = {
//     before: "before the final approval by the U.S. Food and Drug Administration (FDA)?",
//     after: "after the final approval by the U.S. Food and Drug Administration (FDA)?",
//     future: "approved by the U.S. Food and Drug Administration (FDA)?"
// }

export const willQuestions = [
    [{id: "personalWill", question: "How willing are you to get this new vaccine", answers: ["Not willing at all", "I am not sure", "Very willing"]},
     {id: "childWill", question: "How willing are you to get this new vaccine for your child", answers: ["Not willing at all", "I am not sure", "Very willing"]},
     {id: "elderWill", question: "How willing are you to get this new vaccine for your elders (over 65 yrs. old)", answers: ["Not willing at all", "I am not sure", "Very willing"]}],
    [{id: "worriness", question: "How worried would you be about getting this new vaccine", answers: ["Not worried at all", "I am not sure", "Very worried"]},
     {id: "riskness", question: "How concerned are you that this vaccine shot might not be safe", answers: ["Not risky at all", "I am not sure", "Very risky"]}]
]

export const beforeAfter = {
    before: "?",
    after: "?",
    future: "?"
}


export const attentionCheck = {
    answers: [
        {id: "public", text: "The general public"},
        {id: "public", text: "A team of researchers"},
        {id: "public", text: "An artificial intelligence program"},
        {id: "public", text: "A team of researchers with the help of an intelligence program"}]
};

export const consequences = [
    "neg", "pos", "con"
]

export const agentText = {
    "human":  [
        {id: "researchers", text: "the team of researchers"},
        //{id: "AI", text: "is SAM, the artificial intelligence program,"},
        //{id: "company", text: "SAM's (the AI programs's) developing company"},
        {id: "government", text: "the goverment"},
        {id: "worker", text: "the health care worker who administers the vaccines"},
        //{id: "programmer", text: "is SAM's (the AI program's) main programmer"}
    ],
    "human-AI": [
        {id: "researchers", text: "the team of researchers"},
        {id: "AI", text: "SAM, the AI program,"},
        {id: "company", text: "SAM's (the AI programs's) developing company"},
        {id: "government", text: "the goverment"},
        {id: "worker", text: "the health care worker who administers the vaccines"},
        {id: "programmer", text: "SAM's (the AI program's) main programmer"}
    ], 
    "AI": [
        {id: "researchers", text: "the team of researchers, who solely synthesized the vaccine,"},
        {id: "AI", text: "SAM, the AI program,"},
        {id: "company", text: "SAM's (the AI programs's) developing company"},
        {id: "government", text: "the goverment"},
        {id: "worker", text: "the health care worker who administers the vaccines"},
        {id: "programmer", text: "SAM's (the AI program's) main programmer"}
    ]
}


export const agentQuestions = [
    // {id: "Resp",
    //  initial: {pos: "How responsible is ", neg: "How responsible is ", con: "How responsible is "},
    //  conclusion: {pos: " for the effectiveness of the COVID-19 vaccine?",
    //               neg: " for the side effects of the COVID-19 vaccine?",
    //               con: " for the COVID-19 vaccine?"},
    //  answers: ["Not responsible at all", "Somewhat responsible", "Responsible", "Very responsible"]
    // },
    {id: "Blame",
     initial: {pos: "How much credit does ", neg: "How much blame does ", con: "How much credit does "},
     conclusion: {pos: " deserve for the effectiveness of the COVID-19 vaccine?", 
                  neg: " deserve for the side effects of the COVID-19 vaccine?",
                  con: " deserve for the development of the COVID-19 vaccine?"},
     answers: ["None at all", "A little", "Some", "A lot"]
    },
    {id: "Aware",
     initial: {pos: "How much do you think ", neg: "How much do you think ", con: "How much do you think "},
     conclusion: {pos: " should have been aware of the effectiveness of the COVID-19 vaccine?",
                  neg: " should have been aware of the side effects of the COVID-19 vaccine?",
                  con: " should have been aware of the development of the COVID-19 vaccine?"},
     answers: ["Not aware at all", "Not really aware", "Somewhat aware", "Very aware"]
    },
    {id: "Punish",
    initial: {pos: "How much should ", neg: "How much should ", con: "How much should "},
    conclusion: {pos: " be punished for the side effects of the COVID-19 vaccine?", 
                 neg: " be punished for the side effects of the COVID-19 vaccine?",
                 con: " be punished for the side effects of the COVID-19 vaccine?"},
    answers: ["Not at all", "A little", "Some", "A lot"]
   },

]

export const MMMS = {
    answers: ["Strongly disagree", "Neither agree nor disagree", "Strongly agree"],
    questions: [
        {id: "mmms0", text: "It is important to treat disease even when it does not make a difference in survival"},
        {id: "mmms1", text: "It is important to treat a disease even when it does not make a difference in quality of life"},
        {id: "mmms2", text: "Doing everything to fight illness is always the right choice"},
        {id: "mmms3", text: "When it comes to health care, the only responsible thing to do is to actively seek medical care"},
        {id: "mmms4", text: "If I have a health issue, my preference is to wait and see if the problem gets better on its own before going to the doctor"},
        {id: "mmms5", text: "If I feel unhealthy, the first thing that I do is to go to the doctor and get a prescription"},
        {id: "mmms6", text: "I often suggest that friends and family see their doctor"},
        {id: "mmms7", text: "When it comes to health care, watching and waiting is never an acceptable option"},
        {id: "mmms8", text: "If I have a medical problem, my preference is to go straight to a doctor and ask his or her opinion"},
        {id: "mmms9", text: "When it comes to medical treatment, more is usually better"}

    ]

}

export const demographics = [
    {id: "govt", questions: shuffle([
        {id: "govtOpen", question: "How open do you think the U.S. government is with information regarding COVID-19?", answers: ["Not open at all", " I am not sure", "Very open"]},
        {id: "govtHonest", question: "How honest do you think the U.S. government is with information regarding COVID-19?", answers: ["Not honest at all", " I am not sure", "Very honest"]},
        {id: "govtCompetent", question: "How competent do you believe the U.S. government is in handling COVID-19?", answers: ["Not competent at all", " I am not sure", "Very competent"]},
        {id: "govtCommitment", question: "How committed do you believe the U.S. government is to protect you from COVID-19?", answers: ["Not committed at all", " I am not sure", "Very committed"]},
        {id: "govtCare", question: "How much caring and concern do you think the U.S. government has shown about people who might be affected by this COVID-19 outbreak?", answers: ["Not much at all", " I am not sure", "Very much"]},
        {id: "govtBelief", question: "How much do you believe that the U.S. government’s actions in response to COVID-19 are in your personal best interest?", answers: ["I don't believe", " I am not sure", "I do believe"]},
        {id: "govtProtect", question: "How much do you believe the U.S. government will protect you from COVID-19?", answers: ["Not much at all", " I am not sure", "Very much"]}
    ])},
    {id: "newsSNS", questions: shuffle([
        {id: "socialMediaNews", question: "On average, how many news links regarding COVID-19 have you accessed through social media in the last week?", answers: ["0 links", "1-5 links", "5-10 links", "Over 10 links"]},
        {id: "news", question: "How often do you proactively check the news regarding COVID-19?", answers: ["Never", "Once a few days", "Once a day", "More than once a day"]},
        {id: "socialMediaLastWeek", question: "How often have you accessed any social media platform in the last week?", answers: ["Never", "Once a few days", "Once every day", "Many times a day"]},
        {id: "socialMediaDaily", question: "How much time do you usually spend daily on any social media platform?", answers: ["None", "Less than 30 minutes", "Around 1 hour", "2 hours or more"]}
    ])},
    {id: "personalCovid", questions: shuffle([
        {id: "insurance", question: "Do you have health insurance at the moment?", answers: ["Yes", "No"]},
        {id: "eldersLive", question: "Do you live with any elders (over 65 years old)?", answers: ["Yes", "No"]},
        {id: "childLive", question: "Do you live with any children?", answers: ["Yes", "No"]},
        {id: "vaccinationFlu", question: "How often in the past have you gotten a flu vaccination?", answers: ["Never", "Once or Twice", "Most years", "Annually"]},
        {id: "vaccination", question: "Have you gotten shots of the CDC recommended and required vaccines in the past?", answers: ["Yes", "Only the required vaccines", "Some", "No"]}
    ])},
    {id: "personal", questions: shuffle([
        {id: "sex", question: "What is your sex?", answers: ["Female", "Male", "Other"]},
        {id: "age", question: "How old are you?", answers: ["Less than 18 years old", "18-24 years old", "25-34 years old", "35-49 years old", "50-64 years old", "More than 64 years old"]},
        {id: "ethnicity", question: "What is your ethnicity?", answers: ["Black (non-Hispanic)", "White (non-Hispanic)", "Asian", "Hispanic", "Other"]},
        {id: "education", question: "What is your highest degree or level of school you have completed?", answers: ["Less than a high school diploma", "High school or equivalent", "Some college, no degree", "Associate degree", "Bachelor's degree", "Master's degree", "Professional degree", "Doctorate"]},
        {id: "income", question: "What is your income level?", answers: ["Less than $20,000", "$20,000-$39,999", "$40,000-$59,999", "$60,000-$79,999", "$80,000-$99,999", "$100,000-$150,000", "More than $150,000"]},
        {id: "usPolitics", question: "How would you declare yourself regarding U.S. politics?", answers: ["As a Republican", "As an Independent", "As a Democrat"]},
        {id: "politics", question: "How would you declare yourself politically?", answers: ["Conservative", "Moderate", "Liberal"]},
    ])},
    {id: "state", questions: "Which U.S. state do you currently reside in?", answers: [{'label': 'Alabama', 'value': 'Alabama'}, {'label': 'Alaska', 'value': 'Alaska'}, {'label': 'American Samoa', 'value': 'American Samoa'}, {'label': 'Arizona', 'value': 'Arizona'}, {'label': 'Arkansas', 'value': 'Arkansas'}, {'label': 'California', 'value': 'California'}, {'label': 'Colorado', 'value': 'Colorado'}, {'label': 'Connecticut', 'value': 'Connecticut'}, {'label': 'Delaware', 'value': 'Delaware'}, {'label': 'District Of Columbia', 'value': 'District Of Columbia'}, {'label': 'Federated States Of Micronesia', 'value': 'Federated States Of Micronesia'}, {'label': 'Florida', 'value': 'Florida'}, {'label': 'Georgia', 'value': 'Georgia'}, {'label': 'Guam', 'value': 'Guam'}, {'label': 'Hawaii', 'value': 'Hawaii'}, {'label': 'Idaho', 'value': 'Idaho'}, {'label': 'Illinois', 'value': 'Illinois'}, {'label': 'Indiana', 'value': 'Indiana'}, {'label': 'Iowa', 'value': 'Iowa'}, {'label': 'Kansas', 'value': 'Kansas'}, {'label': 'Kentucky', 'value': 'Kentucky'}, {'label': 'Louisiana', 'value': 'Louisiana'}, {'label': 'Maine', 'value': 'Maine'}, {'label': 'Marshall Islands', 'value': 'Marshall Islands'}, {'label': 'Maryland', 'value': 'Maryland'}, {'label': 'Massachusetts', 'value': 'Massachusetts'}, {'label': 'Michigan', 'value': 'Michigan'}, {'label': 'Minnesota', 'value': 'Minnesota'}, {'label': 'Mississippi', 'value': 'Mississippi'}, {'label': 'Missouri', 'value': 'Missouri'}, {'label': 'Montana', 'value': 'Montana'}, {'label': 'Nebraska', 'value': 'Nebraska'}, {'label': 'Nevada', 'value': 'Nevada'}, {'label': 'New Hampshire', 'value': 'New Hampshire'}, {'label': 'New Jersey', 'value': 'New Jersey'}, {'label': 'New Mexico', 'value': 'New Mexico'}, {'label': 'New York', 'value': 'New York'}, {'label': 'North Carolina', 'value': 'North Carolina'}, {'label': 'North Dakota', 'value': 'North Dakota'}, {'label': 'Northern Mariana Islands', 'value': 'Northern Mariana Islands'}, {'label': 'Ohio', 'value': 'Ohio'}, {'label': 'Oklahoma', 'value': 'Oklahoma'}, {'label': 'Oregon', 'value': 'Oregon'}, {'label': 'Palau', 'value': 'Palau'}, {'label': 'Pennsylvania', 'value': 'Pennsylvania'}, {'label': 'Puerto Rico', 'value': 'Puerto Rico'}, {'label': 'Rhode Island', 'value': 'Rhode Island'}, {'label': 'South Carolina', 'value': 'South Carolina'}, {'label': 'South Dakota', 'value': 'South Dakota'}, {'label': 'Tennessee', 'value': 'Tennessee'}, {'label': 'Texas', 'value': 'Texas'}, {'label': 'Utah', 'value': 'Utah'}, {'label': 'Vermont', 'value': 'Vermont'}, {'label': 'Virgin Islands', 'value': 'Virgin Islands'}, {'label': 'Virginia', 'value': 'Virginia'}, {'label': 'Washington', 'value': 'Washington'}, {'label': 'West Virginia', 'value': 'West Virginia'}, {'label': 'Wisconsin', 'value': 'Wisconsin'}, {'label': 'Wyoming', 'value': 'Wyoming'}]},
]