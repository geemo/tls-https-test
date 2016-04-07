'use strict';

const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'localhost',
    port: 443,
    path: '/',
    method: 'GET',
    pfx: fs.readFileSync('../keys/client/client.pfx'),
    rejectUnauthorized: true
};

options.agent = new https.Agent(options);

let req = https.request(options, res => {
	res.setEncoding('utf8');
	res.on('data', data => {
		console.log(data);
	})
});

req.end();

req.on('error', err => {
	console.error(err);
});
