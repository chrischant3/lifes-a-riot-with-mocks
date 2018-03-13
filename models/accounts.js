var Datastore = require('nedb'),

  accounts = new Datastore({
    filename: __dirname + '/../db/accounts.db',
    autoload: true,
    timestampData: true
  });

module.exports = accounts;