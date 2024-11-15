import Item from './item';
const fs = require('fs');

const getProjectNames = (data) => {
    data.projects.forEach(project => {
        for (const projectKey in project) {
            if (project.hasOwnProperty(projectKey)) {
                const projectInfo = project[projectKey];
                console.log(projectInfo.name);
            }
        }
    });
};

const getProjectItems_ByProjectName = (data, name) => {
    data.projects.forEach(project => {
        for (const projectKey in project) {
            const projectInfo = project[projectKey];
            if (projectInfo.name === name) {    
                projectInfo.items.forEach(item => {
                    console.log(item);
                });
            }
        }
    });
};

const changeDoneBool = (data, name, title) => {    
    data.projects.forEach(project => {
        for (const projectKey in project) {
            const projectInfo = project[projectKey];
            if (projectInfo.name === name) {    
                projectInfo.items.forEach(item => {
                    if (item.title === title) {
                        item.done = !item.done;
                    }
                });
            }
        }
    });
};

const addItem = (data, name, title, desc) => {
    const newItem = new Item(title, desc);
    data.projects.forEach(project => {
        for (const projectKey in project) {
            const projectInfo = project[projectKey];
            if (projectInfo.name === name) {
                projectInfo.items.push(newItem);
            }
        }
    });
};

const updateItem = (data, projectName, oldTitle, newTitle, newDesc) => {
    data.projects.forEach(project => {
        for (const projectKey in project) {
            const projectInfo = project[projectKey];
            if (projectInfo.name === projectName) {
                projectInfo.items.forEach(item => {
                    if (item.title === oldTitle) {
                        item.title = newTitle; // Update title
                        item.desc = newDesc;   // Update description
                    }
                });
            }
        }
    });
};

const deleteItem = (data, projectName, title) => {
    data.projects.forEach(project => {
        for (const projectKey in project) {
            const projectInfo = project[projectKey];
            if (projectInfo.name === projectName) {
                projectInfo.items = projectInfo.items.filter(item => item.title !== title); // Remove item
            }
        }
    });
};

const updateProject = (data, oldName, newName) => {
    data.projects.forEach(project => {
        for (const projectKey in project) {
            const projectInfo = project[projectKey];
            if (projectInfo.name === oldName) {
                projectInfo.name = newName; // Update project name
            }
        }
    });
};

const deleteProject = (data, projectName) => {
    data.projects = data.projects.filter(project => {
        return !Object.values(project).some(projectInfo => projectInfo.name === projectName);
    });
};

const saveData = (data) => {
    fs.writeFileSync('./backend/db.json', JSON.stringify(data));
};

// Example usage
const dataGetter = fs.readFileSync('./backend/db.json');
const potato = JSON.parse(dataGetter);

// Updating an item
updateItem(potato, "trash", "new task", "updated task", "updated description");
saveData(potato);

// Deleting an item
deleteItem(potato, "trash", "rem");
saveData(potato);

// Updating a project
updateProject(potato, "trash", "updated trash");
saveData(potato);

// Deleting a project
deleteProject(potato, "nottrash");
saveData(potato);