import PropTypes from 'prop-types';
import React from 'react';
import Row from './row';

const Screenshot = ({ _body, _ID, _relativeURL, imgUrl, bodyOnTheLeft = true }) => {
  const children = [];
  const imageColumnIndex = bodyOnTheLeft ? 1 : 0;
  const columnClasses = { [imageColumnIndex]: 'col-12 col-sm-6 col-md-4' };
  if (bodyOnTheLeft) {
    children.push(_body);
  }
  children.push(<div className={'image'}><img src={_relativeURL(imgUrl, _ID)} className={'img-fluid'}/></div>);
  if (!bodyOnTheLeft) {
    children.push(_body);
  }
  return (
    <Row className={'screenshot'} columnClasses={columnClasses}>{children}</Row>
  )
};

Screenshot.propTypes = {
  bodyOnTheLeft: PropTypes.bool,
  imgUrl: PropTypes.string.isRequired
};

Screenshot.defaultProps = {};

export default Screenshot;
