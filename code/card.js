import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { hasBody } from './util';


const Card = ({ _body, img, title }) => (
  <div className="card">
    {img && <img src={img.src} className="card-img-top" alt={img.alt}/>}
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {hasBody(_body) && <p className="card-text">{_body}</p>}
    </div>
  </div>
);
Card.propTypes = {
  /**
   * _body: (test)(12)
   */
  _body: PropTypes.node.isRequired,
  /**
   * _body: Hi
   */
  title: PropTypes.string,
};

Card.defaultProps = {};

export default Card;
