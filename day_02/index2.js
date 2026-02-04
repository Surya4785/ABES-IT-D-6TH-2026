import fs from 'fs';
const writeFile = async(path,data)=>{
    try{
        fs.writeFile(path,data);
    console.log('File written successfully');
    }catch(error){
        console.log('Error writing file:');
    }
}
const readFile = async(path) =>{
    try{
        const data = fs.readFile(path,"utf-8");
        console.log(data);
    } catch(error){
        console.log('Error reading file:');
    }
}
const appendFile = async(path,data)=>{
    try{
        await fs.appendFile(path,data);
    console.log('File appended successfully');
    }catch(error){
        console.log('Error appending file:');
    }
}

console.log("before write");
writeFile('hello.txt','Hello, World!');
console.log("after write");

console.log("before read");
readFile('hello.txt');
console.log("after read");

console.log("before append");
appendFile('hello.txt','\nWelcome to Node.js file handling.');
console.log("after append");