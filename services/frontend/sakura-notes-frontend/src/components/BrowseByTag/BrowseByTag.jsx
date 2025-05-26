import Styles from './BrowseByTag.module.css';
import {Container} from "@mui/material";
import TagCard from "../TagCard/TagCard.jsx";

function browseByTag() {
    return (
        <>
            <h2 style={{ alignSelf: 'flex-start', marginTop: '64px' }} >Browse by Tag</h2>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '48px',
                gap: '16px'}}>

                <TagCard tag={"Hof"}></TagCard>
                <TagCard tag={"Studium"}></TagCard>
                <TagCard tag={"Gaming"}></TagCard>
                <TagCard tag={"Cloud Computing"}></TagCard>
                <TagCard tag={"Metal Gear"}></TagCard>
            </Container>
        </>
    );
}

export default browseByTag;