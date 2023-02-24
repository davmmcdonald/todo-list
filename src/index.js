import Tasks from './modules/tasks';
import Storage from './modules/storage';
import DOM from './modules/DOM';

let taskList = [];
let projectList = [];

// Check storage for exist task list
if (Storage.dataExists()) {
    console.log('exists');
} else {
    console.log('does not exist');
}

generateDefaultData();

function generateDefaultData() {
    
}