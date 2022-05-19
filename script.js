let main = document.querySelector(".main")
let start = document.querySelector(".start")
let questions = document.querySelector(".questions")
let question = document.querySelector(".question")
let btnStart = document.querySelector(".btn-start")
let btnNext = document.querySelector(".btn-next")
let next = document.querySelector(".next") 
let timer = document.querySelector(".timer")
let innertime = document.createElement("div")
innertime.classList.add("innertimer")
timer.appendChild(innertime)

let que = ["le feminin de mouche","la bague des soldats", "les sorciers de waverly","voyage avec moko"]
let count = 1
question.textContent= que[count]

    btnStart.addEventListener("click",function(e)
    {
        e.preventDefault()
        start.style="animation-duration: 1s;animation-name: slidein;"
        start.classList.add("hide")

        questions.classList.add("hide")
        questions.classList.remove("hide")


    })


    
    btnNext.addEventListener("click",function(e)
    {

        e.preventDefault()
        count<que.length-1?count++:false
        question.textContent= que[count]
        
        innertime.style="width:50%"
  
    }
    )