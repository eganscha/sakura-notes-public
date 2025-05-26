import styles from "./LandingPage.module.css";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import LogoWithText from "../../components/LogoWithText/LogoWithText.jsx";
import { Container } from "@mui/material";
import CreateButton from "../../components/CreateButton/CreateButton.jsx";
import SearchButton from "../../components/SearchButton/SearchButton.jsx";
import ExplorePopularNotes from "../../components/ExplorePopularNotes/ExplorePopularNotes.jsx";
import BrowseByTag from "../../components/BrowseByTag/BrowseByTag.jsx";

function LandingPage() {
    const [enteredTag, setEnteredTag] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <header className={styles.header}>
                <LogoWithText></LogoWithText>
                <CreateButton></CreateButton>
                <form className={styles.searchContainer} onSubmit={handleSubmit}>
                    <SearchBar></SearchBar>
                    <SearchButton></SearchButton>
                </form>
            </header>

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
