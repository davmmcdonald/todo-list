(()=>{"use strict";const e=class{constructor(e){this.name=e,this.tasks=[]}},t=class{static refreshProjects(e){const t=document.getElementById("projectWrapper");t.innerHTML="",e.forEach(((e,s)=>{const n=document.createElement("li");n.innerText=e.name,n.classList.add("project-item"),n.dataset.index=s,t.appendChild(n)}))}static refreshTasks(e){const t=document.getElementById("taskWrapper");t.innerHTML="",e.tasks.forEach(((e,s)=>{const n=document.createElement("form");n.classList.add("task-item"),n.dataset.index=s;const c=document.createElement("input");c.type="color",c.value=e.color,c.classList.add("color-input");const a=document.createElement("input");a.type="checkbox",a.checked=e.completed,a.classList.add("completed-input");const d=document.createElement("input");d.type="text",d.value=e.description,d.classList.add("description-input");const o=document.createElement("input");o.type="date",o.value=e.date,o.classList.add("date-input");const r=document.createElement("i");r.classList.add("fa-solid","fa-trash-can"),n.appendChild(c),n.appendChild(a),n.appendChild(d),n.appendChild(o),n.appendChild(r),t.appendChild(n)}))}};let s=[],n=0;const c=document.getElementById("addProjectButton"),a=document.getElementById("addTaskButton");c.addEventListener("click",(function(){const c=prompt("Enter desired project name:");null!==c&&""!==c&&(s.push(new e(c)),t.refreshProjects(s),n=s.length-1,document.querySelectorAll(".project-item").forEach((e=>{e.addEventListener("click",(t=>{n=e.dataset.index,console.log(n)}))})),console.table(s))})),a.addEventListener("click",(function(){s[n].tasks.push(new class{constructor(){this.color="#0000FF",this.completed=!1,this.description="",this.date="2023-05-24"}updateTask(e,t,s,n){this.color=e,this.completed=t,this.description=s,this.date=n}}),t.refreshTasks(s[n]),document.querySelectorAll(".task-item").forEach((e=>{e.addEventListener("change",(t=>{const c=e.dataset.index,a=e.querySelector(".color-input").value,d=e.querySelector(".completed-input").checked,o=e.querySelector(".description-input").value,r=e.querySelector(".date-input").value;s[n].tasks[c].updateTask(a,d,o,r)}))})),console.table(s[n].tasks)})),s.push(new e("Unassigned")),t.refreshProjects(s),document.getElementById("taskWrapper").addEventListener("click",(e=>{if(e.target.classList.contains("fa-trash-can")){const c=e.target.parentElement.dataset.index;s[n].tasks.splice(c,1),t.refreshTasks(s[n]),console.table(s[n].tasks)}}))})();