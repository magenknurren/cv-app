import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Component } from 'react';
import data from '../data/persona.json';
import portrait from '../data/portrait.jpg';
import CVPage from './CVPage';

export default class Persona extends Component {

	render() {

		const personaContent = [];
		for (const [key, value] of Object.entries(data[0])) {
			personaContent.push(
				<div key={key}>
					<Typography variant="h5" component="h2">
						{value}
					</Typography>
					<Typography color="textSecondary" gutterBottom>
						{key}
					</Typography>
				</div>
			);
		}

		return (
			<CVPage title='Persona'>
				<Grid container spacing={2}>
					<Grid sx={{ flexGrow: 1 }} item md={6} >
						<Card>
							<CardContent>
								{personaContent}
							</CardContent>
						</Card>
					</Grid>
					<Grid sx={{ flexGrow: 1 }} item md={6}>
						<Card>
							<CardMedia
								component="img"
								height="500"
								width="300"
								image={portrait}
								alt="Portrait picture"
							/>
						</Card>
					</Grid>
				</Grid>
			</CVPage>
		);
	}
}