import styles from './Header.module.css';
import LogoWithText from "../LogoWithText/LogoWithText.jsx";
import CreateButton from "../CreateButton/CreateButton.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchButton from "../SearchButton/SearchButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router";

function Header() {
    const [enteredTag, setEnteredTag] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if(enteredTag) {
            navigate(`/notes?tag=${enteredTag}`);
        }
    }

    return (
        <header className={styles.header}>
            <LogoWithText></LogoWithText>
            <CreateButton></CreateButton>
            <form className={styles.searchContainer} onSubmit={handleSubmit}>
                <SearchBar value={enteredTag} onChange={e => setEnteredTag(e.target.value)}></SearchBar>
                <SearchButton></SearchButton>
            </form>
        </header>
    );
}

export default Header;