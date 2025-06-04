// localStorage.clear()
let days=Array.from(document.querySelectorAll(".day"))
let currday=[]
let eventdays=[]
let btn=document.getElementById("add")
let task=document.querySelector(".task")
let list=document.querySelector(".list")
let cancel=document.getElementById("cancel")
let input=document.getElementById("input")

function grey(eventdays){
    console.log(eventdays)
    eventdays.forEach(e=>{
        let element=days[e-1]
        element.style.backgroundColor="#7891A9"
        element.style.borderRadius="50%"
        element.style.color="white"
    })
}
function save(){
  const event = input.value;
  if (!event) return;

  let day=currday[0]
  let dayno=days.indexOf(day)+1
  localStorage.setItem(dayno,JSON.stringify(event))
  if(!eventdays.includes(dayno)){
    console.log(eventdays)
    eventdays.push(dayno)
  }
  let li=document.createElement("li")
  li.innerText=`${event}`
  list.appendChild(li)
  input.value=""
  close();
}
days.forEach(e=>{
    e.addEventListener("click",(f)=>{
        if(currday.length!=0){
            currday[0].style.backgroundColor="#EDF2F7"
            currday[0].style.borderRadius="0"
            currday[0].style.color="#2D3748"
            currday=[]
        }
        grey(eventdays)
        
        let element=f.target.closest('.day')
        currday.push(e)
        element.style.backgroundColor="#A855F7"
        element.style.borderRadius="50%"
        element.style.color="#FFFFFF"
        let value=JSON.parse(localStorage.getItem(days.indexOf(e)+1))
        if(!value) list.innerHTML=""
        else list.innerHTML=`<li>${value}</li>`
        
        btn.addEventListener("click",()=>{
          document.getElementById("eventModal").style.display = "flex";
        })

    })
})


function close() {
  document.getElementById("eventModal").style.display = "none";
}
cancel.addEventListener("click",()=>{
    close()
})


