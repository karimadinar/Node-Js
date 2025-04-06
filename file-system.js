const fs = require("fs");

// Create a file with "Hello Node" content
fs.writeFileSync("welcome.txt", "Hello Node");

// Read the content of the file and log it to the console
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
