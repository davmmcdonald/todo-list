class Storage {

    static dataExists() {
        if (localStorage.taskList) {
            return true;
        } else {
            return false;
        }
    }
    
}

export default Storage;