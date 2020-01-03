import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const columnClass = (columnClasses, index) => classNames(['col', columnClasses && columnClasses[index]]);

const rowClassName = ({ rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl }) =>
  classNames(['row',
              rowCols && `row-cols-${rowCols}`,
              rowColsSm && `row-cols-sm-${rowColsSm}`,
              rowColsMd && `row-cols-md-${rowColsMd}`,
              rowColsLg && `row-cols-lg-${rowColsLg}`,
              rowColsLg && `row-cols-xl-${rowColsXl}`]);

const Row = ({ children, columnClasses, rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl }) => (
  <div className={rowClassName({ rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl })}>
    {children instanceof Array ? children.map(
      (child, index) => (<div className={columnClass(columnClasses, index)} key={index}>{child}</div>)) : (
      children && (<div className={'col'}>{children}</div>))}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  columnClasses: PropTypes.object,
  rowCols: PropTypes.number,
  rowColsMd: PropTypes.number,
  rowColsSm: PropTypes.number,
  rowColsLg: PropTypes.number,
  rowColsXl: PropTypes.number
};

Row.defaultProps = {};

export default Row;
