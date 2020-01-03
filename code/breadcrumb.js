import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


const BreadcrumbItem = ({ href, text, isLast }) => (
  <li className={classNames(['breadcrumb-item', { active: isLast }])} aria-current={isLast ? 'page' : undefined}>
    {isLast && <Fragment>{text}</Fragment>}
    {!isLast && <a href={href}>{text}</a>}
  </li>);

const Breadcrumb = ({ _ID, _pages, _relativeURL }) => {
  let segments = _ID.split('/');
  if (segments.length === 1 && segments[0] === 'index') {
    segments.pop();
  }
  segments = segments.map((segment, index) => {
    const path = segments.slice();
    path.length = index + 1;
    return path.join('/');
  });
  const lastIndex = segments.length - 1;
  if (!segments.length) {
    return null;
  }
  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href={_relativeURL('/', _ID)}>Start</a></li>
          {segments.map((segment, index) => (
            <BreadcrumbItem key={index} text={_pages[segment].title} href={_relativeURL(`/${segment}`, _ID)}
                            isLast={index === lastIndex}/>
          ))}
        </ol>
      </nav>
    </Fragment>
  );
};
Breadcrumb.propTypes = {
  _ID: PropTypes.string.isRequired,
  _pages: PropTypes.object.isRequired,
  _relativeURL: PropTypes.func.isRequired,
};

Breadcrumb.defaultProps = {};

export default Breadcrumb;
