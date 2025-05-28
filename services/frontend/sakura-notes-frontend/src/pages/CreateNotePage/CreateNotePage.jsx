import styles from "./CreateNotePage.module.css";
import Header from "../../components/Header/Header";
import {Container} from "@mui/material";
import CreateNewNoteForm from "../../components/CreateNewNoteForm/CreateNewNoteForm.jsx";

function CreateNotePage() {
    return (
        <>
            <Header></Header>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: '48px',
            }}>
                <h1 style={{ marginBottom: '8px', alignSelf: 'flex-start'}}>Create new note:</h1>
                <CreateNewNoteForm></CreateNewNoteForm>
            </Container>
        </>
    );
}

export default CreateNotePage;