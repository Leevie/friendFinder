 var path = require("path")  // Nate had this in his code -- need to ask him why??  Shouldn't server.js have and use this?


// Nate wrapped this in a function and assigned to 'module.exports'.  I get the 'module.exports, but why wrap all of these calls into a function?
// module.exports =   
// Researched --  reference: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
{
  module.exports = function(app) {
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/pics", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/pics"));
    });
  };
}
