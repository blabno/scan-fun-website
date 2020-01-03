import PropTypes from 'prop-types';
import React from 'react';
import Container from './container';
import Row from './row';
import { hasBody } from './util';

const getChildren = (_body, children) => {
  const result = [];
  if (hasBody(_body)) {
    result.push(_body);
  }
  if (children instanceof Array) {
    return result.concat(children);
  }
  if (children) {
    result.push(children);
  }
  return result;
};

const ContainerWithOneRow = ({ _body, children, className, columnClasses, rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl }) => (
  <Container className={className}>
    <Row {...{ columnClasses, rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl }}>
      {getChildren(_body, children)}
    </Row>
  </Container>
);

ContainerWithOneRow.propTypes = {
  /**
   * _body: (test)(12)
   */
  _body: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  columnClasses: PropTypes.object,
  rowCols: PropTypes.number,
  rowColsMd: PropTypes.number,
  rowColsSm: PropTypes.number,
  rowColsLg: PropTypes.number,
  rowColsXl: PropTypes.number
};

ContainerWithOneRow.defaultProps = {};

export default ContainerWithOneRow;
