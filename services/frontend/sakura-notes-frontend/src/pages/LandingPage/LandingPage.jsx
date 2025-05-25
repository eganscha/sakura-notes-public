import styles from "./LandingPage.module.css";
import { useState } from "react";

function LandingPage() {
    const [enteredTag, setEnteredTag] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <form className={styles.landingPageContainer} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="searchByTag">Search by Tag</label>
                    <input name="searchByTag" type="text" placeholder="Search by Tag..."
                           value={enteredTag} onChange={(e) => setEnteredTag(e.target.value)} />
                </div>

                <button>Search</button>
            </form>
        </>
    );
}

export default LandingPage;
