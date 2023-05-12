// Prompt the user for shape, color and text for logo
// Generate SVG function
// Save the file to the hardrive
// Output result
// Then test
import inquirer from 'inquirer'

import fs from 'fs'

function promptUser() {
    inquirer
    .prompt([
        {
          name: "companyName",
          type: "input",
          message: "What is the name of your company?",
         
        },

        {
            name: "textColor",
            type: "list",
            message: "Please enter a color for your logo text",
            choices: ['blue','red','yellow']
        },

      {
        name: 'color',
        type: "list",
        message: "Please choose a color for your shape",
        choices: ['blue','red','yellow']
      },
      {
          name: "shape",
          type: 'list',
          message: "Please choose a shape",
          choices: ['triangle','square','circle']
        },
    
    ])
    .then(({ companyName, textColor, color, shape}) => {
      let logoColor;
    let textColorHex;
    
    switch (textColor){
        case "blue":
            textColorHex = '#0000FF'
          break;

        case "red":
          textColorHex = '#FF0000'
          break;

          case 'yelllow':
          textColorHex ='#ffff00'
          break;
    }
    
    
    switch (color) {
        case "blue":
            logoColor = '#0000FF'
          console.log('you chose blue')
          break;

        case "red":
          logoColor = '#FF0000'
          break;

          case 'yelllow':
          logoColor ='#ffff00'
          break;

        default:
            logoColor = color.contains('#') ? color : '#FFFFFF'
      }

      let logoShape;

      switch (shape) {
        case "square":
            logoShape = 'square'
          console.log('you chose blue')
          break;

        case "triangle":
          logoShape = 'triangle'
          break;

          case 'circle':
          logoShape ='circle'
          break
      }

const svg = generateSVG(logoShape,logoColor,companyName,textColor)
    
  fs.writeFile("logo.svg", svg, null, () => console.log('Success!'));
   
   })

}



function generateSVG(shape,color, name, textColor) {
    let svgOutput
    if (shape==='circle') {
        svgOutput = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="50" text-anchor="middle" stroke="${textColor}" stroke-width="1px">${name}</text>    
        <circle stroke="${color}" stroke-width="1px" fill="none" cx="50" cy="50" r="50">
            
            </circle>
        </svg>`
    }
    if(shape==='triangle') {
        svgOutput = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="50" text-anchor="middle" stroke="${textColor}" stroke-width="1px">${name}</text>  
        <polygon style="fill:none;stroke:${color}; stroke-width:1px" points="50 15, 100 100, 0 100"/>
       
</svg>`
    }
    if(shape==='square') {
        svgOutput = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="50" text-anchor="middle" stroke="${textColor}" stroke-width="1px">${name}</text>  
        <rect stroke="${color}" stroke-width="1px" fill="none" width="100" height="100" /></svg>
        `
    }
        
    console.log(svgOutput)
    return svgOutput

}

promptUser()

