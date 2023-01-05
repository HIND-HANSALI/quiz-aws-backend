// stepper JS
let question_count=0;

// const stepperItem = document.querySelector(".stepper__item");
let step2 = document.querySelector(".step-2");
let step3 = document.querySelector(".step-3");
let option_list = document.querySelector(".option_list");
let option = document.querySelector(".option");
let question_text = document.querySelector(".question_text");

let next_btn= document.querySelector(".next_bt");
let user_name=document.getElementById("user-name");

//getting all required elements

let start_btn = document.querySelector(".start_btn");
let info_box = document.querySelector(".info_box");
let quiz_box = document.querySelector(".quiz_box");
let result_box = document.querySelector(".result_box");
let restart_btn=document.querySelector(".restart");
let quit_btn=document.querySelector(".quit");

let timeCount = document.querySelector(".timer_sec");
let timeLine = document.querySelector(".time_line");
let explication_text=document.querySelector(".explication_text");
let explication=document.querySelector(".explication");

let time_Pogress = document.querySelector(".time_Pogress");

// if startQuiz button clicked


// start_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo"); //show info box
//     console.log('hind');
// }

// if continue button is clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo");
// }



// function createData(name, scor) {

//     alert(name);
//     console.log("name :"+name + "scor :"+scor);
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         } else {
//         console.error();
//         }
//         console.log(xhr.readyState, xhr.status);
//     };
//     xhr.open("POST", "../script.php");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send("name=" +name + "&scor="+ scor );
//   }



function Continue() {
    // document.getEleme ntById("myDIV").style.display = "none";
    info_box.style.display = "none";
    quiz_box.style.display = "block";
    randomQuestions = questions.sort(() => Math.random() - .5);
    // question_count = 0;
    Next();
    // clearInterval(counter);
    clearInterval(counterLine);
    counterQuestion(1);
    // timerQuiz(15);
    timerLine(0);
    step2.classList.add('circle-acitve');
    

}


// getting questions and options from array
function showQuetions(questions) {
    let question_tag = '<span>' + questions.numb + ". " + questions.question + '</span>';
    let option_tag = '<div class="option"><span>' + questions.options[0] + '</span></div>'
        + '<div class="option"><span>' + questions.options[1] + '</span></div>'
        + '<div class="option"><span>' + questions.options[2] + '</span></div>'
        + '<div class="option"><span>' + questions.options[3] + '</span></div>';

    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
    // let option_tag = '<div class="option"><span>'+ questions[0].options[0] +'</span></div>'

    //    proooob
    let option = option_list.querySelectorAll(".option");


    // set onclick attribute to all options
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this," + questions.numb + ")");
    }
    

}
let justify=[];
let userScore=0;
// if user clicked an option
function optionSelected(answer, numb) {
    // console.log("hiii selected option");
    let userAnswer = answer.textContent;
    // console.log(userAnswer );
    questions.forEach(element => {
        // console.log(question_count +"test");
        if (element.numb == numb) {
            let correctAnswer = element.answer;//correct answer from array
          
            console.log(correctAnswer);
            if (userAnswer == correctAnswer) {
                userScore++;
                console.log(userScore);
                answer.classList.add("correct");
            } else {
                answer.classList.add("incorrect");
                let justifyObj=[];
                
                justifyObj.push(element.question);
                justifyObj.push(element.answer);
                justifyObj.push(element.justification);
                
                justify.push(justifyObj);

                // console.log(justify);
                // let x= {
                //     "Qst":lement.question,
                //     "answer":element.answer,
                //     "justification":element.justification
                // }
                // justify.push(x);
                

                
            }
            let allOptions=option_list.children.length;
            //once user select an option  disabled all options
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.style.display="block";
            
        }
    });
    // answer.classList.add("correct");



}

// fct if next button clicked

