const taskName = document.getElementById("taskname")
const deadLine = document.getElementById("taskline")
const priority = document.getElementById("priority")
const table = document.getElementById("displayTable")
const newtaskObj = {
    "name": "?",
    "Dates": 0,
    "pri": 10
}
let taskList=[]

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("taskList"))
if (leadsFromLocalStorage) {
    taskList = leadsFromLocalStorage
    renderTasks(taskList)
}

function addTasktoList(newTaskItem){
    taskList.push(newTaskItem)
    localStorage.setItem("taskList", JSON.stringify(taskList))
}


const btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    let name = taskName.value
    let time = deadLine.value
    let pri = priority.value
    newtaskObj.name=name
    newtaskObj.Dates=time
    newtaskObj.pri=pri
    taskName.value=""
    deadLine.value=""
    priority.value=""
    addTasktoList(newtaskObj)
    renderTasks(taskList)
})

function renderTasks(taskitems){
    taskitems.sort((a, b) => {
        return a.pri - b.pri;
    });
    
    let listItems =`<tr>
    <th>Task Name</th>
    <th>DeadLine</th>
    <th>Priority</th>
    </tr>
    
    `
    for(let i=0; i< taskitems.length;i++)
    {
        listItems +=`
        <tr>
        <td id="tasknamedata">${taskitems[i].name}</td>
        <td>${taskitems[i].Dates}</td>
        <td>${taskitems[i].pri}</td>
      </tr>
        `
    }

    table.innerHTML=listItems
}
const deteleproperty = document.getElementById("tasknamedata")
const row = document.getElementById("table-row")
deteleproperty.addEventListener("click",function(){
    localStorage.clear()
    console.log("cleared")
    taskList = []
    renderTasks(taskList)
    
})