import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { hasBody } from './util';


const Row = ({ _body, children = [], rowCols }) => {
  return (
    <div className={'container'}>
      <div className={classNames(['row', rowCols ? `row-cols-${rowCols}` : null])}>
        {hasBody(_body) && <div className={'col'}>{_body}</div>}
        {children.map(child => (<div className={'col'}>{child}</div>))}
      </div>
    </div>
  );
};

Row.propTypes = {
  /**
   * _body: (test)(12)
   */
  _body: PropTypes.node.isRequired,
  children: PropTypes.array
};

Row.defaultProps = {};

export default Row;
