/**
 * 
 * @param {string} name 
 * @param {string} url (optional) 
 * @returns {string} value
 * @see https://stackoverflow.com/a/901144/10057996
 */
 function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * 
 */
function getCurrentUrlPath(){
    console.log(location.protocol);
    console.log(location.hostname);
    console.log(location.pathname);
    var url = location.protocol + '//'+location.hostname+location.pathname;
    console.log(url);
    return url;
}