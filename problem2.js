/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
       
        1. Read the given file lipsum.txt

        2. Convert the content to uppercase & write to a new file. 
        Store the name of the new file in filenames.txt

        3. Read the new file and convert it to lower case. 
        Then split the contents into sentences. 
        Then write it to a new file. 
        Store the name of the new file in filenames.txt

        4. Read the new files, sort the content, write it out to a new file. 
        Store the name of the new file in filenames.txt

        5. Read the contents of filenames.txt and delete all the new files 
        that are mentioned in that list simultaneously.
*/
let fs = require("fs");

let problem2 = () => {
	fs.readFile("./data/lipsum.txt", "utf-8", (err, data) => {
		console.log(data);
		console.log("file read \n");
	});

	fs.readFile("./data/lipsum.txt", "utf-8", (err, data) => {
		fs.writeFile("./data/LIPSUM.txt", data.toUpperCase(), (err) => {
			console.log("changed to uppercase");
		});
	});

	fs.readFile("./data/LIPSUM.txt", "utf-8", (err, data) => {
		let arr = data.toLowerCase().split(". ");
		console.log(arr);
		let result = arr.sort().reduce((text, word) => {
			text = text + "\n" + word;
			return text;
		}, "");

		fs.writeFile("./data/filenames.txt", result, (err) => {
			console.log("changed to lowercase and split to lowercase and sorted");
		});
	});
	fs.writeFile("./data/filenames.txt", "lipsumLower", (err) => {
		console.log(" Stored the name of the new file in filenames.txt");
	});
	fs.readFile("./data/filenames.txt", "utf-8", (err, data) => {
		if (err) console.log("Error");
		else {
			console.log("read filenames.txt");
		}
		fs.unlink("data/filenames.txt", (err) => {
			if (err) console.log("Error");
			else {
				console.log("filenames.txt has been deleted");
			}
		});
	});
	return 1;
};
// problem2();
module.exports = problem2;
