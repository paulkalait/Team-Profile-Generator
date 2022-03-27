//where the prompt inquirer answers will be passed through to create an html template




function generateMarkdown(teamStaff){
    employeeCards = ""
    for(let i = 0; i < teamStaff.length; i++){
      if(teamStaff[i].getRole() == "Engineer"){

        employeeCards += ` 
        <div class="card m-2" style="width:18rem;">
        <div class="card-body shadow p-3">
          <h5 class="card-title">Name: ${teamStaff[i].getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${teamStaff[i].getRole()}</h6>
          <p class="card-text"> ID : ${teamStaff[i].getId()}</p>
          <p class="card-text">Github:<a href="https://github.com/${teamStaff[i].getGithub()}" class="card-link mb-2 github">${teamStaff[i].getGithub()}</a></p>
          <p class="card-text"><i class="fa fa-envelope" style="font-size:20px; margin-right: 3px;"></i> Email: <a href="mailto:${teamStaff[i].getEmail()}"class="card-link">${teamStaff[i].getEmail()}</a></p>
        </div>
      </div>`
      }else if(teamStaff[i].getRole() ==="Intern"){

        employeeCards += ` 
        <div class="card m-2" style="width: 18rem;">
        <div class="card-body shadow p-3">
          <h5 class="card-title">Name: ${teamStaff[i].getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${teamStaff[i].getRole()}</h6>
          <p class="card-text"> ID : ${teamStaff[i].getId()}</p>
          <p class="card-text"> School: ${teamStaff[i].getSchool()}</p>
          <p class="card-text"><i class="fa fa-envelope" style="font-size:20px; margin-right: 3px;"></i> Email: <a href="mailto:${teamStaff[i].getEmail()}"class="card-link">${teamStaff[i].getEmail()}</a></p>
        </div>
      </div>`
      }else if(teamStaff[i].getRole() === "Manager"){

        employeeCards += `
        <div class="card m-2" style="width: 18rem;">
        <div class="card-body shadow p-3">
          <h5 class="card-title">Name: ${teamStaff[i].getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${teamStaff[i].getRole()}</h6>
          <p class="card-text"> ID : ${teamStaff[i].getId()}</p>
          <p class="card-text">Office Number: ${teamStaff[i].getOfficeNumber()}</p>
          <p class="card-text"><i class="fa fa-envelope" style="font-size:20px; margin-right: 3px;"></i> Email: <a href="mailto:${teamStaff[i].getEmail()}"class="card-link">${teamStaff[i].getEmail()}</a></p>
        </div>
      </div>`
      }
    }

    return ` <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header class="jumbotron">
      <h1 class="display-3 d-flex justify-content-center">Team Generator</h1>
      <p class="lead"> </p>
    </header>

    <div class="m-5 row justify-content-center">
    
    ${employeeCards}
    </div>
    `
}

module.exports = generateMarkdown;