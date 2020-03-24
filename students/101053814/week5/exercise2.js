//First query
db.getCollection("Restaurants").find({"cuisine":"Japanese"})

//Second query + 3
db.getCollection("Restaurants").find(
    {"cuisine":"Japanese"}, //query
    {"cuisine":1, "name":1} //field projection
   ).sort({"_id":1})
   
// 4. 
db.getCollection("Restaurants").find(
    {"cuisine":{$eq:"Japanese"}},
    {_id:1, "city":1, "cuisine":1, "name":1, "restaurant_id":1}
   ).sort({restaurant_id:1})


