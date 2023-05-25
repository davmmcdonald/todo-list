import Project from './modules/project';
import Task from './modules/task';
import Interface from './modules/interface';

let projectList = [];
let currentProject = 0;

const addProjectButton = document.getElementById('addProjectButton');
const addTaskButton = document.getElementById('addTaskButton');
addProjectButton.addEventListener('click', createProject);
addTaskButton.addEventListener('click', createTask);

generateDefault();

function generateDefault() {
    projectList.push(new Project('Unassigned'));
    Interface.refreshProjects(projectList);
}

function createProject() {
    const name = prompt('Enter desired project name:');
    if (name === null || name === '') return;
    projectList.push(new Project(name));
    Interface.refreshProjects(projectList);
    currentProject = projectList.length - 1;
    document.querySelectorAll('.project-item').forEach(element => {
        element.addEventListener('click', event => {
            currentProject = element.dataset.index;
            console.log(currentProject);
        });
    });
    console.table(projectList);
}

function createTask() {
    projectList[currentProject].tasks.push(new Task());
    Interface.refreshTasks(projectList[currentProject]);
    document.querySelectorAll('.task-item').forEach(element => {
        element.addEventListener('change', event => {
            const index = element.dataset.index;
            const color = element.querySelector('.color-input').value;
            const completed = element.querySelector('.completed-input').checked;
            const description = element.querySelector('.description-input').value;
            const date = element.querySelector('.date-input').value;
            projectList[currentProject].tasks[index].updateTask(color, completed, description, date);
        });
    });
    console.table(projectList[currentProject].tasks);
}

document.getElementById('taskWrapper').addEventListener('click', event => {
    if (event.target.classList.contains('fa-trash-can')) {
        const index = event.target.parentElement.dataset.index;
        projectList[currentProject].tasks.splice(index, 1);
        Interface.refreshTasks(projectList[currentProject]);
        console.table(projectList[currentProject].tasks);
    }
});