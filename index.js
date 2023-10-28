import readline from 'readline';
import path from 'path';

import { writeBlog, publishBlog} from './blogActions.js';

const pathDir = path.join("src", "data", "myblog.txt");

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
userInput.question("Write your blog - ", (blog)=>{
    writeBlog(pathDir, blog);
    console.log(publishBlog(pathDir));
})


