import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Component } from 'react';
import data from '../data/persona.json';
import portrait from '../data/portrait.jpg';

export default class Persona extends Component {

	render() {

		const personaContent = [];
		for (const [key, value] of Object.entries(data[0])) {
			personaContent.push(
				<div>
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
			<Box sx={{ m: 2 }}>
				<h2>Persona</h2>
				<Box sx={{ m: 2 }}>
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
				</Box>
			</Box>
		);
	}
}