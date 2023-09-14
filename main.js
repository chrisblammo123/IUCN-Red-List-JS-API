
// External Node Modules

const axios = require('axios');					// HTTP Client for Node.js


// Local Files

const config = require('./config.json');		// Mostly just for the API token


// Variables

// presumably not needed with axios over other node modules
// const base = 'https://apiv3.iucnredlist.org/api/v3/'
// var query = ''
// var parameter = ''			// takes in parameter optional var from func converts to "/:xxx" format 
// var requiresToken = true			// All but at most four require the token
// will probably have something like: requiresToken = query.containedinlist(big list of possible queries)
// var endpoint = base + query + parameter + (requiresToken ? '?token=' + config.token : '')



module.exports = class IUCNRedList {
	constructor(apiKey) {
		axios.defaults.params = {}
		axios.defaults.baseURL = 'https://apiv3.iucnredlist.org/api/v3/'
		axios.defaults.params['token'] = apiKey
		axios.defaults.geaders
		// axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;		// ignore for now
		// Yeah the info I saw was unreliable but it should work now
	}

	// async proMatches() {
	// 	const { data } = await axios.get(`${this.baseUrl}/proMatches`);
	// 	return data;
	// }

	async version() {
		const { data } = await axios.get('/version', {'token': null});
		return data;
	}

	// TODO: Change to class later
	async countries() {
		const { data } = await axios.get('/country/list');
		return data;
	}
}


