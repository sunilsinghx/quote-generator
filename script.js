const quoteText = document.querySelector(".quote")
const authorName = document.querySelector(".author .name")
const quoteBtn = document.querySelector("button")
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const linkedinBtn = document.querySelector(".linkedin");

//random quote function
function randomQuote()
{
    quoteBtn.classList.add("loading")
    quoteBtn.innerText= "Loading Quote.."
    url = "https://api.quotable.io/random"
    
    fetch(url)
    .then(res=> res.json())
    .then(result=>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote"

        quoteBtn.classList.remove("loading")
    })

}


quoteBtn.addEventListener("click",randomQuote)
soundBtn.addEventListener("click",()=>{
    let utter = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText} `)
    speechSynthesis.speak(utter)
})
copyBtn.addEventListener("click",()=>
{
    navigator.clipboard.writeText(quoteText.innerText)
})
linkedinBtn.addEventListener("click",()=>
{
    let post = "https://www.linkedin.com/feed/"
    window.open(post,"_blank")
})