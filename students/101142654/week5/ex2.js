// all restaurants with Japanese cuisine
db.getCollection('Restaurants').find({ 'cuisine': 'Japanese' })

// add field projection
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { 'cuisine': 1, 'name': 1 })

// sort ascending
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { 'cuisine': 1, 'name': 1 }).sort({ KEY: 1 })

// new query
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { '_id': 1, 'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1 }).sort({ 'restaurant_id': 1 });