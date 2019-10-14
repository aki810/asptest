window.onload = function writeCookie(){
  document.cookie = 'mjasp_adcode=' + getParam('adcode');
}

function getAcodeFromCookie() { 
  var r = document.cookie.indexOf('mjasp_adcode');
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
