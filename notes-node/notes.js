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



const getAll = () => {
	console.log('get all');
};

const getNote = (title) => {
	console.log("reading", title);
};

const removeNote = (title) => {
	const notes = fetchData();
	const remainingNotes = notes.filter((note) => note.title !== title);
	saveNotes(remainingNotes);
	return notes.length !== remainingNotes.length;


};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
