const fs = require('fs');

const getProjectNames = (data) => 
{
    data.projects.forEach(project => {
        for (const projectKey in project) {
            if (project.hasOwnProperty(projectKey)) {
                const projectInfo = project[projectKey];
                console.log(projectInfo.name);
            }
        }
    });
};

const getProjectItems_ByProjectName = (data, name) =>
{
    data.projects.forEach(project =>
    {
        for(const projectKey in project)
        {
            const projectInfo = project[projectKey];
            if(projectInfo.name == name)
            {    
                    projectInfo.items.forEach(item =>
                    {
                        console.log(item);
                    })
            }
        }
    });
}

const changeDoneBool = (data,name,title) =>
{    
    data.projects.forEach(project =>
    {
        for(const projectKey in project)
        {
            const projectInfo = project[projectKey];
            if(projectInfo.name == name)
            {    
                projectInfo.items.forEach(item =>
                {
                    if(item.title == title)
                    {
                        item.done = !item.done;
                    }
                    
                })
            }
        }
    });
}

const saveData = (data) =>
{
    fs.writeFileSync('./backend/db.json', JSON.stringify(data));
}
// getProjectNames(data);
const dataGetter =fs.readFileSync('./backend/db.json');
const potato = JSON.parse(dataGetter);
changeDoneBool(potato,"trash", "rem");
getProjectItems_ByProjectName(potato,"trash");
saveData(potato)