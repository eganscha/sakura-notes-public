import styles from "./SearchBar.module.css";
import Box from "@mui/material/Box";
import SearchSharp from '@mui/icons-material/SearchSharp';
import TextField from '@mui/material/TextField';

function SearchBar() {
    return (
        <Box className={styles.searchBar} sx={{ '& > :not(style)': { m: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchSharp sx={{ color: 'var(--base-grey)', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Search by Tag" variant="standard" sx={{
                    width: '100%',
                    label: {
                        color: 'var(--base-grey)', // default label color
                    },
                    '& label.Mui-focused': {
                        color: 'var(--base-black)', // focused label color
                    },
                    '& .MuiInput-underline:before': {
                        borderBottomColor: 'var(--base-black)',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'var(--base-black)',
                    },
                }}/>
            </Box>
        </Box>
    );
}

export default SearchBar;