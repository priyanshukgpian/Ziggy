let myLeads=[];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");

inputBtn.addEventListener("click",function(){
         myLeads.push(inputEl.value);
         inputEl.value="";
         localStorage.setItem("myLeads",JSON.stringify(myLeads));
         save();
})
function save(){
let listItems="";
for(let i=0;i<myLeads.length;i++)
{
    listItems+="<li>"+  myLeads[i] +"</li>";
}
ulEl.innerHTML=listItems;
}