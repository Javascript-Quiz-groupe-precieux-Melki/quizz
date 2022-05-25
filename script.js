
    //iitialisation des variables
    let count = 0
    let time =60
    let score = 0
    let innerwidth = 100
   
    const good = new Audio("assets/good.mp3")
    const wrong = new Audio("assets/wrong.mp3")
    

    //selecting Dom elements//
    const main = document.querySelector(".main")//bloc principal de tous les elements

    //selections des entrees utilisateurs

    const infos = document.querySelectorAll(".start input")
  
    const start = document.querySelector(".start")//page d'acceuil

    const questions = document.querySelector(".questions")//page des questions
    const question = document.querySelector(".question")//Bloc des questions individuelle

    const result = document.querySelector(".result")//Page de resultats
    

    const btnStart = document.querySelector(".btn-start")//boutton pour demarer la partie
    const btnNext = document.querySelector(".btn-next")//boutton pour passer a la question suivante
    const bntQuit = document.querySelector(".btn-quit")
    const btnRestart = document.querySelector(".restart")

    const form = document.querySelector("form")

     //selection des elemets des reponses

    const q1 = document.querySelector("#first")
    const q2 = document.querySelector("#second")
    const q3 = document.querySelector("#third")
    const q4 = document.querySelector("#fourth")
    const def = document.querySelector("#default")

    const reponses = document.querySelectorAll("input[type='radio']")

    const fakeradio = document.querySelectorAll(".fakeradio")

    const allfields = document.querySelector("fieldset")

    const resimg = document.querySelector("#resimg")





    //creation de la progress bar
    const timer = document.querySelector(".timer")
    // timer.textContent=time
    const innertime = document.createElement("div")
    innertime.classList.add("innertimer")
    timer.appendChild(innertime)

    let infoquestion = document.querySelector("#question")
    let infotime = document.querySelector("#time")

    

   
   



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

    
    let username = infos[0].value
    let usermail = infos[1].value
    result.childNodes[1].textContent=username
    result.childNodes[3].textContent=usermail



    function timemanager()
    {
        time>0?time --:false
        
        infotime.textContent=time
        
        if(time<=10)
        {
            infotime.style.color="red"
        }
        if(time<=0)
        {
            time=60
            infotime.style.color="#222"
            nextQ()
        }
        
    }

    function widthmanager()
    {
        innerwidth-=0.0084
      
        innertime.style.width=""+innerwidth+"%"
    }
    setInterval(widthmanager,5)
    {

    }

    setInterval(timemanager,1000)
    {

    }

}

function showres()
{
    questions.classList.add("hide");
    result.classList.remove("hide")
    result.childNodes[7].textContent=score+"/"+quiz.length
    if((score*100/quiz.length)>=50)
    {
    resimg.classList.add("fa-regular", "fa-circle-check", "success")
    }
    else
    resimg.classList.add("fa-regular", "fa-circle-xmark", "wrong")
}
function nextQ()
{
    
    def.checked=true
    result.childNodes[7].textContent=score+"/"+quiz.length
    if(count<quiz.length-1)
    {
        count++
    } 
    else
    {
    showres()
    }
    question.textContent= quiz[count].q
    q1.nextElementSibling.textContent=quiz[count].a[0].text
    q2.nextElementSibling.textContent=quiz[count].a[1].text
    q3.nextElementSibling.textContent=quiz[count].a[2].text
    q4.nextElementSibling.textContent=quiz[count].a[3].text

    time=60
    innerwidth=100
    infoquestion.textContent="Question "+(count+1)+"/"+quiz.length
    btnNext.setAttribute("disabled","disabled")
    allfields.removeAttribute("disabled")
    reponses.forEach(element => {
        element.parentElement.style.border="2px solid #ddd"
    });
    resetboreder()
}

function validator()
{
  
    const answer = document.querySelector("input[type='radio']:checked")
    quiz[count].a.forEach(element => {
        if(element.text == answer.nextElementSibling.textContent )
        {
            if(element.iscorrect)
            {
                good.play()
                answer.parentElement.style.border="1px #028A3D solid"
                score ++    
                
                
            }
            else
            {
                wrong.play()
                answer.parentElement.style.border="1px red solid"
                
            }
                
        }
        allfields.setAttribute("disabled","disabled")
        // timer.style.display="none"
        
    }); 
}


btnStart.addEventListener("click",(e)=>
{
    e.preventDefault()
    infos.forEach(element => {
        element.style.border="1px solid grey"
        element.nextElementSibling.textContent=""
    });
    if (infos[0].value=="" || infos[1].value=="")
    {
        if(infos[0].value=="")
        {
            infos[0].style.border="2px solid red"
            infos[0].nextElementSibling.textContent="vous avez oublié de remplir votre nom"
        }
        if(infos[1].value=="")
        {
            infos[1].style.border="2px solid red"
            infos[1].nextElementSibling.textContent="vous avez oublié de renseigner votre mail"
        }
       
    }
    else if(infos[1].value.indexOf("@")=="-1")
    {
        infos[1].style.border="2px solid red"
        infos[1].nextElementSibling.textContent="Veuillez entrer une adresse e-mail valide"
    }
    
    else  init()
   


})
    
btnNext.addEventListener("click",(e)=>
    {
        e.preventDefault()
        validator()
        setTimeout(nextQ,500);
        // nextQ()
    }
)

bntQuit.addEventListener("click",(e)=>
{
    e.preventDefault()
    showres()
})

btnRestart.addEventListener("click",()=>
{
    location.reload();
})

reponses.forEach(element => {
    element.addEventListener("click",()=>
    {
        btnNext.removeAttribute("disabled")
        resetboreder()
        element.parentElement.style.border="2px solid ##028A3D"
        element.previousElementSibling.style.background="#028A3D"
        element.previousElementSibling.style.border="none"
        
    })
    
});

function resetboreder()
{
    reponses.forEach(element => {

        element.parentElement.style.border="2px #ddd solid;"
   
    })

    fakeradio.forEach(element =>{

        element.style.background="#fff"
        element.style.border="1px solid #666"
        console.log("asdasd",element)
    })
}


