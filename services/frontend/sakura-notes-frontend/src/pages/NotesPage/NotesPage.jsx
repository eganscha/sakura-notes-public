import Styles from './NotesPage.module.css';
import {useEffect} from "react";
import getSingularNoteByID from "../../utils/API/requests/getSingularNoteByID.js";

function NotesPage() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const note = await getSingularNoteByID("27b60ec7-5654-4988-b8c1-bb3d804fbc13")
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