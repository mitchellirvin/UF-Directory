/* Not sure if we're supposed to run these ourselves, but I am going to include the includes to test them myself */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Listing = require('./ListingSchema.js'),
	config = require('./config');

mongoose.connect(config.db.uri);
	
/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
	Listing.find({ name: 'Library West'}, function(err, listing) {
		if (err) throw err;
		
		console.log('Library West listing:');
		console.log(listing);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
	Listing.findOneAndRemove({ code: 'CABL' }, function(err, doc) {
		if (err) throw err;
		
		if (doc != null) {
			console.log('Removed the listing below:');
			console.log(doc);
		} else {
			console.log('Already removed the CABL listing');
		}
	});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   // The address is correct. Should we update the name?
	var addy = '100 Phelps Lab P.O. Box 116350 Gainesville, FL  32611';
	Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: addy }, function(err, doc) {
		if (err) throw err;

		console.log("Updated doc:");
	});
	Listing.find({ name: 'Phelps Laboratory'}, function(err, listing) {
		if (err) throw err;
		console.log(listing);
	});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
	Listing.find({}, function(err, docs) {
		if (err) throw err;
		
		console.log('All listings:');
		console.log(docs);
	});
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();