import Styles from './CreateButton.module.css';
import {Button} from "@mui/material";

function createButton() {
    return (
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
    );
}

export default createButton;