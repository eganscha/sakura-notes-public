import styles from "./LandingPage.module.css";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import LogoWithText from "../../components/LogoWithText/LogoWithText.jsx";
import {Button, Container} from "@mui/material";
import Note from "../../components/Note/Note.jsx";
import TagCard from "../../components/TagCard/TagCard.jsx";
import CreateButton from "../../components/CreateButton/CreateButton.jsx";

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
                    <Button variant="contained" sx={{
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--fg-light)',
                        color: 'white',
                        margin: '16px',
                        '&:hover': {
                            backgroundColor: 'var(--fg-strong)',
                        },
                    }}>Search</Button>
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
                <h1 style={{ alignSelf: 'flex-start' }} >Explore the most popular Notes</h1>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '48px',
                    gap: '16px'}}>

                    <Note email={"eganscha@gmail.com"} content={"Hello World!"} tags={["WoW", "Amazing!"]}></Note>
                </Container>

                <h2 style={{ alignSelf: 'flex-start', marginTop: '64px' }} >Browse by Tag</h2>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '48px',
                    gap: '16px'}}>
                </Container>
            </Container>
        </>
    );
}

export default LandingPage;
