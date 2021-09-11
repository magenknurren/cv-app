import Fab from '@material-ui/core/Fab';
import MailIcon from '@material-ui/icons/Mail';


export default function ContactFabButton() {
    return (
        //akwardly surrounded with the link to preved opening an additional tab for mailto:...
        <a href={process.env.REACT_APP_MAIL_TO} target="_blank" rel="noreferrer" >
            <Fab color="secondary" aria-label="mail me" >
                <MailIcon />
            </Fab >
        </a >
    );
}
