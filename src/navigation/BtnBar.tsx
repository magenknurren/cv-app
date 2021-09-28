import GitHubIcon from '@mui/icons-material/GitHub';
import TranslateIcon from '@mui/icons-material/Translate';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    title?: string;
    onMenuClick?: any;
}

export default function BtnBar(props: Props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={props.onMenuClick} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography component="div" sx={{ flexGrow: 1, mr: 2 }} variant="h6" align="center">
                        Curriculum Vitae
                    </Typography>
                    <Box sx={{ mr: 2 }}>
                        <IconButton onClick={() => { window.open(process.env.REACT_APP_GITHUB_REPO); }} edge="end" color="inherit" aria-label="github">
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                    <IconButton edge="end" color="inherit" aria-label="translate" onClick={() => alert("TODO")}>
                        <TranslateIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}