db.getCollection('Restaurants').find({
    $and: [
        { $or: [{ "name": /Thai$/ }, { "address.street": /Street$/ }, { "address.zipcode": '17988' }] }
    ]
})