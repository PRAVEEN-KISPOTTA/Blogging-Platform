import fs from "fs";

export const writeBlog = (path, blog) =>{
    return fs.writeFileSync(path, blog);
}

export const publishBlog = (path) =>{
    const buffer = fs.readFileSync(path);
    return buffer.toString();
}
