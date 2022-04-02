import { List, ListItem, ListItemText, Paper } from '@mui/material';
import { Component } from 'react';
import CVPage from './CVPage';

export default class Home extends Component {

	render() {
		return (
			<CVPage title='Welcome'>
				<Paper sx={{ p: 2, textAlign: 'left' }}>
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
			</CVPage>
		);
	}
}