
// External Node Modules
const axios = require('axios');					// HTTP Client for Node.js

// Local Files
const config = require('./config.json');		// Mostly just for the API token



module.exports = class IUCNRedList {
	constructor(apiKey) {
		axios.defaults.params = {}
		axios.defaults.baseURL = 'https://apiv3.iucnredlist.org/api/v3/'
		axios.defaults.params['token'] = apiKey
		axios.defaults.geaders
		// axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;		// ignore for now
		// Yeah the info I saw was unreliable but it should work now
	}

	async version() {
		const { data } = await axios.get('/version', {'token': null});
		return data;
	}

	// TODO: Change to class later
	// TODO: add species by country subcommand
	async countries() {
		const { data } = await axios.get('/country/list');
		return data;
	}

	async regions() {
		const { data } = await axios.get('/region/list');
		return data;
	}

	// TODO: Change to class later
	// TODO: Seperate to global, regional
	// TODO: add species count (global, regional)
	// TODO: add citations by name (global, regional)
	// ...
	// ...
	// ...
	async species() {

	}

	// TODO: Change to class later
	// TODO: add threats by name (global, regional)
	// TODO: add threats by id (global, regional)
	async threats() {

	}

	// TODO: Change to class later
	// TODO: add habitats by species name (global, regional)
	// TODO: add habitats by species id (global, regional)
	async habitats() {

	}
	
	// TODO: Change to class later
	// TODO: add CM by name
	// TODO: add CM by id ()
	async conservationMeasures() {

	}

	// TODO: Change to class later
	// TODO: 
	// TODO: 
	async plantGrowthForms() {
		
	}

	// TODO: Change to class later
	// TODO: 
	// TODO: 
	async comprehensiveGroups() {

	}

	// TODO: Add this group as a class
	// Note that no API token is needed
	// TODO: Red list website direct link (name of species)
	// TODO: Red list website redirect (name of species)
	// TODO: Red list website redirect (species id)
	// TODO: Red list website redirect per region (species id / region id)

	// class RedListLinking {
	// 	constructor(a) {
	// 		this.a = a
	// 		this.tokenOverride = {'token': null};
	// 	}

	// 	async directLink(name) {
	// 		const { data } = await axios.get('/weblink/' + name, {'token': null});
	// 		return data;
	// 	}
	// }
}


