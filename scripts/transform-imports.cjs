const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
};

const files = getAllFiles(path.resolve("./dist"), []);

files.forEach((fileName) => {
  const ext = fileName.split(".").pop();
  if (ext === "ts") {
    const content = fs.readFileSync(fileName).toString();
    const relativePath = path.relative(path.dirname(fileName), "./dist").replace(/\\/g, "/");
    const newContent = content.replace(/ from "~(.*)/g, ` from "${relativePath}/$1`);
    if (content !== newContent) fs.writeFileSync(fileName, newContent);
  }
});
