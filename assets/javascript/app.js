//Global variables
var t = 60;
var timeRemaining;
var right = 0;
var wrong = 0;

var questionsList = [
    {
        question: "What is the level requirement to become a Magician?",
        answerList: ["7", "11", "6", "8"],
        answer: "8",
        name: "magician"
    },
    {
        question: "What town do you need to visit to recieve your 3rd Job Advancement?",
        answerList: ["Ellinia", "El Nath", "Henesys", "Orbis"],
        answer: "El Nath",
        name: "3rdJob"
    },
    {
        question: "What is the required AP to job advance as a Thief?",
        answerList: ["35 STR", "20 INT", "25 DEX", "25 LUK"],
        answer: "25 LUK",
        name: "Thief"
    },
    {
        question: "What is the level requirement to start a Kerning City Party Quest?",
        answerList: ["20", "21", "18", "19"],
        answer: "21",
        name: "KPQ"
    },
    {
        question: "Where would you go to fight Papulatus?",
        answerList: ["Orbis", "Aquaroad", "Ludibrium", "Victoria Island"],
        answer: "Ludibrium",
        name: "ClockTower"
    },
    {
        question: "Can a Mushmom drop Ilbis?",
        answerList: ["yes", "no"],
        answer: "yes",
        name: "Throwing Stars"
    },
    {
        question: "Where would you go to fight Horntail?",
        answerList: ["Leafre", "El Nath", "Perion", "Magatia"],
        answer: "Leafre",
        name: "Boss"
    },
    {
        question: "What key do you have to press to pick up an item?",
        answerList: ["X", "A", "Y", "Z"],
        answer: "Z",
        name: "Items"
    },
    {
        question: "What is the current Max Level in the game?",
        answerList: ["200", "120", "250", "220"],
        answer: "250",
        name: "level"
    },
    {
        question: "How many AP points do you earn each level as a Cygnus Knight?",
        answerList: ["3", "6", "7", "5"],
        answer: "6",
        name: "cygnus"
    },
];


function startQuiz() {
    $('#quizContainer').show();
    timeLeft();
    displayQuestions();
};


function timeLeft() {
    timeRemaining = setInterval(decrement, 1000);
};

function decrement() {
    t--;
    $('#timeRemaining').text("Time Remaining: " + t);
    
    if (t === 0) {
        stop();
        checkAnswers();
        $('#quizContainer').hide();
        $('#endContainer').show();
    }
}

function stop() {
    clearInterval(timeRemaining);
}


function displayQuestions() {
    for (i = 0; i < questionsList.length; i++) {
        var createDiv = $("<div>");
        var q = questionsList[i].question;
        createDiv.append(q);

        
        var createDiv2 = $('<div>');
        for (j = 0; j < questionsList[i].answerList.length; j++) {
            createDiv2.append('<input type="radio"  name=' + questionsList[i].name + ' value=' + questionsList[i].answerList[j] + '><label>' + questionsList[i].answerList[j]) + '</label>';
        }
        
        createDiv.append(createDiv2);
        $("#questions").append(createDiv);
        $("#questions").append("<br>");
    }
};

function checkAnswers() {
    for (k = 0; k < questionsList.length; k++) {
        if ($('input:radio[name="' + questionsList[k].name + '"]:checked').val() === questionsList[k].answer) {
            right++;
        }
        else {
            wrong++;
        }
    }
    $("#questionsRight").text("Questions Right: " + right);
    $("#questionsWrong").text("Questions Wrong: " + wrong);
}


$('#startButton').on("click", function () {
    $(this).parent().hide();
    startQuiz();
});


$('#submitButton').on("click", function () {
    stop();
    checkAnswers();
    $('#quizContainer').hide();
    $('#endContainer').show();
});

$('#retryButton').on("click", function () {
    $('#questions').empty();
    $('#endContainer').hide();
    $('#timeRemaining').text("Time Remaining: 60");
    $('#quizContainer').show();
    t = 60;
    timeRemaining;
    right = 0;
    wrong = 0;
    startQuiz();
});