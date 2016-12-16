

fetch('http://localhost:3010/cars').then(res => res.json()).then(cars => console.log(cars));

function doIt(fn) {

	fn(3);

}

doIt(function(t) {
	console.log(t);
});



try {

	let t = 5;

	{
		let y = t;

		setTimeout(function() {

			//throw Error('the world has ended...');

			console.log('did it!');
			console.log(t);
			console.log(y);

		},0);

	}

	t = 10;


	console.log('made it here!');

} catch(err) {
	console.log('yippee! I caught the error!');
}