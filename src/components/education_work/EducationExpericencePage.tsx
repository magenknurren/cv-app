import { Component } from 'react';
import educationData from '../../data/education.json';
import workData from '../../data/work.json';
import CVPage from '../CVPage';
import AccordionTimeline from './AccordionTimeline';
import TimelineComponent from './TimelineComponent';

export default class EducationExperiencePage extends Component {

	render() {
		return (
			<CVPage title='Education And Experience'>
				<AccordionTimeline title='Work'>
					<TimelineComponent first_node_text='here it starts' data={workData}></TimelineComponent>
				</AccordionTimeline>
				<AccordionTimeline title='Education'>
					<TimelineComponent first_node_text='learned to walk' data={educationData}></TimelineComponent>
				</AccordionTimeline>
			</CVPage>
		);
	}
}