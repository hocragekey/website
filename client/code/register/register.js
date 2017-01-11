'use strict';

// User creation form
$('#register').on('submit', function(event) {
  var name = event.target[0].value,
      email = event.target[1].value,
      pw1 = event.target[2].value,
      pw2 = event.target[3].value,
      errFqn = function(msg) {
        $('#error').html('<p>' + msg + '</p>');
      };

  if(pw1 !== pw2) {
    event.preventDefault();
    return errFqn('Your passwords do not match.');
  }

  ss.rpc('user.create', {
    name: name,
    email: email,
pw: pw1
  }, function(err, resp) {
    if(err) {
        return errFqn(err);
    }

      window.location.href = '/';
  });
});
