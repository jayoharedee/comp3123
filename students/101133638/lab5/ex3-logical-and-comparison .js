// Exercise 3: Logical and Comparison Operators 
// https://docs.mongodb.com/manual/reference/operator/query-comparison/
// https://docs.mongodb.com/manual/reference/operator/query-logical/ 

// 1. We can use the​ ‘$eq’ operator​ to be more explicit in our query 
// for cuisine. Using comparison operators we can use both
// ​‘$eq’ equal​ operator and the ​‘$ne’ not equal​ operator. 
db.Restaurants.find({ cuisine: { $eq: "Delicatessen" } }, { _id: 0, cuisine: 1, name: 1, city: 1 }).sort({ name: -1 })

// 2. Write a query that uses the ​$and​ logical query operator,
// ​$eq​ and​ $ne​ comparison query operators.  The query must return
// the following:
// - All cuisines that are ​equal​ to Delicatessen ​and​ the city is
//   ​not equal​ to Brooklyn 
// - The selected columns must include cuisines, name and city,
//   but exclude id 
// - The sorting order must be Ascending Order on the name 

db.Restaurants.find(
    {$and: [{ cuisine: { $eq: "Delicatessen" } }, { city: { $ne: "Brooklyn" } } ] },
    { _id: 0, cuisine: 1, name: 1, city: 1 }
).sort({ name: -1 })