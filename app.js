var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
require('./models/Pokemon');
require('./models/User');
require('./models/Item');
var User = mongoose.model('User');

var GITHUB_CLIENT_ID = //id
var GITHUB_CLIENT_SECRET = //secret

var FACEBOOK_APP_ID =  //id
var FACEBOOK_SECRET_ID = //secret

var GOOGLE_CLIENT_ID = //id
var GOOGLE_CLIENT_SECRET = //secret

var pokemon = require('./routes/pokemon');
var users = require('./routes/users');
var items = require('./routes/items');
var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({resave: true, saveUninitialized: true, secret: '8347098023afaePokemon394938jakdjfMaster29482034923'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://ec2-54-148-77-110.us-west-2.compute.amazonaws.com:4444/auth/github/callback'
}, function(accessToken, refreshToken, profile, done) {
    User.findOne({
      logMethodId: profile.id
    }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log('no user in database')
          var initPokedex = [];
          for (var i = 1; i <= 151; i++) {
            entry = {
              name: "???",
              avatarUrl: "http://www.crossfitpulse.com/wp-content/uploads/2012/12/question-mark.jpg",
              type: "???",
              pokedexNumber: i,
              caught: false
            };
            initPokedex.push(entry);
          }
          console.log(profile)
          user = new User({
            user: profile.displayName,
            logMethodId: profile.id,
            picture: profile._json.avatar_url,
            achievements: [],
            pokedex: initPokedex,
            activePokemon: [],
            inactivePokemon: [],
            backpack: [],
            settings: []
          });
          user.save(function(err) {
            if (err) console.log(err);
            return done(err, user);
          });
        }
        else {
          console.log('user in database')
          return done(err, user);
        }
    }); 
  }))

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_SECRET_ID,
  callbackURL: 'http://ec2-54-148-77-110.us-west-2.compute.amazonaws.com:4444/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {
    User.findOne({
      logMethodId: profile.id
    }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log('no user in database')
          var initPokedex = [];
          for (var i = 1; i <= 151; i++) {
            entry = {
              name: "???",
              avatarUrl: "http://www.crossfitpulse.com/wp-content/uploads/2012/12/question-mark.jpg",
              type: "???",
              pokedexNumber: i,
              caught: false
            };
            initPokedex.push(entry);
          }
          user = new User({
            user: profile.displayName,
            logMethodId: profile.id,
            picture: "http://graph.facebook.com/" + profile.id + "/picture?type=large",
            achievements: [],
            pokedex: initPokedex,
            activePokemon: [],
            inactivePokemon: [],
            backpack: [],
            settings: []
          });
          user.save(function(err) {
            if (err) console.log(err);
            return done(err, user);
          });
        }
        else {
          console.log('user in database')
          return done(err, user);
        }
    }); 
  }))

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://ec2-54-148-77-110.us-west-2.compute.amazonaws.com:4444/auth/google/callback'
}, function(accessToken, refreshToken, profile, done) {
    User.findOne({
      logMethodId: profile.id
    }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log('no user in database')
          pic = profile.photos[0].value
          pic = pic.substring(0, pic.indexOf('?'));
          var initPokedex = [];
          for (var i = 1; i <= 151; i++) {
            entry = {
              name: "???",
              avatarUrl: "http://www.crossfitpulse.com/wp-content/uploads/2012/12/question-mark.jpg",
              type: "???",
              pokedexNumber: i,
              caught: false
            };
            initPokedex.push(entry);
          }
          user = new User({
            user: profile.displayName,
            logMethodId: profile.id,
            picture: pic,
            achievements: [],
            pokedex: initPokedex,
            activePokemon: [],
            inactivePokemon: [],
            backpack: [],
            settings: []
          });
          user.save(function(err) {
            if (err) console.log(err);
            return done(err, user);
          });
        }
        else {
          console.log('user in database')
          return done(err, user);
        }
    }); 
  }))
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use('/', index);
app.use('/pokemon', pokemon);
app.use('/user', users);
app.use('/items', items);

app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', {
  successRedirect: '/home',
  failureRedirect:'/auth'
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/home',
  failureRedirect:'/auth'
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/home',
  failureRedirect:'/auth'
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
