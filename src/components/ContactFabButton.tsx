import MailIcon from '@mui/icons-material/Mail';
import { Fab } from '@mui/material';

export default function ContactFabButton() {
    return (
        //akwardly surrounded with the link to preved opening an additional tab for mailto:...
        <a href={process.env.REACT_APP_MAIL_TO} target="_blank" rel="noreferrer" >
            <Fab sx={{bottom: 16, right: 16, position: 'fixed'}} color="secondary" aria-label="mail me" >
                <MailIcon />
            </Fab >
        </a >
    );
}
