import API from "../API.js";
import NoteModel from "../../models/NoteModel.js";

// Description: Gets every note associated with a single tag.
// ------------------------------------------------------------------
// Request: GET: BASE_URL/tag/tag?tag={tag}
// Headers: "Content-Type": "application/json"
// Body: None
// ------------------------------------------------------------------
/*  Response Sample if empty:
{
  "notes": []
}
    Response Sample if NOT empty:
{
  "notes": [
    {
      "id": "27b60ec7-5654-4988-b8c1-bb3d804fbc13",
      "email": "test@example.com",
      "content": "Hallo welt! :)",
      "tags": [
        "urgent",
        "cloud_computing",
        "metal gear"
      ]
    }
  ]
}
*/
async function getAllNotesByTag(tag) {
    const url = API.BASE_URL + API.ENDPOINTS.GET_ALL_NOTES_BY_TAG(tag);
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
        const notes = data.notes.map((note) => {
            return new NoteModel(
                note.id,
                note.email,
                note.content,
                note.tags
            );
        })
        return notes;
    }
}

export default getAllNotesByTag;
