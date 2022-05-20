
    //iitialisation des variables
    let count = 0
    let score =60
    let quiz= 
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
        },
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

    //selecting Dom elements//
    const main = document.querySelector(".main")//bloc principal de tous les elements

    const start = document.querySelector(".start")//page d'acceuil

    const questions = document.querySelector(".questions")//page des questions
    const question = document.querySelector(".question")//Bloc des questions individuelle

    const result = document.querySelector(".result")//Page de resultats

    const btnStart = document.querySelector(".btn-start")//boutton pour demarer la partie
    const btnNext = document.querySelector(".btn-next")//boutton pour passer a la question suivante

    //creation de la progress bar
    const timer = document.querySelector(".timer")
    const innertime = document.createElement("div")
    innertime.classList.add("innertimer")
    timer.appendChild(innertime)

    //selection des elemets des reponses
    const q1 = document.querySelector("#first")
    const q2 = document.querySelector("#second")
    const q3 = document.querySelector("#third")
    const q4 = document.querySelector("#fourth")

    const reponses = document.querySelectorAll("input[type='radio']")


function init()
{
    
    start.style="animation-duration: 1s;animation-name: slidein;"
    start.classList.add("hide")
    questions.classList.add("hide")
    questions.classList.remove("hide")

    question.textContent= quiz[0].q 
    q1.nextElementSibling.textContent=quiz[0].a[0].text
    q2.nextElementSibling.textContent=quiz[0].a[1].text
    q3.nextElementSibling.textContent=quiz[0].a[2].text
    q4.nextElementSibling.textContent=quiz[0].a[3].text

}

function nextQ()
{
    const answer = document.querySelector("input[type='radio']:checked")

    quiz[count].a.forEach(element => {
        if(element.text == answer.nextElementSibling.textContent )
        {
            if(element.iscorrect)
            {
                alert("bonne reponse")
                
            }
            else
                alert("mauvaise reponse")
        }
    }); 
    if(count<quiz.length-2)
    {
        count++
    } 
    else
    {
        questions.classList.add("hide");
        result.classList.remove("hide")
    }
    question.textContent= quiz[count].q+ " "+ count
    q1.nextElementSibling.textContent=quiz[count].a[0].text
    q2.nextElementSibling.textContent=quiz[count].a[1].text
    q3.nextElementSibling.textContent=quiz[count].a[2].text
    q4.nextElementSibling.textContent=quiz[count].a[3].text
    score= 60
}



btnStart.addEventListener("click",(e)=>
{
    e.preventDefault()
    init()
})
    
btnNext.addEventListener("click",(e)=>
    {
        e.preventDefault()
        nextQ()
    }
)
