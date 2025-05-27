const API = {
	BASE_URL: "http://localhost:8000/api/",
	ENDPOINTS: {
		// POST
		ADD_SINGULAR_NOTE: "notes",
		// GET
		GET_SINGULAR_NOTE_BY_ID: (noteID) => {return `notes/${encodeURIComponent(noteID)}`;},
		GET_ALL_NOTES_BY_EMAIL: (email) => {return `emails/emails?email=${encodeURIComponent(email)}`;},
		GET_ALL_NOTES_BY_TAG: (tag) => {return `tag/tag?tag=${encodeURIComponent(tag)}`;},
	},
};

export default API;
