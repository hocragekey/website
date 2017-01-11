'use strict';

exports.actions = function (req, res, ss) {
    req.use('session');
    return {

        create: function (data) {
            var email = data.email;

            var dbu = Data.findUser(email, function (err, result) {
                if (result) {
                    return res('User already exists with that email address.')
                }

                Data.insertUser(data, res);
            });
        },

        login: function (d) {
            Data.findUser(d.email, function (err, result) {
                if (result.length === 0) {
                    return res('Couldn\'t find a user with that email address');
                }

                var u = result[0];

                if (u.pw !== d.pw) {
                    return res('Wrong password.');
                }

                req.session.setUserId(d.email);
                res(0, true);
            });
        }

    };

};
