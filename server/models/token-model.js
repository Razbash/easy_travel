const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
    accessToken: {type: String, required: true},
})

module.exports = model('Token', TokenSchema);