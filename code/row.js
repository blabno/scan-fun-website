import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { hasBody } from './util';

const columnClass = (columnClasses, index) => classNames(['col', columnClasses && columnClasses[index]]);

const rowClassName = ({ rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl }) =>
  classNames(['row',
              rowCols && `row-cols-${rowCols}`,
              rowColsSm && `row-cols-sm-${rowColsSm}`,
              rowColsMd && `row-cols-md-${rowColsMd}`,
              rowColsLg && `row-cols-lg-${rowColsLg}`,
              rowColsLg && `row-cols-xl-${rowColsXl}`]);

const Row = ({ _body, children, className, columnClasses, rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl }) => (
  <div className={classNames(['container', className])}>
    <div className={rowClassName({ rowCols, rowColsMd, rowColsSm, rowColsLg, rowColsXl })}>
      {hasBody(_body) && <div className={'col'}>{_body}</div>}
      {children instanceof Array ? children.map(
        (child, index) => (<div className={columnClass(columnClasses, index)} key={index}>{child}</div>)) : (
        children && (<div className={'col'}>{children}</div>))}
    </div>
  </div>
);

Row.propTypes = {
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

Row.defaultProps = {};

export default Row;
