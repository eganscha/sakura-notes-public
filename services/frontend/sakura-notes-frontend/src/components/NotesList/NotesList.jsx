import styles from './NotesList.module.css';
import Note from '../Note/Note';

function NotesList( { notes } ) {
    const listItems = notes.map((note) =>
        <li className={styles.notesGridItem} key={note.id}>
            <Note
                email={note.email}
                tags={note.tags}
                content={note.content}>
            </Note>
        </li>
    );

    return (
        <ul className={styles.notesGridContainer}>
            {listItems}
        </ul>
    );
}

export default NotesList;