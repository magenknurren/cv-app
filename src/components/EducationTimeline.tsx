import { Box, Paper, Typography } from '@mui/material';
import { Component } from 'react';
import data from '../data/education.json';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default class Education extends Component {

    createTimelineItem(eduElement: any, eduContent: any[], firstElement: boolean) {
        eduContent.push(
            <TimelineItem>
                <TimelineOppositeContent sx={{ mt: -0.5 }} align="right" variant="h6" color="text.primary">
                    {eduElement.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={firstElement ? "success" : "grey"} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ mt: -0.5 }}>
                    <Typography variant="h6" component="span">
                        {eduElement.subject}
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                        <Typography color="textSecondary" gutterBottom>
                            {eduElement.place}
                        </Typography>
                        <Typography color="textPrimary" gutterBottom>
                            {eduElement.diploma}
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
        );
    }

    render() {

        const educationContent: any[] = [];
        for (const [index, value] of Object.entries(data)) {
            const pos: number = +index;
            this.createTimelineItem(value, educationContent, 0 === pos);
        }

        return (
            <Box sx={{ m: 2}}>
                <h2>Education</h2>
                <Paper sx={{ m: 2, pt: 1}}>
                    <Timeline>
                        {educationContent}
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                            </TimelineSeparator>
                            <TimelineContent>The jorney starts</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Paper>
            </Box>
        );
    }
}