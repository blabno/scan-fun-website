import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


const Col = ({ _body, children }) => (
  <div className={'container'}>
    <div className={'row'}>
      <div className={'col'}>
        {_body}
        {children}
      </div>
    </div>
  </div>
);
Col.propTypes = {
  /**
   * _body: (test)(12)
   */
  _body: PropTypes.node.isRequired,
};

Col.defaultProps = {};

export default Col;
