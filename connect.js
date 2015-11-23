/**
 * Created by 1205982 on 23/11/2015.
 * The first part of our connection code is to import the mongoDB library.
 * In NodeJS this is called �require�.
 * In Node, just like normal Javascript �//� is a comment.
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
