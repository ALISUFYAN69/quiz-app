var questions = [
  {
    question: "What is full form of HTML?",
    option: {
      a: "HyperText Markup Language",
      b: "HyperText Markdown Language",
      c: "Hex Text Multiple Language",
      d: "None Of The Above"
    },
    answer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
    option: {
      a: "Cascading Style Sheets",
      b: "Creative Style System",
      c: "Computer Style Sheet",
      d: "Colorful Style Syntax"
    },
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language is used for web development?",
    option: {
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "All of the above"
    },
    answer: "All of the above"
  },
  {
    question: "What does JS stand for?",
    option: {
      a: "Java Syntax",
      b: "JavaScript",
      c: "Just Script",
      d: "Jumbled Script"
    },
    answer: "JavaScript"
  },
  {
    question: "Which tag is used to link an external CSS file?",
    option: {
      a: "<style>",
      b: "<css>",
      c: "<link>",
      d: "<script>"
    },
    answer: "<link>"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    option: {
      a: "style",
      b: "class",
      c: "id",
      d: "font"
    },
    answer: "style"
  },
  {
    question: "Which company developed JavaScript?",
    option: {
      a: "Google",
      b: "Microsoft",
      c: "Netscape",
      d: "Apple"
    },
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    option: {
      a: "// for single line, /* */ for multi-line",
      b: "<!-- -->",
      c: "# comment",
      d: "** comment **"
    },
    answer: "// for single line, /* */ for multi-line"
  },
  {
    question: "Which HTML tag is used to display an image?",
    option: {
      a: "<picture>",
      b: "<image>",
      c: "<img>",
      d: "<src>"
    },
    answer: "<img>"
  },
  {
    question: "Inside which HTML element do we put JavaScript code?",
    option: {
      a: "<js>",
      b: "<scripting>",
      c: "<script>",
      d: "<javascript>"
    },
    answer: "<script>"
  }
];

// dom for section 1
var form = document.querySelector(".from");
var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var rollNumber = document.getElementById("input-roll");
var institute = document.getElementById("input-inst");
var submitBtn = document.getElementById("submitBtn");
// dom for sec 2
var quizIntro = document.querySelector(".quiz-intro");
var startBtn = document.getElementById("startBtn");
//dom for sec 3

var quizBody = document.querySelector(".quizbody");
var numb = document.querySelector(".numb");
var totalQuestions = document.querySelector(".total-questions");
var questionTag = document.getElementById("question-tag");
var optionLi = document.getElementById("option-ul").children;
var nextBtn = document.querySelector(".nextBtn");

// dom for sec 4
var result = document.querySelector(".result");
var resName = document.getElementById("res-name");
var resEmail = document.getElementById("res-email");
var resRno = document.getElementById("res-roll");
var resinst = document.getElementById("res-inst");

var ttl = document.getElementById("ttl");
var rightAns = document.getElementById("rgt");
var wrongAns = document.getElementById("wrng");
var percentage = document.getElementById("percentange");



function showQuiz(){
  if(!(inputName.value.trim()) || !(inputEmail.value.trim()) || !(rollNumber.value.trim()) || !(institute.value.trim())){
    alert("pls fill the filed ");
    return
  }

  form.style.display = "none";
  quizIntro.style.display = "block";

  document.getElementById("para-name").innerText = inputName.value
  document.getElementById("para-email").innerText = inputEmail.value
  document.getElementById("para-roll").innerText = rollNumber.value

}
var currentNo = 1;
var current = 0;
var correct = 0;
var wrong = 0;

startBtn.addEventListener("click" , loadQuestion);

function loadQuestion() {
  quizIntro.style.display = "none";
  quizBody.style.display = "flex";
  
 if(current < questions.length) {
  var currentQuestion = questions[current].question;
  questionTag.innerText = currentQuestion;
  optionLi[0].innerText= questions[current].option.a;
  optionLi[1].innerText= questions[current].option.b;
  optionLi[2].innerText= questions[current].option.c;
  optionLi[3].innerText= questions[current].option.d;

   numb.innerHTML = currentNo;
   totalQuestions.innerHTML = questions.length;

     for( var i= 0 ; i < optionLi.length ; i++){
   
     optionLi[i].setAttribute("onclick" , "checkAns(this)")
  }
 }



}

 nextBtn.addEventListener("click" , function next() {
 current++;
if(current < questions.length) {
 currentNo++;
 loadQuestion()
}else{
  showResult()
}

for( var i= 0 ; i < optionLi.length ; i++){
   
     optionLi[i].classList.remove("rgt" , "wrng" , "disableLi")
  }
})

// function checkAns(event) {
// if(event.innerText === questions[current].answer) {
//    event.classList.add("rgt")
  
// }else{
//     event.classList.add("wrng")
// }

 
// }

function checkAns(ele){

    if(ele.innerText === questions[current].answer){
      ele.className = "rgt";
      correct++
    }else{
       ele.className = "wrng";
       wrong++
    
       for(var li of optionLi){
      if(li.innerHTML === questions[current].answer){
        li.classList.add("rgt");
      }
    }
    }


    for(var li of optionLi){
      li.classList.add("disableLi");
     
    }

}

function showResult(){
  quizBody.style.display = "none";
  result.style.display = "block";

  resName.innerHTML = inputName.value;

  resEmail.innerHTML = inputEmail.value;
  resRno.innerHTML = rollNumber.value;
  resinst.innerHTML = institute.value;

  ttl.innerHTML = questions.length;
  rightAns.innerHTML = correct;
  wrongAns.innerHTML = wrong ;

  var percent = Math.round((correct / questions.length) * 100);

  percentage.innerHTML = percent;

  

}







