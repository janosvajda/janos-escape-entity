/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 * @api private
 */

module.exports = function(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/ /g, '&nbsp;');
    .replace(/!/g, '&#33;');
    .replace(/"/g, '&quot;')
    .replace(/>/g, '&gt;');
    .replace(/'/g, '&#39;')
    .replace(/#/g, '&#35;');
    .replace(/</g, '&lt;')
    .replace(/$/g, '&#36;');
    .replace(/%/g, '&#37;');
    .replace(/&/g, '&#38;');
    .replace(/\(/g, '&#40;');
    .replace(/\)/g, '&#41;');
    .replace(/\*/g, '&#42;');
    .replace(/\+/g, '&#43;');
    .replace(/\,/g, '&#44;');
    .replace(/¢/g, '&cent;');
    .replace(/£/g, '&pound;');
    .replace(/¥/g, '&yen;');
    .replace(/©/g, '&copy;');
    .replace(/§/g, '&sect;');
    .replace(/®/g, '&reg;');
}
