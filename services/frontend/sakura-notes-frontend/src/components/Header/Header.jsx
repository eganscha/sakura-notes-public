import styles from './Header.module.css';
import LogoWithText from "../LogoWithText/LogoWithText.jsx";
import CreateButton from "../CreateButton/CreateButton.jsx";
import CustomTextField from "../CustomTextField/CustomTextField.jsx";
import SearchButton from "../SearchButton/SearchButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router";
import SearchTextField from "../SearchTextField/SearchTextField.jsx";

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
                <SearchTextField value={enteredTag} onChange={e => setEnteredTag(e.target.value)}></SearchTextField>
                <SearchButton></SearchButton>
            </form>
        </header>
    );
}

export default Header;