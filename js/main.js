var quizz = {
    "questions": [
        {
            "question": "Sur quel support le son est-il stocké numériquement ?",
            "responses": ["le vinyle", "le dvd","une partition de musique"],
            "correct": "le dvd",
            "info": "Le Vinyle stockant le son grâce à des gravures et la partition étant en papier, seul le dvd stocke le son sous forme numérique !",
            "image": "img/q1.jpg"
        },
        {
            "question": "Qu'est ce que la fréquence d'échantillonnage ?",
            "responses": ["le temps entre chaque collecte d'une valeur de fréquence", "la fréquence maximale que peut atteindre une musique","la fréquence moyenne d'un son"],
            "correct": "le temps entre chaque collecte d'une valeur de fréquence",
            "info": "La fréquence d'échantillonage est le nombre d'échantillons de son prélevé par unité de temps donc la valeur représente le temps entre chaque échantillon.",
            "image": "img/q2.png"
        },
        {
            "question": "Quelle fréquence est audible par l'être humain ?",
            "responses": ["448Hz", "440Khz","12Hz"],
            "correct": "448Hz",
            "info": "L'oreille humaine est capable d'entrendre entre 20 et 20000 hertz soit entre 20hz et 20Khz",
            "image": "img/q3.jpg"
        },
        {
            "question": "Le CAN permet de passer d'un son à un code binaire, mais que veulent dire les initiales ?",
            "responses": ["convertisseur à neutron", "convertisseur analogique numérique","concentration à nano-ondes"],
            "correct": "convertisseur analogique numérique",
            "info": "Le CAN permet de convertir un signal analogique en un signal numérique d'où ces initiales C-onvertisseur A-nalogique N-umérique",
            "image": "img/q4.jpg"
        },
        {
            "question": "Pour qu'un son soit d'une meilleure qualité, il faut :",
            "responses": ["faire un échantillonnage plus précis", "utiliser un meilleur ordinateur","avoir un son avec une fréquence basse"],
            "correct": "faire un échantillonnage plus précis",
            "info": "Faire un échantillon plus précis consiste à récupérer plus souvent la fréquence du son par unité de temps donc le son est plus précis",
            "image": "img/q5.jpg"
        },
        {
            "question": "Quelle sera la conséquence d'avoir un échantillonnage plus poussé ?",
            "responses": ["le son sera plus long", "le fichier sera moins lourd","le fichier sera plus lourd"],
            "correct": "le fichier sera plus lourd",
            "info": "Avoir un échantillonage plus poussé signifie avoir plus de valeur numérique à stocker donc un fichier plus lourd",
            "image": "img/q6.png"
        },
        {
            "question": "Qu'est-ce que la compression d'un fichier audio ?",
            "responses": ["le raccourcir", "réduire la place qu'il occupe","supprimer les moments de blancs"],
            "correct": "réduire la place qu'il occupe",
            "info": "Et pour réduire la place qu'il occupe, la compression consiste à supprimer les sons non compris entre 20 et 20000 hz car non audibles donc inutiles, et à supprimer les sons qui se répètent plusieurs fois. Cela permet de réduire la taille du fichier.",
            "image": "img/q7.jpg"
        },
        {
            "question": "En quelle unité est exprimée la place occupée par un fichier audio ?",
            "responses": ["Hertz", "octet","binaire"],
            "correct": "octet",
            "info": "L'unité utilisée pour exprimer la place qu'occupe un fichier quelconque est l'octet qui représente 8 bits (8 fois 0 ou 1). Le fichier audio ne change pas d'unité.",
            "image": "img/q8.jpg"
        },
        {
            "question": "Quelle est la principale différence entre les différentes extensions d'un fichier audio ?",
            "responses": ["la qualité sonore", "la longueur d'un fichier","la qualité et la compression"],
            "correct": "la qualité et la compression",
            "info": "Les différentes extensions de fichier indiquent quel type de compression est utilisé. En fonction de la compression, la qualité du son est modifiée. L'extension .wav est un fichier sans aucune compressions",
            "image": "img/q9.jpg"
        },
        {
            "question": "Combien y a t'il d'étapes pour numériser un son ?",
            "responses": ["2", "3","5"],
            "correct": "2",
            "info": "Il y 2 grandes étapes : l'échantillonnage où l'on prélève des échantillons du signal et la quantification et codage qui associe un échantillon à une valeur binaire",
            "image": "img/q10.png"
        },
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
        if (nb_question == 3 || nb_question == 5 || nb_question == 7 || nb_question == 8) {
            question.innerHTML = "<h1 class='big_question'>" + quizz.questions[nb_question].question + "</h1>"
        } else {
            question.innerHTML = "<h1>" + quizz.questions[nb_question].question + "</h1>"
        }
        document.getElementById("nb_questions").textContent = nb_question + " / " + len_quizz
        reponse = document.getElementsByClassName("btn")
        document.getElementById("info_reponse").textContent = ""
        document.getElementById("img-question").src = quizz.questions[nb_question].image
        for (let i = 0; i < 3; i++) {
            if (nb_question == 1 || nb_question == 3 || nb_question == 4 || nb_question == 5 || nb_question == 6 || nb_question == 8) {
                for (let y = 0; y < 3; y++) {
                    if (nb_question == 5) {
                        document.getElementsByClassName("btn")[y].style.fontSize = "14px"
                    } else {
                        document.getElementsByClassName("btn")[y].style.fontSize = "12px"
                    }
                    if (nb_question == 1 || nb_question == 3 || nb_question == 5 || nb_question == 6 || nb_question == 8) {
                        document.getElementsByClassName("btn")[y].style.padding = "15px 5px"
                    } else {
                        document.getElementsByClassName("btn")[y].style.padding = "15px 0"
                    }
                }
            } else {
                for (let x = 0; x < 3; x++) {
                    document.getElementsByClassName("btn")[x].style.fontSize = "16px"
                    document.getElementsByClassName("btn")[x].style.padding = "15px 15px"
                }
            }
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