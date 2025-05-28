import styles from "./CustomTextField.module.css";
import TextField from '@mui/material/TextField';

function CustomTextField({ isRequired, type, id, value, placeholder, label, onChange }) {
    return (
        <TextField required={isRequired} type={type} id={id} value={value}
                   placeholder={placeholder} label={label} onChange={onChange} sx={{
            width: '100%',
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: 'var(--base-black)',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--base-black)',
            },
        }}/>
    );
}

export default CustomTextField;