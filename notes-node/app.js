console.log('Starting App');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');
const argv = yargs.argv;

const command = argv._[0];
console.log("process", command);
console.log("Yargs", argv);

if (command === "add") {
	const newNote = notes.addNote(argv.title, argv.body);
	if (newNote) {
		console.log("successfully added note");
		console.log(`title: ${newNote.title}`);
		console.log(`body: ${newNote.body}`);
	}
	else console.log("you have a duplicate note title");

} else if (command === "list") {
	notes.getAll();
} else if (command === "remove") {
	notes.removeNote(argv.title);
} else if (command === "read") {
	notes.getNote(argv.title);
} else {
	console.log("unrecognized");
}





