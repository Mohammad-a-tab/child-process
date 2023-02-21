const {exec} = require("child_process");
exec("pwd", (err, stdout, stderr) => {
    if(err) return console.log("Error :", err.message);
    if(stderr) return console.log("StdError :", stderr);
    console.log("stdout : ", stdout);
})
