import React from 'react';
import {MANAGER_APP_ANDROID_URL, MANAGER_APP_IOS_URL} from './config';
import DownloadMobileApp from './downloadMobileApp';

const DownloadManagerMobileApp = ({ _relativeURL }) => (
    <DownloadMobileApp _relativeURL={_relativeURL} androidUrl={MANAGER_APP_ANDROID_URL} iosUrl={MANAGER_APP_IOS_URL}/>
);

DownloadManagerMobileApp.propTypes = {};

DownloadManagerMobileApp.defaultProps = {};

export default DownloadManagerMobileApp;
