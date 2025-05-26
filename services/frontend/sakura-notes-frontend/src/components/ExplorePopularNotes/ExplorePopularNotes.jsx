import Styles from "./ExplorePopularNotes.module.css";
import {Container} from "@mui/material";
import Note from "../Note/Note.jsx";

function explorePopularNotes() {
    return (
        <>
            <h1 style={{ alignSelf: 'flex-start' }} >Explore the most popular Notes</h1>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '48px',
                gap: '16px'}}>

                <Note email={"eganscha@gmail.com"} content={"Hello World!"} tags={["Studium", "Cloud Computing"]}></Note>
                <Note email={"k.miller@motherbase.com"} content={"Boss?!"} tags={["Gaming", "Metal Gear"]}></Note>
                <Note email={"pr@hof.de"} content={"Hof ist toll!"} tags={["Hof", "Innenstadt"]}></Note>
            </Container>
        </>
    );
}

export default explorePopularNotes;