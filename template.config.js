// template.config.js
module.exports = {
  placeholderName: 'ProjectName', // Default placeholder for the project name
  templateDir: './template', // Path to the template directory
  placeholders: {
    ProjectName: {
      type: 'string',
      message: 'What is your project name?',
      default: 'MyNewProject',
    },
    PackageName: {
      type: 'string',
      message: 'What is the package name?',
      default: 'com.example.mynewproject',
    },
    AuthorName: {
      type: 'string',
      message: "What is the author's name?",
      default: 'Your Name',
    },
  },
};
