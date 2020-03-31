// Exercise 5:  Filtering on Array Columns 
// We can filter on the nested array data in the following way: 

db.Restaurants.find(
    { "address.building": { $eq: "1008" } },
    { restaurant_id: 1, "address.building": 1, name: 1, city: 1 }
).sort({ restaurant_id: -1 })


// ​To correctly, output the address street we need to flatten out
// the array via aggregation. 
// We can search wildcard values using the dollar $ operator in the 
// following way  
// {name: /Deli$/}
db.Restaurants.find({ "name": /Deli$/ })


// Write a query that does the following:
// Returns a result set where the name is contains "Thai", 
// or the address street contains "Street" or the the address zip code equals 17988 
db.Restaurants.find(
    {$or: [
        {"address.street": /Thai$/},
        {"address.street": /Street$/},
        {"address.zipcode": {$eq: 17988}}
        ]
    })