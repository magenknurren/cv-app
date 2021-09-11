import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TranslateIcon from '@material-ui/icons/Translate';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Page Titel
          </Typography>
          <IconButton onClick={() => { window.open(process.env.REACT_APP_GITHUB_REPO); }} edge="end" className={classes.githubButton} color="inherit" aria-label="github">
            <GitHubIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="translate">
            <TranslateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
