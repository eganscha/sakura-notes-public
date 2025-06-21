import Styles from './NotesPage.module.css';
import { useEffect, useState } from "react";
import getAllNotesByTag from "../../utils/API/requests/getAllNotesByTag.js";
import getAllNotesByEmail from "../../utils/API/requests/getAllNotesByEmail.js";
import NotesList from "../../components/NotesList/NotesList.jsx";
import { useSearchParams } from "react-router";
import Header from "../../components/Header/Header.jsx";
import { Container } from "@mui/material";

function NotesPage() {
    const [notes, setNotes] = useState(null);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');  // string or null
    const email = searchParams.get('email'); // string or null

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = null;

                if (tag) {
                    response = await getAllNotesByTag(tag);
                } else if (email) {
                    response = await getAllNotesByEmail(email);
                }

                if (response) {
                    setNotes(response);
                }
            } catch (exception) {
                console.error(exception)
            }
        }
        fetchData();
    }, [tag, email]);

    return (
        <div>
            <Header></Header>
            <Container sx={{
                marginTop: '48px'
            }}>
                {tag ? <h1 style={{ marginBottom: '8px' }}>Notes tagged with "{tag}"</h1> : null}
                {email ? <h1 style={{ marginBottom: '8px' }}>Notes of "{email}"</h1> : null}
                {notes && notes.length > 0 ? (<NotesList notes={notes} />) : (<p>No Notes</p>)}
            </Container>
        </div>
    );
}

export default NotesPage;