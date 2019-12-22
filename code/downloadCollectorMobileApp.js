import React from 'react';
import { COLLECTOR_APP_ANDROID_URL, COLLECTOR_APP_IOS_URL } from './config';
import DownloadMobileApp from './downloadMobileApp';

const DownloadCollectorMobileApp = ({ _relativeURL }) => (
  <DownloadMobileApp _relativeURL={_relativeURL} androidUrl={COLLECTOR_APP_ANDROID_URL} iosUrl={COLLECTOR_APP_IOS_URL}/>
);

DownloadCollectorMobileApp.propTypes = {};

DownloadCollectorMobileApp.defaultProps = {};

export default DownloadCollectorMobileApp;
