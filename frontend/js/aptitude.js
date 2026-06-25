let score = 0;

let currentQuestion = 0;

let questionsData = [];

let timer = 30;

let timerInterval;


// Load Topics

async function loadTopics(){

    const response = await fetch(
        "http://127.0.0.1:8000/aptitude/topics"
    );

    const topics = await response.json();

    const topicSelect = document.getElementById(
        "topic-select"
    );

    topics.forEach(topic => {

        const option = document.createElement(
            "option"
        );

        option.value = topic;

        option.textContent = topic;

        topicSelect.appendChild(option);

    });

}


// Start Test

document.getElementById(
    "start-btn"
).addEventListener("click", async () => {

    const topic = document.getElementById(
        "topic-select"
    ).value;

    const difficulty = document.getElementById(
    "difficulty-select"
).value;


    if(topic === "" || difficulty === ""){

        alert("Please select a topic");

        return;

    }


    const response = await fetch(
`http://127.0.0.1:8000/aptitude/questions/${topic}/${difficulty}`
);

    questionsData = await response.json();

    score = 0;

    currentQuestion = 0;

    showQuestion();

});


// Timer

function startTimer(){

    timer = 30;

    document.getElementById(
        "timer"
    ).innerText = timer;

    timerInterval = setInterval(() => {

        timer--;

        document.getElementById(
            "timer"
        ).innerText = timer;


        if(timer === 0){

            clearInterval(timerInterval);

            nextQuestion();

        }

    }, 1000);

}


// Show Question

function showQuestion(){

    clearInterval(timerInterval);

    const container = document.getElementById(
        "question-container"
    );

    container.innerHTML = "";

    const question = questionsData[currentQuestion];

    const card = document.createElement("div");

    card.classList.add("stat-card");


    card.innerHTML = `

        <h3>
            Question ${currentQuestion + 1} of ${questionsData.length}
        </h3>

        <br>

        <h2>
            ${question.question}
        </h2>

        <br>

        <h3>
            Time Left:
            <span id="timer">
                30
            </span>s
        </h3>

        <br>

        <button class="option-btn">
            ${question.options[0]}
        </button>

        <button class="option-btn">
            ${question.options[1]}
        </button>

        <button class="option-btn">
            ${question.options[2]}
        </button>

        <button class="option-btn">
            ${question.options[3]}
        </button>

        <br><br>

        <div id="explanation-box">

        </div>

        <br>

        <button class="next-btn">
            Next Question
        </button>

        <br><br>

        <h3>
            Score: ${score}
        </h3>

    `;

    container.appendChild(card);

    startTimer();


    const optionButtons = document.querySelectorAll(
        ".option-btn"
    );


    optionButtons.forEach(button => {

        button.addEventListener("click", () => {

            clearInterval(timerInterval);

            if(button.innerText === question.answer){

                button.style.backgroundColor = "green";

                score++;

            }

            else{

                button.style.backgroundColor = "red";


                optionButtons.forEach(btn => {

                    if(btn.innerText === question.answer){

                        btn.style.backgroundColor = "green";

                    }

                });

            }


            optionButtons.forEach(btn => {

                btn.disabled = true;

            });


            document.getElementById(
                "explanation-box"
            ).innerHTML = `

                <div class="explanation">

                    <h3>
                        Explanation
                    </h3>

                    <p>
                        ${question.explanation}
                    </p>

                </div>

            `;

        });

    });


    document.querySelector(
        ".next-btn"
    ).addEventListener("click", nextQuestion);

}


// Next Question

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questionsData.length){

        showQuestion();

    }

    else{

        document.getElementById(
            "question-container"
        ).innerHTML = `

            <div class="stat-card">

                <h1>
                    Test Completed
                </h1>

                <br>

                <h2>
                    Final Score: ${score}
                </h2>

            </div>

        `;

    }

}


loadTopics();