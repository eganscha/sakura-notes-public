import Styles from './CreateButton.module.css';
import {Button} from "@mui/material";
import {Link} from "react-router";

function createButton() {
    return (
        <Link to={"/create-note"}>
            <Button variant="contained" sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: 'var(--base-black)',
                color: 'white',
                margin: '16px',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: 'var(--fg-strong)',
                },
            }}>Create</Button>
        </Link>
    );
}

export default createButton;