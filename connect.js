/**
 * Created by 1205982 on 23/11/2015.
 * file to connect nodejs to mongodb
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;