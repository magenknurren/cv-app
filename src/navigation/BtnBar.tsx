import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TranslateIcon from '@material-ui/icons/Translate';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
    title?: string;
    onMenuClick?: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function BtnBar(props: Props) {

    const classes = useStyles();

    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} onClick={props.onMenuClick} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" align="center">
                        Curriculum Vitae
                    </Typography>
                    <IconButton onClick={() => { window.open(process.env.REACT_APP_GITHUB_REPO); }} edge="end" color="inherit" aria-label="github">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton edge="end" color="inherit" aria-label="translate" onClick ={() => alert("TODO")}>
                        <TranslateIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}