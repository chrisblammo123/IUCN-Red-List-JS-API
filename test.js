// Imports

const IUCNRedList = require('./main.js');			// Main API Wrapper
const config = require('./config.json');			// Config / API Tokens

// Sets the API Key to an empty string if undefined
// The property is not included in example_config.json
const API_KEY = typeof config.testtoken != 'undefined' ? config.testtoken : '';

// Creates the Wrapper API Class
const icun = new IUCNRedList(API_KEY);

// TODO: Add a couple more tests here
(async () => {
	console.log('Checking IUCN Red List API Version:\n...');
	console.log(await icun.version());

	console.log();

	console.log('Querying IUCN Red List API for a List of Countries:\n...');
	console.log(await icun.countries().catch( (err) => {
		console.error(err);
	}));

})();