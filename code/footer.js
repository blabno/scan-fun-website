import React from 'react';
import {
  COLLECTOR_APP_ANDROID_URL,
  COLLECTOR_APP_IOS_URL,
  DISTRIBUTOR_APP_ANDROID_URL,
  DISTRIBUTOR_APP_IOS_URL,
  MANAGER_APP_ANDROID_URL,
  MANAGER_APP_IOS_URL
} from './config';
import Container from './container';
import Row from './row';


const Footer = ({ _body, _ID, _relativeURL }) => (
  <Container>
    <Row rowCols={1} rowColsSm={2} rowColsMd={3} rowColsLg={4}>
      <ul className={'list-unstyled'}>
        <li><a href={_relativeURL('/polityka-prywatnosci', _ID)}>Polityka prywatności</a></li>
        <li><a href={_relativeURL('/dokumentacja', _ID)}>Dokumentacja</a></li>
      </ul>
      <div>
        <div>Aplikacja dla zbierających kupony:</div>
        <a href={COLLECTOR_APP_ANDROID_URL}>Android</a> | <a href={COLLECTOR_APP_IOS_URL}>iOS</a>
      </div>
      <div>
        <div>Aplikacja dla biznesu:</div>
        <a href={MANAGER_APP_ANDROID_URL}>Android</a> | <a href={MANAGER_APP_IOS_URL}>iOS</a>
      </div>
      <div>
        <div>Aplikacja Dystrybutor:</div>
        <a href={DISTRIBUTOR_APP_ANDROID_URL}>Android</a> | <a href={DISTRIBUTOR_APP_IOS_URL}>iOS</a>
      </div>
    </Row>
    <Row>
      <div className={'copyright'}>
        {_body}
      </div>
    </Row>
  </Container>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
