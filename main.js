
// External Node Modules
const http = require('');


// Get files in
const config = require('./config.json');



// Variables
const base = 'https://apiv3.iucnredlist.org/api/v3/'
var query = ''
var parameter = ''			// takes in parameter optional var from func converts to "/:xxx" format 
var requiresToken = true			// All but at most four require the token
// will probably have something like: requiresToken = query.containedinlist(big list of possible queries)
var endpoint = base + query + parameter + (requiresToken ? '?token=' + config.token : '')