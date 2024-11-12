const data = require('./db.json');

const getProjectNames = (data) => {
    // Access the projects array
    data.projects.forEach(project => {
        // Each project is an object with dynamic keys
        for (const projectKey in project) {
            if (project.hasOwnProperty(projectKey)) {
                const projectInfo = project["project1"];
                
                projectInfo.items.forEach(item =>{
                    console.log(item.title);
                })
            }
        }
    });
};

// Pass the imported data to the function
getProjectNames(data);
