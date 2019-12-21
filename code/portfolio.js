import React from 'react';
import Row from './row';

const Portfolio = props => (
  <div className={'portfolio'}>
    <Row {...props}/>
  </div>
);

Portfolio.propTypes = Row.propTypes;

Portfolio.defaultProps = Row.defaultProps;

export default Portfolio;
