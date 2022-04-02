import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { Component } from 'react';
import skillsData from '../../data/skills.json';
import CVPage from '../CVPage';
import SkillRating from './SkillRating';


export default class SkillsKnowledgePage extends Component {

  render() {

    return (
      <CVPage title='Skills And Knowledge'>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Skill/Knowledge</TableCell>
                <TableCell align="left">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillsData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                    <SkillRating value={row.rating} info={row.info}></SkillRating>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CVPage>
    );
  }
}