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

const app = express();

// tell express which folder is a static/public folder
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'member'}));
app.set('view engine' , 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('Homework2'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'Homework2', 'member'));
});



app.get('/member/1', function(req, res){

	res.render('member', {
		name: 'Jose Alfonso Marquez',
		email: 'marquez.josealfonso@gmail.com',
		phone: '09550464578',
		imageurl: '/marquez.jpg',
		hobbies: ['Playing Volleyball &', 'Mobile Games']
	})
});

app.get('/member/2', function(req, res){

	res.render('member', {
		name: 'Patricia Navarro',
		email: 'patgnavarro@gmail.com',
		phone: '09173591423',
		imageurl: '/navarro.jpg',
		hobbies: ['Singing &', 'Playing Musical Instruments']
	})

});



app.listen(process.env.PORT || 4000, function() {
	console.log('Server started at port 4000');
});