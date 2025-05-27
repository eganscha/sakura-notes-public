import styles from "./LandingPage.module.css";
import { Container } from "@mui/material";
import ExplorePopularNotes from "../../components/ExplorePopularNotes/ExplorePopularNotes.jsx";
import BrowseByTag from "../../components/BrowseByTag/BrowseByTag.jsx";
import Header from "../../components/Header/Header.jsx";

function LandingPage() {
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
                <ExplorePopularNotes></ExplorePopularNotes>
                <BrowseByTag></BrowseByTag>
            </Container>
        </>
    );
}

export default LandingPage;
