const fs = require('fs');
console.log(fs);
fs.writeFile('demo.txt', "this is ela.she is not so pretty & not so good.She loves cake flower and chocalets.", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("successful");
    }
});

fs.appendFile('demo.txt', "this is ela.she is not so pretty & not so good.She loves cake flower and chocalets.", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("successful");
    }
});

fs.readFile('demo.txt','utf-8' , (error,data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});