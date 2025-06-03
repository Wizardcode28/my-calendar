// localStorage.clear()
let days=Array.from(document.querySelectorAll(".day"))
let currday=[days[0]]
let eventdays=[]
let btn=document.getElementById("add")
let task=document.querySelector(".task")
let list=document.querySelector(".list")
let cancel=document.getElementById("cancel")
function grey(eventdays){
    console.log(eventdays)
    eventdays.forEach(e=>{
        let element=days[e-1]
        element.style.backgroundColor="grey"
        element.style.borderRadius="50%"
        element.style.color="white"
    })
}
days.forEach(e=>{
    e.addEventListener("click",(f)=>{
        grey(eventdays)
        if(currday.length!=0) {
            currday[0].style.backgroundColor="rgb(78, 205, 170)"
            currday[0].style.borderRadius="0"
            currday[0].style.color="black"
            currday=[]
        }
        
        let element=f.target.closest('.day')
        currday.push(e)  
        element.style.backgroundColor="#d64de9"
        element.style.borderRadius="50%"
        element.style.color="white"
        // console.log(days.indexOf(e)+1)
        let value=JSON.parse(localStorage.getItem(days.indexOf(e)+1))
        if(!value) list.innerHTML=""
        else list.innerHTML=`<li>${value}</li>`
    })
})
btn.addEventListener("click",(e)=>{
    document.getElementById("eventModal").style.display = "flex";
   
})
function close() {
  document.getElementById("eventModal").style.display = "none";
}
cancel.addEventListener("click",()=>{
    close()
})


function save() {
  const event = document.getElementById("input").value;
  if (!event) return;

  let day=currday[0]
  let dayno=days.indexOf(day)+1
  localStorage.setItem(dayno,JSON.stringify(event))
  if(!eventdays.includes(dayno)){
  eventdays.push(dayno)
  }
   let li=document.createElement("li")
   li.innerText=`${event}`
   list.appendChild(li)
   close();
}