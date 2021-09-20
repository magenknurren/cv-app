import {
    List,
    ListItem,
    ListItemText,
    Paper,
} from '@material-ui/core';
import { Component } from 'react';
import data from '../data/persona.json';
import styles from './comp.style.module.css'

export default class Home extends Component {

    person = data.map((data) => {
        return { firstName: data.firstName, lastName: data.lastName, birthday: data.birthday, email: data.email };
    })

    render() {
        return (
            <div className={styles.home}>
                <Paper className={styles.text} >
                    <h2>Welcome</h2>
                    This is a little Curriculum Vitae project. It is written in React(LINK) with Material-UI (LINK).
                    There is no database attached and all the data is provided by JSON files.

                    <h3>Sources</h3>
                    <List dense={false}>
                        <ListItem>
                            <ListItemText
                                primary="Material UI "
                                secondary="https://mui.com/"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Placeholder"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Placeholder"
                            />
                        </ListItem>
                    </List>

                </Paper>
            </div>
        );
    }
}