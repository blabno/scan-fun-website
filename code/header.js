import PropTypes from 'prop-types';
import React from 'react';


const Header = ({ _body, _ID, links, _relativeURL }) => (
  <div className={'container'}>
    <div className={'row'}>
      <div className={'col'}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href={_relativeURL('/', _ID)}>Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {links.map(({ href, text }, index) => (<li className="nav-item" key={index}>
                <a className="nav-link" href={_relativeURL(href, _ID)}>{text}</a>
              </li>))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  /**
   * links: - href: /for-business
   *          text: For business
   */
  links: PropTypes.array.isRequired,
};

Header.defaultProps = {};

export default Header;
