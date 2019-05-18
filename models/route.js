const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let routeSchema = new Schema({
    _id: Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //geos: {
    //    type: [{}],
    //    required: true
   // }
    /*
                type: {
                    name: {
                        type: String,
                        required: true
                    },
                    description: {
                        type: String,
                        required: true
                    },
                    tags: {
                        type: [String],
                        required: true
                    },
                    geo: {
                        longitude: {
                            type: Number,
                            required: true
                        },
                        latitude: {
                            type: Number,
                            required: true
                        },
                        required: true
                    },
                    address: {
                        type: String,
                        required: true
                    },
                    city: {
                        type: String,
                        required: true
                    }
                }*/
    geos: [
        {type: Schema.ObjectId, ref: 'showplaces'}
        ]
});
module.exports = mongoose.model('routes', routeSchema);