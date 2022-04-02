import RectangleIcon from '@mui/icons-material/Rectangle';
import { Rating } from '@mui/material';
import { Component } from 'react';

const customStyle = {
  "& .MuiRating-iconFilled": {
    color: "red"
  }
};

export default class SkillRating extends Component<{ value: number, info: string }> {

  render() {
    return (
      <Rating
        max={10}
        defaultValue={this.props.value}
        readOnly
        sx={customStyle}
        icon={<RectangleIcon />}
        emptyIcon={<RectangleIcon />}
      />
    );
  }
}