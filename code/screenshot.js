import PropTypes from 'prop-types';
import React from 'react';
import Row from './row';

const Screenshot = ({ _body, _ID, _relativeURL, imgUrl, bodyOnTheLeft = true }) => {
  const children = [];
  if (bodyOnTheLeft) {
    children.push(_body);
  }
  children.push(<img src={_relativeURL(imgUrl, _ID)} className={'img-fluid'}/>);
  if (!bodyOnTheLeft) {
    children.push(_body);
  }
  return (
    <Row rowCols={1} rowColsMd={2}>{children}</Row>
  )
};

Screenshot.propTypes = {
  bodyOnTheLeft: PropTypes.bool,
  imgUrl: PropTypes.string.isRequired
};

Screenshot.defaultProps = {};

export default Screenshot;
