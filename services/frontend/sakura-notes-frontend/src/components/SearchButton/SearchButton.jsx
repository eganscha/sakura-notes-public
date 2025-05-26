import Styles from './SearchButton.module.css';
import {Button} from "@mui/material";

function searchButton() {
    return (
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
    );
}

export default searchButton;