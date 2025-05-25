const API = {
	BASE_URL: "http://localhost:8000/api/",
	ENDPOINTS: {
		// POST
		ADD_SINGULAR_NOTE: "notes",
		// GET
		GET_SINGULAR_NOTE_BY_ID: (noteID) => {return `notes/${noteID}`;},
		GET_ALL_NOTE_IDS_BY_EMAIL: (email) => {return `email/${email}`;},
		GET_ALL_NOTE_IDS_BY_TAG: (tag) => {return `tag/${tag}`;},
	},
};

export default API;
