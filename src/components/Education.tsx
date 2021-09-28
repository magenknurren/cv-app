import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Component } from 'react';
import data from '../data/education.json';


export default class Education extends Component {

    render() {

        const educationContent = [];
        for (const [key, value] of Object.entries(data)) {
            educationContent.push(
                <div>
                    <TableRow sx={{ 'td, th': { border: 0 } }}>
                        <TableCell align="center" sx={{ width: 150 }}>
                            <Typography variant="h6" component="h2">
                                {value.period}
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography variant="h6" component="h2">
                                {value.subject}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {value.place}
                            </Typography>
                            <Typography color="textPrimary" gutterBottom>
                                {value.diploma}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </div>
            );
        }

        return (
            <Box sx={{ m: 2 }}>
                <h2>Education</h2>
                <Paper sx={{ m: 2 }}>
                    <TableContainer>
                        <Table aria-label="edu table">
                            <TableBody>
                                {educationContent}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        );
    }
}