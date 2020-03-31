// Exercise 2:  Projections, Query and Sorting 
// There are three main components of the MongoDB query: 
// 1. Filter — Query 
// 2. Select Columns (Fields) — Projections 
// 3. Sort 

// 1. Type the following ​query​ to filter the result set to only return 
// the Japanese cuisine. Then execute the query. 
db.getCollection('Restaurants').find(
    { "cuisine": "Japanese" }
)


// 2. Using ​projections ​to select we can select which columns to either 
// include ‘1’ or exclude ‘0’ in the query. 
db.getCollection('Restaurants').find(
    { "cuisine" : "Japanese" }, // query
    { "cuisine":1, "name":1 }   // field projection
)


// 3. We can sort the collection result set by using the ​cursor.sort() ​method.
// Use ‘1’ for Ascending Order and ‘-1’ for Descending Order. 
db.Restaurants.find({}).sort({city: -1})
db.Restaurants.find({}).sort({cuisine: 1})
db.Restaurants.find( {}, { name: 1, address: 1, cuisine: 1, city: 1 }).sort({city: 1}, {cuisine: 1})


// 4. Write a query that will do the following
// 1. Filter on ‘Japanese’' cuisine using the​ $eq​ logical operator
// 2. Include the id, cuisines, name and city, resturant_id columns.  
db.Restaurants.find( { cuisine: {$eq: "Japanese" } }, { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 } )

// 3. Sort the restaurant_id in Ascending Order. 
// Below is the expected result set.  
db.Restaurants.find({}).sort( {_id:-1} )

