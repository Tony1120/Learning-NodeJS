console.log('Starting note.js');

const fs = require('fs');

const fetchData = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json');
		const notes = JSON.parse(notesString);
		return notes;
	} catch (e) {
		return [];
	}
}

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
	const notes = fetchData();
	const note = {
		title,
		body
	};
	const duplicateNote = notes.filter((note) => note.title === title);
	if (duplicateNote.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};



var getAll = () => {
	console.log('get all');
};

var getNote = (title) => {
	console.log("reading", title);
};

var removeNote = (title) => {
	console.log("removing", title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
