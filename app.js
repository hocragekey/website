var http = require('http'),
    ss = require('socketstream');

// Define a single-page client called 'main'
ss.client.define('login', {
  view: 'login.html',
  css:  ['libs/reset.css', 'libs/login.css', 'libs/bootstrap.min.css', 'libs/bootstrap-theme.min.css'],
  code: ['libs/jquery.min.js','libs/bootstrap.min.js', 'login'],
  tmpl: '*'
});

// Define a single-page client called 'main'
ss.client.define('main', {
  view: 'app.html',
  css:  ['libs/reset.css', 'libs/login.css', 'libs/bootstrap.min.css', 'libs/bootstrap-theme.min.css'],
  code: ['libs/jquery.min.js','libs/bootstrap.min.js', 'app'],
  tmpl: '*'
});

// Serve this client on the root URL
ss.http.route('/login', function(req, res){
  res.serveClient('login');
});

// Serve this client on the root URL
ss.http.route('/', function(req, res){
  if(!req.session.userId) {
    return res.serveClient('login');
  }

  res.serveClient('main');
});

// Use server-side compiled Hogan (Mustache) templates. Others engines available
ss.client.templateEngine.use(require('ss-hogan'));

// Minimize and pack assets if you type: SS_ENV=production node app.js
if (ss.env === 'production') ss.client.packAssets();

// Start web server
var server = http.Server(ss.http.middleware);
server.listen(3000);

// Start SocketStream
ss.start(server);

//TODO: Build scheduler