import API from "../API.js";
import NoteModel from "../../models/NoteModel.js";

// Description: Adds a single note.
// ------------------------------------------------------------------
// Request: POST: BASE_URL/notes
// Headers: "Content-Type": "application/json"
// Body: {
//   "email": "eganscha@gmail.com",
//   "content": "Hallo welt! :)",
//       "tags": [
//         "urgent",
//         "cloud computing"
//       ]
// }
// ------------------------------------------------------------------
/*  Response Sample:
{
  "note": {
    "id": "99f8aabc-f735-47b3-aef3-166883875463", <-- Response is a note with an ID!
    "email": "eganscha@gmail.com",
    "content": "Hallo welt! :)",
    "tags": [
      "urgent",
      "cloud computing"
    ]
  }
}
*/
async function addSingularNote(email, content, tags) {
    const filteredTags = tags.filter((tag) => { return tag.trim() !== ""; });
    console.log(email, content, tags);
    const url = API.BASE_URL + API.ENDPOINTS.ADD_SINGULAR_NOTE;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ email, content, tags: filteredTags }),
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

export default addSingularNote;
