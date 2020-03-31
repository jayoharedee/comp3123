// Exercise 4:  Multiple Operators 
// Use the $and operator to create multiple conditions.
// https://docs.mongodb.com/manual/reference/operator/query/and/ 
// Build a query that does the following: 
// - Using the ​$in​ operator filter the​ cuisines​ that are ​"Bakery",
//   "Chicken", "Hamburgers", "American" 
// - Using the ​$ne​ operator filter out the documents that have ​city​ ​"Brooklyn"
// - Using the ​$gt​ operator include only documents that have ​restaurant_Id​
//   greater than 4000000 
// - Exclude columns _id.  Include cuisine, name, city, restaurtant_id 
// - Sort Descending on ​restaurant_id 

db.Restaurants.find(
    {$and: [
        { cuisine: { $in: ["Bakery", "Chicken", "Hamburgers"  ] } }, 
        { city: { $ne: "Brooklyn" } } ,
        { restaurant_id : { $gt: '4000000'} }        
        ] },
    { _id: 0, cuisine: 1, name: 1, city: 1, restaurant_id:1 }
).sort({ restaurant_id: -1 })