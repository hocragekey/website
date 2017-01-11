var MongoClient = require('mongodb').MongoClient;

var connect = function(res) {
  MongoClient.connect('mongodb://127.0.0.1:27017/golf', function(err, db) {
    res(err, db)
  });
};

var close = function(err, db, res, cb, scope) {
  db.close();
  cb.call(scope, err, res)
};

var Data = function () {

};

Data.prototype.insertUser = function(u, cb) {
  connect(function(err, db) {
    if(err) {
      return res(err);
    }

    db.collection('users').insert(u, function(err) {
      close(err, db, {}, cb);
    });
  });
};

Data.prototype.login = function(u, cb) {
  connect(function(err, db) {
    if(err) {
      return res(err);
    }

    db.collection('users').find(u, function(err, res) {
      close(err, db, res, cb);
    });
  });
};

Data.prototype.signup = function(o, cb) {
  connect(function(err, db) {
    if(err) {
      return res(err);
    }

    db.collection('game').insert(o, function(err, res) {
      close(err, db, res, cb);
    });
  });
};

Data.prototype.drop = function(date, u, cb) {
  connect(function(err, db) {
    if(err) {
      return res(err);
    }

    db.collection('game').insert(o, function(err, res) {
      close(err, db, res, cb);
    });
  });
};

Data.prototype.findUser = function(email, cb) {
  connect(function(err, db) {
    if(err) {
      return res(err);
    }

    db.collection('users').find({email: email}).toArray(function(err, res) {
      close(err, db, res, cb);
    });
  });
};

module.exports = new Data();
