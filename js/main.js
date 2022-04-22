var quizz = {
    "questions": [
        {
            "question": "Quelle est la capitale de la France ?",
            "responses": ["Lyon", "Paris","Marseille"],
            "correct": "Paris",
            "info": "la capital est Paris et elle se situe au centre de la France",
            "image": "img/q1.jpg"
        },
        {
            "question": "quelle heure est t'il ?",
            "responses": ["12h", "13h","14h"],
            "correct": "14h",
            "info": "il est effectivement 12 heure sur ma montre",
            "image": "img/q2.jpeg"
        },
        {
            "question": "test question 3 ?",
            "responses": ["1", "2","3"],
            "correct": "3",
            "info": "question de test sans interet",
            "image": "img/q3.jpg"
        },
        {
            "question": "Qu'elle est la couleur du cheval blanc d'Henri 4 ?",
            "responses": ["rouge", "vert","blanc"],
            "correct": "blanc",
            "info": "le cheval est blanc donc sa couleur est blanc",
            "image": "img/q4.jpg"
        }
    ]
}

var nb_reponse_juste = 0
var choisie = false
var nb_question = -1
var score = 0
var len_quizz = quizz.questions.length 
var point = 20 / len_quizz

function play() {
    document.getElementById("menu").style.display = "none"
    next()
    document.getElementById("main").style.display = "block"
}

function next() {
    nb_question++
    card = document.getElementsByClassName("card")[1]
    if (nb_question >= quizz.questions.length) {
        end()
    } else {
        choisie = false
        if (card.classList.contains("container_good_answer")) {
            card.classList.remove("container_good_answer")
        }
        if (card.classList.contains("container_bad_answer")) {
            card.classList.remove("container_bad_answer")
        }
        document.getElementsByClassName("next")[0].style.display = "none"
        question = document.getElementsByClassName("question")[0]
        question.innerHTML = "<h1>" + quizz.questions[nb_question].question + "</h1>"
        document.getElementById("nb_questions").textContent = nb_question + " / " + len_quizz
        reponse = document.getElementsByClassName("btn")
        document.getElementById("info_reponse").textContent = ""
        document.getElementById("img-question").src = quizz.questions[nb_question].image
        for (let i = 0; i < 3; i++) {
            reponse[i].style.backgroundColor = '#2a75ff';
            reponse[i].textContent = quizz.questions[nb_question].responses[i]
        }
    }
}

function check(elem) {
    card = document.getElementsByClassName("card")[1]
    reponse = document.getElementsByClassName("btn");
    if (choisie != true) {
        choisie = true
        if (elem.textContent == quizz.questions[nb_question].correct) {
            score += point
            nb_reponse_juste++
            card.classList.add("container_good_answer")
        } else {
            card.classList.add("container_bad_answer")
        }
        for (let i = 0; i < 3; i++) {
            if (reponse[i].textContent == quizz.questions[nb_question].correct) {
                reponse[i].style.backgroundColor = '#009900';
            } else {
                reponse[i].style.backgroundColor = '#be0000';
            }
        }
        document.getElementById("info_reponse").textContent = quizz.questions[nb_question].info
        document.getElementsByClassName("next")[0].style.display = "block"
    }
}

function end() {
    card = document.getElementsByClassName("card")[2]
    document.getElementById("end").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("nb_questions_end").textContent = len_quizz + " / " + len_quizz
    document.getElementById("end_score").textContent = Math.round(score) + " / 20";
    if (nb_reponse_juste == 1) {
        document.getElementsByClassName("rep_juste")[0].innerHTML = "<h2>Tu a eu " + nb_reponse_juste + " réponse juste</h2>"
    } else {
        document.getElementsByClassName("rep_juste")[0].innerHTML = "<h2>Tu a eu " + nb_reponse_juste + " réponses justes</h2>"
    }
    if (score < 10) {
        card.classList.add("container_bad_answer")
        document.getElementsByClassName("main-container")[2].style.backgroundColor = "#d32424"
    } else {
        card.classList.add("container_good_answer")
        document.getElementsByClassName("main-container")[2].style.backgroundColor = "#12af11"
    }
}