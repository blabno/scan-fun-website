import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { hasBody } from './util';


const Row = ({ _body, children, rowCols }) => (
  <div className={'container'}>
    <div className={classNames(['row', rowCols ? `row-cols-${rowCols}` : null])}>
      {hasBody(_body) && <div className={'col'}>{_body}</div>}
      {children instanceof Array ? children.map(
        (child, index) => (<div className={'col'} key={index}>{child}</div>)) : (
        <div className={'col'}>{children}</div>)}
    </div>
  </div>
);

Row.propTypes = {
  /**
   * _body: (test)(12)
   */
  _body: PropTypes.node,
  children: PropTypes.node
};

Row.defaultProps = {};

export default Row;
