import styles from "./CreateNewNoteForm.module.css";
import CustomTextField from "../CustomTextField/CustomTextField.jsx";
import {useState} from "react";
import {Button, Container} from "@mui/material";
import {Link, useNavigate} from "react-router";
import addSingularNote from "../../utils/API/requests/addSingularNote.js";

function CreateNewNoteForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [tag3, setTag3] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const createdNote = await addSingularNote(email, content, [tag1, tag2, tag3]);
                if(createdNote) {
                    navigate("/");
                }
            } catch (exception) {
                console.log(exception);
            }
        }
        fetchData();
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <CustomTextField isRequired={true} type={"email"} id={"email"} label={"E-Mail"}
                             value={email} onChange={e => setEmail(e.target.value)} />
            <CustomTextField isRequired={true} type={"text"} id={"content"} label={"Content"}
                             value={content} onChange={e => setContent(e.target.value)} />

            <CustomTextField isRequired={false} type={"text"} id={"tag-1"} label={"Tag-1 (optional)"}
                             value={tag1} onChange={e => setTag1(e.target.value)} />
            <CustomTextField isRequired={false} type={"text"} id={"tag-2"} label={"Tag-2 (optional)"}
                             value={tag2} onChange={e => setTag2(e.target.value)} />
            <CustomTextField isRequired={false} type={"text"} id={"tag-3"} label={"Tag-3 (optional)"}
                             value={tag3} onChange={e => setTag3(e.target.value)} />

            <Container sx={{
                display: "flex",
                width: "80%",
                justifyContent: "space-between",
            }}>
                {/*Back Button*/}
                <Link to={"/"} style={{ textDecoration: "none", width: "33%" }}>
                    <Button type={"button"} variant="contained" sx={{
                        width: "100%",
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--base-black)',
                        color: 'white',
                        margin: '16px',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    }}>Back</Button>
                </Link>

                {/*Submit Button*/}
                <Button type={"submit"} variant="contained" sx={{
                    width: "33%",
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
                }}>Create</Button>
            </Container>
        </form>
    );
}

export default CreateNewNoteForm;