var progress = 0;
function Next() {
    console.log(justify);

    document.getElementById("next_btn").style.display=" none";
    
    clearInterval(counter);
    progress += 10;
    // console.log('nexxxt');
    if(question_count < questions.length ){ //if question count is less than total question length
    //increment the question_count value
    time_Pogress.style.width = progress + "%";

    showQuetions(randomQuestions[question_count]); //calling showQestions function
    counterQuestion(question_count + 1);//passing numb of question value to counterQuestion
    clearInterval(counter);
    
    timerQuiz(15 , question_count);
    clearInterval(counterLine);
    timerLine(0);
    // clearquestion();
    question_count++;

    
    }else{
        console.log("Questions completed");
        showResultBox();
        // alert('hind');
        // createData('hind', 22);
        step3.classList.add('circle-acitve');
    }
}

function counterQuestion(index) {
    //creating a new span tag and passing the question number and total question
    const total_ques_counter = document.querySelector(".total_question");

    let totalQueCounTag = '<p><strong>' + index + ' of ' + questions.length + ' </strong> Questions</p>';


    total_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function showResultBox(){
    quiz_box.style.display="none";
    result_box.style.display="block";
    result_box.style.opacity="1";
    let score_text=document.querySelector(".score_text");
    // score_text.innerHTML="userScore";

    
    if(userScore>7){
        let scoreTag='<span>Congrats <p>'+userScore+'</p>out of <p>'+questions.length+'</p></span>';
        score_text.innerHTML=scoreTag;
    }
    else if(userScore>5){
        let scoreTag='<span>Good <p>'+userScore+'</p>out of <p>'+questions.length+'</p></span>';
        score_text.innerHTML=scoreTag;
    }
    else{
        let scoreTag='<span>Sorry,you got only <p>'+userScore+'</p>out of <p>'+questions.length+'</p></span>';
        score_text.innerHTML=scoreTag;
    }
    for(let i=0;i<justify.length;i++){
        let divjustify=document.createElement("div");
        divjustify.classList.add("justify");
        explication.appendChild(divjustify);//put child into parent
        let justifyquestion=document.createElement("h6");
        justifyquestion.classList.add("justify-question");
        justifyquestion.innerHTML=justify[i][0];

        divjustify.appendChild(justifyquestion);//put child into parent
         
        let justifyanswer=document.createElement("h7");
        justifyanswer.classList.add("justify-answer");
        justifyanswer.innerHTML="<b>Correct Answer : </b>"+justify[i][1];
        divjustify.appendChild(justifyanswer);


        let justifyexplication=document.createElement("p");
        justifyexplication.classList.add("justify-explication");
        justifyexplication.innerHTML="<b>justification : </b>"+justify[i][2];
        divjustify.appendChild(justifyexplication);
    console.log(divjustify);


    }

}
function Restart(){
    result_box.style.display="none";
    info_box.style.display="block";
    

}
// function Justification(){
// let explication_tag='<span>'+ questions.justification+'</span>';
// explication_text.innerHTML=explication_tag;

// }
// index=question_counter
let counter;
function timerQuiz(time , index) {
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;

        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time == 0) {
            // clearInterval(counter);
            // if timer is done answer is incorrect
            let justifyObj=[];
            justifyObj.push(questions[index].question);
            justifyObj.push(questions[index].answer);
            justifyObj.push(questions[index].justification);
            justify.push(justifyObj);
            //when time=0 pass to the next question
            document.getElementById("next_btn").click();
            timeCount.textContent = "00";

        }
    }
}

let counterLine;
function timerLine(time) {

    counterLine = setInterval(timerLinex, 29);

    function timerLinex() {

        //  time+=1;
        if (time < 540) {
            let timelength = time + "px";
            timeLine.style.width = timelength;

            // time++;
        }
        if (time > 540) {
            clearInterval(counterLine);
        }
    }
}


// let counterLiine;
// function timerLine(width){
//     counterLiine=setInterval(line(),30);
//     function line(){
//         width++;
//        timeLine.style.width=width +"px"; 
//     }


// }