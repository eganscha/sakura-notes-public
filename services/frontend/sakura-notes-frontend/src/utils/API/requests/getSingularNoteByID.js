import API from "../API.js";
import NoteModel from "../../models/NoteModel.js";

// Description: Gets a singular note object by its ID.
// ------------------------------------------------------------------
// Request: GET: BASE_URL/notes/{noteID}
// Headers: "Content-Type": "application/json"
// Body: None
// ------------------------------------------------------------------
/* Response Sample:
{
  "note": {
    "id": "affdef8f-4ec6-4335-9891-8715d08d286c",
    "email": "test@example.com",
    "content": "Hallo welt! :)",
    "tags": [
      "urgent",
      "cloud_computing",
      "metal gear"
    ]
  }
}
*/
async function getSingularNoteByID(noteID) {
    const url = API.BASE_URL + API.ENDPOINTS.GET_SINGULAR_NOTE_BY_ID(noteID);
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    };

    const response = await fetch(url, options);
    if(response.status === 200) {
        const data = await response.json();
        return new NoteModel(
            data.note.id,
            data.note.email,
            data.note.content,
            data.note.tags
        );
    }
}

export default getSingularNoteByID;
