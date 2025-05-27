import Styles from './NotesPage.module.css';
import {useEffect} from "react";
import getSingularNoteByID from "../../utils/API/requests/getSingularNoteByID.js";
import getAllNotesByTag from "../../utils/API/requests/getAllNotesByTag.js";

function NotesPage() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const notes = await getAllNotesByTag("metal gear");
                console.log(notes);
            } catch (exception) {
                console.error(exception)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <p>Hallo Notes! :)</p>
        </>
    );
}

export default NotesPage;