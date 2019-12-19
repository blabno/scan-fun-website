module.exports = exports = function renderer({ Marked, _relativeURL, _ID }) {

  Marked.link = (href, title, text) => {
    if (
      !href.startsWith('http://') &&
      !href.startsWith('https://') &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      typeof _relativeURL === 'function'
    ) {
      href = _relativeURL(href, _ID);
    }

    return `<a href="${href}"${title ? ` title="${title}"` : ''}>${text}</a>`;
  };

  return Marked;
};
