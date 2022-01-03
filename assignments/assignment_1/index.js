function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    var arr = process.argv
    return arr[arr.length - 1];
}

function getNameFromEnv() {
    // Write your code here
    process.env.name = "Yash";
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    const readLine = require("readline");
    const rl = readLine.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    rl.question("Please Enter Your Name? ", (answer) =>{
        return answer
    });

}


module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}