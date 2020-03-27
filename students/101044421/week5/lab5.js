// Exercise 1: Creating Collections and Documents
db.getCollection("Restaurants").find({});

// Exercise 2:: Projections, Query and Sorting
// 1. Type the following query to filter the result set to only return the Japanese cuisine. Then execute the query.

db.getCollection("Restaurants").find({ "cuisine": "Japanese" });

//2. Using projections to select we can select which columns to either include ‘1’ or exclude ‘0’ in thequery
db.getCollection("Restaurants").find(
    { "cuisine": "Japanese" },
    { "cuisine": 1, "name": 1 });

//3. We can sort the collection result set by using the cursor.sort() method. Use ‘1’ for Ascending Order and ‘-1’ for Descending Order.

db.getCollection("Restaurants")
.find(
    { "cuisine": "Japanese" },
    { "cuisine": 1, "name": 1 })
.sort(
    { "name": -1 });

//4. Write a query that will do the following
// 1. Filter on ‘Japanese’' cuisine using the $eq logical operator
// 2. Include the id, cuisines, name and city, resturant_id columns.
// 3. Sort the restaurant_id in Ascending Order.

db.getCollection("Restaurants")
.find(
    { "cuisine": {$eq: "Japanese"} },
    { "_id": 1, "cuisine": 1, "name": 1, "city": 1, "restaurant_id": 1 })
.sort(
    { "restaurant_id": 1 });

// Exercise 3:Logical and Comparison Operators
// 1. We can use the ‘$eq’ operator to be more explicit in our query for cuisine. Using comparison operators we can use both ‘$eq’ equal operator and the ‘$ne’ not equal operator.

db.getCollection("Restaurants")
.find(
    { "cuisine": {$eq: "Delicatessen"} },
    { "_id": 0, "cuisine": 1, "name": 1, "city": 1 })
.sort(
    { "name": -1 });

//2. Write a query that uses the $and logical query operator, $eq and $ne comparison query operators. The query must return the following:
// 1. All cuisines that are equal to Delicatessen and the city is not equal to Brooklyn
// 2. The selected columns must include cuisines, name and city, but exclude id
// 3. The sorting order must be Ascending Order on the name

db.getCollection("Restaurants")
.find(
    { $and : [ {"cuisine": {$eq: "Delicatessen" }}, {"city": {$ne: "Brooklyn" }}]},
    { "_id": 0, "cuisine": 1, "name": 1, "city": 1 })
.sort(
    { "name": 1 });

// Exercise 4:Multiple Operators
db.getCollection("Restaurants")
.find(
    { $and : [ 
        {"cuisine": {$in: ["Bakery", "Chicken", "Hamburgers", "American"] }},
        {"city": {$ne: "Brooklyn" }},
        {"restaurant_id": {$gt: "4000000" }}]},
    { "_id": 0, "cuisine": 1, "name": 1, "city": 1, "restaurant_id": 1 })
.sort(
    { "restaurant_id": -1 });

// Exercise 5:Filtering on Array Columns
db.getCollection("Restaurants")
.find(
    { "address.building": {$eq: "1008" }},
    { "restaurant_id": 1, "address.street": 1, "name": 1, "city": 1 })
.sort(
    { "restaurant_id": 1 });


db.getCollection("Restaurants")
.find(
    { $or : [ 
        {"name": /Thai/ },
        {"address.street": /Street/ },
        {"address.zipcode": {$eq: "17988" }}]},
    { "restaurant_id": 1, "address": 1, "name": 1, "city": 1 });
