import PropTypes from 'prop-types';
import React from 'react';
import Container from './container';
import Row from './row';
import { hasBody } from './util';

const ScreenshotsRow = ({ _body, _ID, _relativeURL, images }) => {
  const children = images.map((image, index) => (<img key={index} src={_relativeURL(image, _ID)}/>));

  return (
    <Container className={'screenshots'}>
      {hasBody(_body) && <Row>{_body}</Row>}
      <Row rowCols={1} rowColsSm={2} rowColsMd={3}>{children}</Row>
    </Container>

  )
};

ScreenshotsRow.propTypes = {
  images: PropTypes.array.isRequired
};

ScreenshotsRow.defaultProps = {};

export default ScreenshotsRow;
