class Task {
    constructor() {
        this.color = '#0000FF';
        this.completed = false;
        this.description = '';
        this.date = '2023-05-24';
    }

    updateTask(color, completed, description, date) {
        this.color = color;
        this.completed = completed;
        this.description = description;
        this.date = date;
    }
}

export default Task;