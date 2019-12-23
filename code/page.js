import PropTypes from 'prop-types';
import React from 'react';
import Breadcrumb from './breadcrumb';
import Row from './row';


/**
 * The page layout component
 */
const Page = ({ bodyClassName, title, stylesheet, header, main, footer, script, _relativeURL, _ID, _pages }) => (
  <html>
  <head>
    <title>ScanFun - {title}</title>
    <meta charSet="utf-8"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link rel="stylesheet" href={_relativeURL(`/assets/css/style.css`, _ID)}/>
    {
      stylesheet != undefined
        ? (<link rel="stylesheet" href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}/>)
        : null
    }
  </head>
  <body className={bodyClassName}>
  <div id={'content'}>
    <header role="banner">
      {header}
    </header>

    <Row>
      <Breadcrumb _ID={_ID} _pages={_pages} _relativeURL={_relativeURL}/>
    </Row>

    <main>
      {main}
    </main>
  </div>

  <footer>
    {footer}
  </footer>

  {
    script != undefined
      ? (<script src={_relativeURL(`/assets/js/${script}.js`, _ID)}/>)
      : null
  }
  </body>
  </html>
);

Page.propTypes = {
  /**
   * bodyClassName: for-business
   */
  bodyClassName: PropTypes.string,

  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
