import Styles from "./TagCard.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea} from "@mui/material";
import {Link} from "react-router";
import styles from "../LogoWithText/LogoWithText.module.css";

function TagCard( {tag} ) {
    return (
        <Link to={`/notes?tag=${tag}`} className={Styles.link}>
            <Card sx={{ minWidth: 230, height: 90,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
                <CardActionArea sx={{
                    transition: 'background-color 0.2s ease-in',
                    width: '100%', height: '100%',
                    '&:hover': {
                        backgroundColor: 'var(--bg-medium)'
                    }
                }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            { tag }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default TagCard;