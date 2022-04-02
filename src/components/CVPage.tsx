import { Box } from '@mui/material';
import { Component } from 'react';

export default class CVPage extends Component<{ title: string }> {

  render() {
    return (
      <Box sx={{ m: 2 }}>
        <h2>{this.props.title}</h2>
          {this.props.children}
      </Box >
    );
  }
}