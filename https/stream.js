'use strict';

process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('data: ' + chunk);
    }
});

debugger;
let a;
setInterval(() => {
	a = Math.random();
}, 500);
process.stdin.on('date', date => {
	console.log('date');
});
process.stdin.on('end', () => {
    process.stdout.write('end');
});


// process.openStdin();

// let chunks;
// process.stdin.setEncoding('utf8');
// process.stdin.on('readable', () => {
// 	// chunks = process.stdin.read(); 
// 	console.log('asdf');
// 	process.stdin.resume();
// })

// process.stdin.on('end', () => {
// 	console.log('end');
// });