import Styles from './NotesPage.module.css';
import {useEffect, useState} from "react";
import getAllNotesByTag from "../../utils/API/requests/getAllNotesByTag.js";
import NotesList from "../../components/NotesList/NotesList.jsx";

function NotesPage() {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllNotesByTag("metal gear");
                setNotes(response);
                console.log(notes);
            } catch (exception) {
                console.error(exception)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {notes ? (<NotesList notes={notes}/>) : null}
        </div>
    );
}

export default NotesPage;