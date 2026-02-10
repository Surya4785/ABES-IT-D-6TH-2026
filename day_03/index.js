// import fs from 'fs/promises';
// const fileStatus = async(path) => {
    // try{
        // const stats = await fs.stat(path);
        // console.log(stats)
    // } catch(error){
        // console.log("unable to find status")
    // }
// };

import { fileStatus } from "./services.js";
const useFileStats = async(path)=>{
   const stats = await fileStatus(path);
   console.log(stats.size); 
   console.log(stats.isFile());
   console.log(stats.isDirectory());
}
useFileStats("./services.js")