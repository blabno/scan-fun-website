import React from 'react';
import Container from './container';
import Row from './row';

const Portfolio = props => (
  <Container className={'portfolio'}>
    <Row {...props}/>
  </Container>
);

Portfolio.propTypes = Row.propTypes;

Portfolio.defaultProps = Row.defaultProps;

export default Portfolio;
