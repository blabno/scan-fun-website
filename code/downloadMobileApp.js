import PropTypes from 'prop-types';
import React from 'react';
import ContainerWithOneRow from './containerWithOneRow';


//TODO google-play.png and app-store.png should have exactly the same sizes
const DownloadMobileApp = ({ _ID, _relativeURL, androidUrl, iosUrl }) => {
  return (
    <ContainerWithOneRow>
      <div className={'download-mobile-app'}>
        <div>Pobierz aplikację mobilną:</div>
        <a href={androidUrl}>
          <img src={_relativeURL('/assets/images/google-play.png',_ID)} alt={'Pobierz aplikację z Google Play'}/>
        </a>
        <a href={iosUrl}>
          <img src={_relativeURL('/assets/images/app-store.png',_ID)} alt={'Pobierz aplikację z App Store'}/>
        </a>
      </div>
    </ContainerWithOneRow>
  );
};

DownloadMobileApp.propTypes = {
  _relativeURL: PropTypes.func.isRequired,
  androidUrl: PropTypes.string.isRequired,
  iosUrl: PropTypes.string.isRequired
};

DownloadMobileApp.defaultProps = {};

export default DownloadMobileApp;

