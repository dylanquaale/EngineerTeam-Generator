                const generateTeam = team => {

                    // create the manager html
                    const generateManager = manager => {
                        return `
                <div class="card employee-card">
                    <div class="card-header bg-primary text-white">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
                        `;
                    };
                
                    // create the html for engineers
                    const generateEngineer = engineer => {
                        return `
                <div class="card employee-card">
                    <div class="card-header bg-primary text-white">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
                        `;
                    };
                
                    // create the html for interns
                    const generateIntern = intern => {
                        return `
                <div class="card employee-card">
                    <div class="card-header bg-primary text-white">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
                        `;
                    };
                
                    const html = [];
                
                    html.push(team
                        .filter(employee => employee.getRole() === "Manager")
                        .map(manager => generateManager(manager))
                    );
                    html.push(team
                        .filter(employee => employee.getRole() === "Engineer")
                        .map(engineer => generateEngineer(engineer))
                        .join("")
                    );
                    html.push(team
                        .filter(employee => employee.getRole() === "Intern")
                        .map(intern => generateIntern(intern))
                        .join("")
                    );
                
                    return html.join("");
                
                }
                
                // export function to generate entire page
                module.exports = team => {
                
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineer Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
            <!--header-->
    <div class="container-fluid">
        <div class="row">
            <h1 class="bg-primary col-12 text-center p-5 text-white">My Team</h1>
        </div>
        ${(generateTeam(team))}
     </div>
     
</body>
</html>
    `
}
    