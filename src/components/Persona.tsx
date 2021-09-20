import { Component } from 'react';
import data from '../data/persona.json';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './comp.style.module.css'


export default class Persona extends Component {

    person = data.map((data) => {
        return { firstName: data.firstName, lastName: data.lastName, birthday: data.birthday, email: data.email, phone: data.phone };
    })

    render() {
        return (
            <div className={styles.dist}>
                <Card>
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            {this.person[0].firstName} {this.person[0].lastName}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Name
                        </Typography>

                        <Typography variant="h5" component="h2">
                            {this.person[0].birthday}
                        </Typography>
                        <Typography color="textSecondary">
                            Birthdate
                        </Typography>

                        <Typography variant="h5" component="h2">
                            {this.person[0].email}
                        </Typography>
                        <Typography color="textSecondary">
                            Email
                        </Typography>

                        <Typography variant="h5" component="h2">
                            {this.person[0].phone}
                        </Typography>
                        <Typography color="textSecondary">
                            Phone
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        );
    }
}