//os,path
const os = require("os");
//console.log(os.userInfo());
//console.log(os.homedir());
//console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
console.log(__dirname);

//PAth

const path = require("path");
// console.log(path);
// console.log(path);

const extensionname = path.extname("index.html");
console.log(extensionname);

const joinname = path.join(__dirname + "/../views");
console.log(joinname);