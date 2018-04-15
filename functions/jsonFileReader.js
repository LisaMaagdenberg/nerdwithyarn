var fs = require('fs');

var jsonReader = function(filename, callback){
	fs.readFile(filename, 'utf-8', function (err, data) {
		if (err) {
			console.log("NOOOOOOOOOOOOOooooooooo.....");
			throw err;
		}
		var parsed = JSON.parse(data);
		callback(parsed);
	})
}

module.exports = jsonReader;
