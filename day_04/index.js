import {readFile} from "./readANDWrite.js";
const fileData = async(path)=>{
    try{
        const data = await readFile(path);
        console.log(data);
    } catch (error){
        console.log("unable to read");
    }
}
export const writeFile = async (path, data) => {
    try{
        await fs.writeFile (path, data);
    } catch (error){
        console.log("unable to find data")
    }
}
writeData("./students.json",`{id:4, name:"D"}`);