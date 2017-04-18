import React from 'react';
import PropTypes from 'prop-types';

const FrameworkButton = ({text}) => {
	return (<button className="my-button">{text}</button>);
}

export default FrameworkButton;


FrameworkButton.propTypes = {
  text: PropTypes.string.isRequired
};