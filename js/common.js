'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '34.248.103.39';
var token = 'f17c70cf-1fab-43a4-8cac-e5b84447bb85';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
