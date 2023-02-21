const {exec} = require("child_process");
exec("pwd", (err, stdout, stderr) => {
    if(err) console.log("Error :", err.message);
    if(stderr) console.log("StdError :", stderr);
    console.log("stdout : ", stdout);
})
