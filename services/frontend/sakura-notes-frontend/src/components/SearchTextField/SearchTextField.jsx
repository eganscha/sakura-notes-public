import styles from "./SearchTextField.module.css";
import Box from "@mui/material/Box";
import SearchSharp from '@mui/icons-material/SearchSharp';
import TextField from '@mui/material/TextField';

function SearchTextField({ value, placeholder, onChange }) {

    return (
        <Box className={styles.inputField} sx={{ '& > :not(style)': { m: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchSharp sx={{ color: 'var(--base-grey)', mr: 1, my: 0.5 }} />
                <TextField type={"text"} value={value} placeholder={placeholder} onChange={onChange} id="search-field" label="Search by Tag" variant="standard" sx={{
                    width: '100%',
                    label: {
                        color: 'var(--base-grey)',
                    },
                    '& label.Mui-focused': {
                        color: 'var(--base-black)',
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

export default SearchTextField;