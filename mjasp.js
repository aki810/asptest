window.onload = function writeCookie(){
  document.cookie = 'mjasp_adcode=' + getParam('adcode') + ';max-age=1800';
}

function showCookie() {
  alert(getAdcodeFromCookie());
}
  
function getAdcodeFromCookie() { 
  return document.cookie;
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

var mjasp = {
  simpleSubmit: function (parameters) {
    mjasp.get('https://script.google.com/macros/s/AKfycbwZTNj7XP36J0iXIzhVFdD136IxlTxkzNYM-iL92_q8tX8f3bdh/exec',{'p1':getAdcodeFromCookie(),'p2':location.href,'p3':new Date()});
  },
  get: function (url, param){
    let Full_url = url + "?";
    let count = 0;
    for (key in param) {
        if (count++ != 0) Full_url += "&";
        Full_url += key + "=" + param[key]
    }
    var request = new XMLHttpRequest();
    
    request.open('GET', Full_url, true);
    request.responseType = 'json';
 
    request.onload = function () {
      var data = this.response;
      console.log(data);
    };
 
    request.send();
  },
};
