function init_state()
{
    //iitialisation des variables
    let score =60


}






let main = document.querySelector(".main")
let start = document.querySelector(".start")

//tester
let test = document.querySelector(".tester")


let questions = document.querySelector(".questions")
let question = document.querySelector(".question")

let result = document.querySelector(".result")

let btnStart = document.querySelector(".btn-start")
let btnNext = document.querySelector(".btn-next")

let timer = document.querySelector(".timer")
let innertime = document.createElement("div")
innertime.classList.add("innertimer")
timer.appendChild(innertime)


let q1 = document.querySelector("#first-r")
let q2 = document.querySelector("#second-r")
let q3 = document.querySelector("#third-r")
let q4 = document.querySelector("#fourth-r")

function grow()
{
        test.textContent = score
        
        score --

}
setInterval(grow,1000)
{

}


let que = 
[
    {
        id: 0,
        q: "What is the capital of DRC",
        a: [
            {text:"Kinshasa", iscorrect:true},
            {text:"Mbadaka", iscorrect:false},
            {text:"Lubumbashi", iscorrect:false},
            {text:"Goma", iscorrect:false}
            ]
    },
    {
        id: 1,
        q: "Qui a tué kabila",
        a: [
            {text:"Mobutu", iscorrect:true},
            {text:"Fatal", iscorrect:false},
            {text:"Tshisekedi", iscorrect:false},
            {text:"Kengo", iscorrect:false}
            ]
    }
    ,
    {
        id: 2,
        q: "Qui est le meilleur Dev de la cohorte KDA 2022",
        a: [
            {text:"Osée", iscorrect:true},
            {text:"Pascal", iscorrect:false},
            {text:"Samuel", iscorrect:false},
            {text:"Blaise", iscorrect:false}
            ]
    }  
]


let count = 0

question.textContent= que[0].q 
q1.nextElementSibling.textContent=que[0].a[0].text
q2.nextElementSibling.textContent=que[0].a[1].text
q3.nextElementSibling.textContent=que[0].a[2].text
q4.nextElementSibling.textContent=que[0].a[3].text


btnStart.addEventListener("click",function(e)
    {
        e.preventDefault()
        start.style="animation-duration: 1s;animation-name: slidein;"
        start.classList.add("hide")
        questions.classList.add("hide")
        questions.classList.remove("hide")
    }

)


    
btnNext.addEventListener("click",function(e)
    {

        e.preventDefault()
       
        let repons = document.querySelector("input[type='radio']:checked")

     

        que[count].a.forEach(element => {
            if(element.text == repons.nextElementSibling.textContent )
            {
                if(element.iscorrect)
                {
                    alert("bonne reponse")
                    
                }
                else
                    alert("mauvaise reponse")
            }
        });
        if(count<que.length-1)
        {
            count++
        } 
        else
        {
            questions.classList.add("hide");
            result.classList.remove("hide")
        }
        question.textContent= que[count].q+ " "+ count
        q1.nextElementSibling.textContent=que[count].a[0].text
        q2.nextElementSibling.textContent=que[count].a[1].text
        q3.nextElementSibling.textContent=que[count].a[2].text
        q4.nextElementSibling.textContent=que[count].a[3].text
        score= 60
        

        innertime.style.animationPlayState="initial"
  
    }
)
