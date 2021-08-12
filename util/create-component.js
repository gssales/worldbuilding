require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Por favor, insira um nome de componente válido".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const projectComponents = './src/components/';

if (!fs.existsSync(projectComponents)) {
  fs.mkdirSync(projectComponents)
}

const componentDir = projectComponents + componentName;

if (fs.existsSync(componentDir)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1);
}

fs.mkdirSync(componentDir)

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDir}/${componentName}${template.extension}`,
    template.content
  )
});

console.log("Successfully created component under: " + componentDir.green);


// based on HarveyD's project on Github: https://github.com/HarveyD/react-component-library 
