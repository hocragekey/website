//'use strict';
//
//// User login form
//$('#login').on('submit', function(event) {
//    event.preventDefault();
//  var email = event.target[0].value,
//      pw = event.target[1].value,
//      errFqn = function(msg) {
//        $('#error').html('<p>' + msg + '</p>');
//      };
//
//    ss.rpc('user.login', {
//        email: email,
//        pw: pw
//    }, function(err, resp) {
//        if(err) {
//            return errFqn(err);
//        }
//
//        window.location.href = '/';
//    });
//});
