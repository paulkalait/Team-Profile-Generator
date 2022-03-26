//where the prompt inquirer answers will be passed through to create an html template




function generateMarkdown(teamStaff){
    employeeCards = ""
    for(let i = 0; i < teamStaff.length; i++){
      if(teamStaff[i].getRole() == "Engineer"){

        employeeCards += ` 
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name: ${teamStaff[i].getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${teamStaff[i].getRole()}</h6>
          <p class="card-text"> ID : ${teamStaff[i].getId()}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
      }else if(teamStaff[i].getRole() ==="Intern"){

        employeeCards += ` 
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name: ${teamStaff[i].getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${teamStaff[i].getRole()}</h6>
          <p class="card-text"> ID : ${teamStaff[i].getId()}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
      }else if(teamStaff[i].getRole() === "Manager"){

        employeeCards += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name: ${teamStaff[i].getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: ${teamStaff[i].getRole()}</h6>
          <p class="card-text"> ID : ${teamStaff[i].getOfficeNumber()}</p>
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link">Another link</a>
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
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header class="jumbotron">
      <h1 class="display-3 d-flex justify-content-center">Team Generator</h1>
      <p class="lead"></p>
    </header>

    <div class="m-5 row justify-content-center">
    
    ${employeeCards}
    </div>
    `
}

module.exports = generateMarkdown;