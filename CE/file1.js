const fs = require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
if(data.match("H")){
    console.log("H is present")
    const changeddata = data.replace("H","ABES");
    fs.writeFileSync("./data.txt",changeddata);
}

// fs.unlinkSync("./data2.txt","ABSE promise");
// fs.writeFileSync("./data1.txt","ABES promise");
// fs.appendFileSync("./data1.txt","AKTU promise");
// fs.renameSync("./data1.txt","./data2.txt");