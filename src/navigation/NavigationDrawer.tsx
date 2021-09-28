import React, { useState } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import Routes from './Routes';
import BtnBar from './BtnBar';
import { Drawer, MenuList, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';

const NavigationDrawer: React.FC<RouteComponentProps> = ({ history, location, match }): JSX.Element => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
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
			<BtnBar onMenuClick={toggleDrawer(true)} />
			<Drawer open={isOpen} onClose={toggleDrawer(false)}>
				<Box
					sx={{ width: 300 }}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<MenuList>
						{Routes.map((prop, key) => {
							return (
								<NavLink to={prop.path} style={{ textDecoration: 'none', color: 'black' }} key={key}>
									<Box sx={{ m: 1.5 }}>
										<ListItem button selected={activeRoute(prop.path)}>
											<ListItemIcon>{prop.icon} </ListItemIcon>
											<ListItemText primary={prop.sidebarName} />
										</ListItem>
									</Box>
								</NavLink>
							);
						})}
					</MenuList>
				</Box>
			</Drawer>
		</div >
	);
};

export default withRouter(NavigationDrawer);
