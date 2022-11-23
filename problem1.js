/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require("fs");
const path = require("path");

let makeFolder = () => {
	let folderPath = path.join(__dirname, "random_JSON");
	fs.mkdir(folderPath, () => {
		for (let i = 0; i < 5; i++) {
			let str = "file" + i + ".JSON";
			let filePath = path.join(folderPath, str);
			//console.log(filePath);
			fs.writeFile(filePath, `This is JSON file ${i}`, (err) => {
				console.log("file number " + i + " created");
			});
		}
		for (let i = 0; i < 5; i++) {
			let str = "file" + i + ".JSON";
			let filePath = path.join(folderPath, str);
			fs.unlink(filePath, (err) => {
				console.log("file number " + i + " deleted");
			});
		}
	});
};
module.exports = makeFolder;
