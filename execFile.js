const {execFile} = require("child_process")
const {exec} = require("child_process");
exec("chmod +x exec.js", (err, stdout, stderr) => {
    if(err) return console.log("Error :", err.message);
    if(stderr) return console.log("StdError :", stderr);
    console.log("stdout : ", stdout);
})
execFile("./exec.js", (err, stdout, stderr) => {
    if(err) return console.log("Error :", err.message);
    if(stderr) return console.log("StdError :", stderr);
    console.log("stdout : ", stdout);
})