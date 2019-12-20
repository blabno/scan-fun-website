import PropTypes from 'prop-types';
import React from 'react';
import { hasBody } from './util';


const Card = ({ _body, img, cardTitle }) => (
  <div className="card">
    {img && <img src={img.src} className="card-img-top" alt={img.alt}/>}
    <div className="card-body">
      {cardTitle && <h5 className="card-title">{cardTitle}</h5>}
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
  cardTitle: PropTypes.string,
};

Card.defaultProps = {};

export default Card;
