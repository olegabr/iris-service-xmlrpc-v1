let events = {
	xmlrpc: {
	}
};

let tasks = [{
	name: 'xmlrpc.v1.TestMethod',
	handler: 'TestMethod'
}];

module.exports = {
	module: require('./xmlrpc.js'),
	permissions: [],
	tasks: tasks,
	events: {
		group: 'xmlrpc.v1',
		shorthands: events.xmlrpc
	}
};
