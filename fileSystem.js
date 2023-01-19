const fs = require('fs')

//console.log(fs);
console.log('Before Reading');
// const Doc = fs.readFileSync('./doc.txt','utf-8')
// console.log(Doc);
//read a file doc.txt
fs.readFile('./doc.txt','utf-8' ,(err,data)=>{
    // create a file named doc2.txt 
    /* fs.writeFile('./doc2.txt','hajer w eya sahitou' ,(err,data)=>{
        console.log('created succ');
    }) */

    // append /modify  and add a text into doc2.txt / text from doc.txt
    fs.appendFile('./doc2.txt', data,(err,data)=>{
        console.log('updated succ');
    })
})
console.log('after reading');


