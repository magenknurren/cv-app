import React, { useState } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
	Drawer,
	MenuList,
	ListItemText,
	ListItemIcon,
	ListItem
} from '@material-ui/core';
import Routes from './Routes';
import BtnBar from './BtnBar';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		drawer: {
			width: 250,
		},
		fullList: {
			width: 'auto',
		},
	}),
);

const NavigationDrawer: React.FC<RouteComponentProps> = ({ history, location, match }): JSX.Element => {

	const classes = useStyles();

	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		console.log("here");
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setIsOpen(open);
	};

	const activeRoute = (routeName: string): boolean => {
		return location.pathname === routeName ? true : false;
	}

	return (
		<div>
			<div className={classes.root}>
				<BtnBar onMenuClick={toggleDrawer(true)} />
			</div>
			<Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
				<div
					className={classes.fullList}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<MenuList>
						{Routes.map((prop, key) => {
							return (
								<NavLink to={prop.path} style={{ textDecoration: 'none', color: 'black' }} key={key}>
									<ListItem button selected={activeRoute(prop.path)}>
										<ListItemIcon>{prop.icon} </ListItemIcon>
										<ListItemText primary={prop.sidebarName} />
									</ListItem>
								</NavLink>
							);
						})}
					</MenuList>
				</div>
			</Drawer>
		</div>
	);
};

export default withRouter(NavigationDrawer);
