class Interface {
    static refreshProjects(projectList) {
        const projectWrapper = document.getElementById('projectWrapper');
        projectWrapper.innerHTML = '';
        projectList.forEach((element, index) => {
            const project = document.createElement('li');
            project.innerText = element.name;
            project.classList.add('project-item');
            project.dataset.index = index;
            projectWrapper.appendChild(project);
        });
    }
    
    static refreshTasks(project) {
        const taskWrapper = document.getElementById('taskWrapper');
        taskWrapper.innerHTML = '';
        project.tasks.forEach((element, index) => {
            const task = document.createElement('form');
            task.classList.add('task-item');
            task.dataset.index = index;
            const color = document.createElement('input');
            color.type = 'color';
            color.value = element.color;
            color.classList.add('color-input');
            const completed = document.createElement('input');
            completed.type = 'checkbox';
            completed.checked = element.completed;
            completed.classList.add('completed-input');
            const description = document.createElement('input');
            description.type = 'text';
            description.value = element.description;
            description.classList.add('description-input');
            const date = document.createElement('input'); 
            date.type = 'date';
            date.value = element.date;
            date.classList.add('date-input');
            const trash = document.createElement('i');
            trash.classList.add('fa-solid', 'fa-trash-can');
            task.appendChild(color);
            task.appendChild(completed);
            task.appendChild(description);
            task.appendChild(date);
            task.appendChild(trash);
            taskWrapper.appendChild(task);
        });
    }
}

export default Interface;