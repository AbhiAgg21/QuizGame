const questions = [

    {
        "que": "Which of the following is a markup language.",
        "a": "HTML",
        "b": "CSS",
        "c": "Java",
        "d": "Php",
        "correct": "a"
    },

    {


        "que": "What is the full form of HTML",
        "a": "Hyper Test Markup Language",
        "b": "Hyper Text Markup Language",
        "c": "Hyper Text Managing Language",
        "d": "Hyper Test Managing Language",
        "correct": "b"


    },


    {


        "que": "When was JS launched.",
        "a": "1996",
        "b": "1995",
        "c": "1997",
        "d": "1998",
        "correct": "b"


    },



    {

        "que": "Full form of JS",
        "a": "JavaScribble",
        "b": "JavaScript",
        "c": "JavaSecret",
        "d": "JavaScreaming",
        "correct": "b"



    },


    {

        "que": "How many heading tags are there in HTML",
        "a": "9",
        "b": "8",
        "c": "7",
        "d": "6",
        "correct": "d"



    }



]

let index = 0;
let total = questions.length
let right = 0;
let wrong = 0;
const quesbox = document.getElementById("quesbox")
const optioninputs = document.querySelectorAll(".options")


const loadquestion = () => {
    if (index === total) {
        return endquiz();
    }
    reset();
    const data = questions[index]
    quesbox.innerText = (index + 1) + ") " + data.que;
    console.log(quesbox);
    console.log(data);
    optioninputs[0].nextElementSibling.innerText = data.a
    optioninputs[1].nextElementSibling.innerText = data.b
    optioninputs[2].nextElementSibling.innerText = data.c
    optioninputs[3].nextElementSibling.innerText = data.d




}

const submitquiz = () => {
    const data = questions[index]
    const answer = getanswer()
    if (answer === data.correct) {
        right++
    }
    else {
        wrong++

    }

    index++;
    loadquestion();
    return;

}

const getanswer = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                answer =  input.value;
            }

        }
    )
    return answer
}

const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false;

        }
    )
}


const endquiz = () => {
    document.getElementById("box").innerHTML = "<h1>Thank You for Giving the Quiz</h1>"
    +"<h1>" +right+"/" + total +" are correct" + "</h1>";
}

loadquestion()