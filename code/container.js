import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ children, className }) => (
  <div className={classNames(['container', className])}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Container.defaultProps = {};

export default Container;
