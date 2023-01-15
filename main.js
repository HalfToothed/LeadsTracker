let myLeads = [];

const input = document.getElementById("inpt");
const Btn = document.getElementById("btn");
const list = document.getElementById("ul");
const Del = document.getElementById("delete");
const tabBtn = document.getElementById("tab");


let localLeads = JSON.parse(localStorage.getItem("lead"))

if(localLeads){
    myLeads = localLeads;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("lead", JSON.stringify( myLeads ))
    render(myLeads);
    })
})


Del.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = []
    render(myLeads);
   
})


Btn.addEventListener("click", function(){

    myLeads.push(input.value);
    input.value = " "       
    
    localStorage.setItem("lead", JSON.stringify(myLeads));

    render(myLeads);

})    

function render(leads){
   
    let listItems = ""      
    for(let i=0; i<leads.length; i++){
        listItems += `<li> 
        <a target = '_blank' href = '${leads[i]}'>${leads[i]}</a>
        </li>`
      
    }
    list.innerHTML = listItems;
   
    
}