
    // let choiceInputs = document.getElementsByName("option");
    // let optionanswer=document.getElementsByClassName("op");
     
    // var currentquestion = 0;
    // var correctAnsCounter = 0, wrongAnsCounter = 0;
    // var userAnswer;
    // var index=0;

    // 

    // function changq() {
    //     document.getElementById("question").innerHTML = Questions[currentquestion].q;
    //     for (let i = 0; i < 4; i++) {
    //         document.getElementsByClassName("op")[i].innerHTML = Questions[currentquestion].a[i].text;
    //         document.getElementsByName("option")[i].value = Questions[currentquestion].a[i].isCorrect;
    //     }
        
    //     document.getElementById("radioId1").checked = false;
    //     document.getElementById("radioId2").checked = false;
    //     document.getElementById("radioId3").checked = false;
    //     document.getElementById("radioId4").checked = false;


    //     currentquestion++;
    // }

    // function checkAnswer() {
    //     console.log("test1");
    //      for (let i = 0; i < choiceInputs.length; i++) {
    //          console.log(choiceInputs.length)
    //          console.log("test2");
    //          if (choiceInputs[i].checked) {
    //              userAnswer =optionanswer[i].innerHTML;
    //              console.log("test3" +optionanswer[i].innerHTML);
    //          }
    //      }
    //      console.log("user"+userAnswer)
    //      console.log("hi"+Questions[index].correctAnswer);
    //      if (userAnswer == Questions[index].correctAnswer) {
    //          console.log("hi"+Questions[index].correctAnswer);
    //          correctAnsCounter++;
    //      }
    //      else {
    //          wrongAnsCounter++;
 
    //      }
 
    //      console.log("correct"+correctAnsCounter);
    //      console.log("wrong"+wrongAnsCounter);
    //      index++;
    //  }
    var myQuestions = [
        {
            question: "Messi has won a record number of Ballon d'Or awards - how many?",
            answers: {
                a: 'Six Ballon dOr awards',
                b: 'one Ballon dOr awards',
                c: 'seven Ballon dOr awards',
                d: 'three Ballon dOr awards'
            },
            correctAnswer: 'Six Ballon dOr awards'
        },
        {
            question: "Player known as  (الحكومه)?",
            answers: {
                a: 'Cristiano Ronaldo',
                b: 'Leo Messi',
                c: 'Kareem Binzima  .',
                d: 'Luka Modric'
            },
            correctAnswer: 'Cristiano Ronaldo'
        }, {
            question: "What is 30/3?",
            answers: {
                a: '3',
                b: '5',
                c: '10',
                d: '33'
            },
            correctAnswer: '10'
        },
        {
            question: "Messi has won a record number of Ballon d'Or awards - how many?",
            answers: {
                a: 'Six Ballon dOr awards',
                b: 'one Ballon dOr awards',
                c: 'seven Ballon dOr awards',
                d: 'three Ballon dOr awards'
            },
            correctAnswer: 'Six Ballon dOr awards'
        },{
            question: "Messi has won a record number of Ballon d'Or awards - how many?",
            answers: {
                a: 'Six Ballon dOr awards',
                b: 'one Ballon dOr awards',
                c: 'seven',
                d: 'three Ballon dOr awards'
            },
            correctAnswer: 'Six Ballon dOr awards'
        },{
            question: "Messi has won a record number of Ballon d'Or awards - how many?",
            answers: {
                a: 'Six Ballon dOr awards',
                b: 'one Ballon dOr awards',
                c: 'seven Ballon dOr awards',
                d: 'three '
            },
            correctAnswer: 'Six Ballon dOr awards'
        }
    ];

    myCounter = 0;
    function shownextQuestion() {
        console.log("pp")
        document.getElementById("ques").innerHTML = myQuestions[myCounter].question;
        document.getElementById("labelans1").innerHTML = myQuestions[myCounter].answers.a;
        document.getElementById("labelans2").innerHTML = myQuestions[myCounter].answers.b;
        document.getElementById("labelans3").innerHTML = myQuestions[myCounter].answers.c;
        document.getElementById("labelans4").innerHTML = myQuestions[myCounter].answers.d;
        myCounter += 1;
        document.getElementById("form").style.display="block";
        if (myCounter==myQuestions.length){
            document.getElementById("end").style.display='block';
            document.getElementById("next").style.display='none';
        }
    }    
   

