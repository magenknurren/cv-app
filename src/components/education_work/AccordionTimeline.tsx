import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Component } from 'react';

export default class AccordionTimeline extends Component<{ title: string }> {

  render() {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{this.props.title} </Typography>
        </AccordionSummary>
        <AccordionDetails >
          {this.props.children}
        </AccordionDetails>
      </Accordion>
    );
  }
}