import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Typography } from '@mui/material';
import { Component } from 'react';

export default class TimelineComponent extends Component<{ first_node_text: string, data: any }> {

  createTimelineItem(element: any, content: any[], firstElement: boolean) {

    content.push(
      <TimelineItem key={element.period.toString()}>

        <TimelineOppositeContent sx={{ mt: -0.5 }} align="right" variant="h6" color="text.primary">
          {element.period}
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color={firstElement ? "success" : "grey"} />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ mt: -0.5 }}>
          <Typography variant="h6" component="span">
            {element.subject}
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography color="textSecondary" gutterBottom>
              {element.place}
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              {element.diploma}
            </Typography>
          </Box>
        </TimelineContent>

      </TimelineItem>
    );
  }

  render() {

    const timelineContent: any[] = [];
    for (const [index, value] of Object.entries(this.props.data)) {
      const pos: number = +index;
      this.createTimelineItem(value, timelineContent, 0 === pos);
    }

    return (
      <Timeline>
        {timelineContent}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" />
          </TimelineSeparator>
          <TimelineContent>{this.props.first_node_text}</TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }
}