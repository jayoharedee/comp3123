db.getCollection('Restaurants').find(
    { $or: [
        { "address.zipcode": {$eq: "17988"} },
        { "name":/Deli$/},
        {"address.street":/Street$/} ] },
    {"restaurant_id": 1, "address.street":1, "address.zipcode":1, "name":1, "city":1}
    ).sort({"restaurant_id":1})

