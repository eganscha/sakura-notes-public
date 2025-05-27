import Styles from "./Note.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router';

function Note( { email, tags, content} ) {
    const listTags = tags.map(tag =>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {tag}
        </Typography>
    );

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                { listTags }
                <Typography variant="h5" component="div">
                    { content }
                </Typography>
                <Typography variant="body2">
                    <br/>
                    { email }
                </Typography>
            </CardContent>
            <Link to={`/notes?tag=${email}`} className={Styles.link}>
                <CardActions>
                    <Button size="small">Notes of User</Button>
                </CardActions>
            </Link>
        </Card>
    );
}

export default Note;