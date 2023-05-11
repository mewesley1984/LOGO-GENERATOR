// Prompt the user for shape, color and text for logo
// Generate SVG function
// Save the file to the hardrive
// Output result
// Then test
import inquirer from 'inquirer'

function promptUser() {
    inquirer
    .prompt([
        {
          name: "companyName",
          type: "input",
          message: "What is the name of your company?",
         
        },
      {
        name: 'color',
        type: "list",
        message: "Please choose a color",
        choices: ['blue','red','yellow','green']
      },
      {
          name: "shape",
          type: 'list',
          message: "Please choose a shape",
          choices: ['triangle','square','hexagon','circle']
        },
    
    ])
    .then(({ companyName, color, shape}) => {
      let logoColor;
      switch (color) {
        case "blue":
          console.log('you chose blue')
          break;

        case "car":
          vehicle = new Car(wheels,vehicleColor);
          break;

      }
    
    //  if(vehicleType=="boat"){
    //   return fs.writeFile("boat.html", vehicle.render());
    //  }
    //  if(vehicleType=="car"){
    //   return fs.writeFile("car.html", vehicle.render());
    //  }
   
   })

}

promptUser()
