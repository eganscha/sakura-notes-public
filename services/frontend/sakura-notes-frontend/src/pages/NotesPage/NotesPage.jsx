import Styles from './NotesPage.module.css';
import {useEffect, useState} from "react";
import getAllNotesByTag from "../../utils/API/requests/getAllNotesByTag.js";
// import getAllNotesByEmail from "../../utils/API/requests/getAllNotesByEmail.js";
import NotesList from "../../components/NotesList/NotesList.jsx";
import {useSearchParams} from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function NotesPage() {
    const [notes, setNotes] = useState(null);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');  // string or null
    const email = searchParams.get('email'); // string or null

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = null;

                if(tag) {
                    response = await getAllNotesByTag(tag);
                } else if (email) {
                    // response = await getAllNotesByEmail(email);
                }

                if (response) {
                    setNotes(response);
                }
            } catch (exception) {
                console.error(exception)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <SearchBar></SearchBar>
            {notes ? (<NotesList notes={notes}/>) : null}
        </div>
    );
}

export default NotesPage;