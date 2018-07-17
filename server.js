const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');
// const { Client } = require('pg');

// //instantiate client using your db config
// const client = new Client({
// 	database: 'dbms',
// 	user: 'alfonso',
// 	password: '4444',
// 	host: 'localhost',
// 	port: 5432
// });
const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const app = express();

// tell express which folder is a static/public folder
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'member'}));
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine' , 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

//setup handlebars
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));



app.get('/member/1', function(req, res){

	res.render('member', {
		name: 'Jose Alfonso Marquez',
		email: 'marquez.josealfonso@gmail.com',
		phone: '09550464578',
		imageurl: '/img.jpg',
		hobbies: ['VB', 'playing']
	})
});

app.get('/member/2', function(req, res){

	res.render('member', {
		name: 'Patricia Navarro',
		email: 'patgnavarro@gmail.com',
		phone: '09173591423',
		imageurl: '/img.jpg',
		hobbies: ['singing', 'playing']
	})

});



app.listen(process.env.PORT || 8081, function() {
	console.log('Server started at port 8081');
});