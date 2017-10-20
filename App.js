import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MessagesScreen from './screens/MessagesScreen';
import RegisterScreen from './screens/RegisterScreen';
import UsersScreen from './UsersScreen';

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));

// var passport = require('passport');
// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// })
// app.use(passport.initialize());
// app.use(passport.session());
//
// var FacebookStrategy = require('passport-facebook');
//
// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     done(null, {
//         token: accessToken,
//         name: profile.displayName,
//         id: profile.id
//     });
// }));

// app.get('/fb/login', passport.authenticate('facebook'));
// app.get('/fb/login/callback', passport.authenticate('facebook', {
//     successRedirect: '/',
//     failureRedirect: '/fail'
// }))


//Navigator
export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  Messages: {
    screen: MessagesScreen,
  },
}, {initialRouteName: 'Home'});
