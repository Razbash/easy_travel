const tokenModel = require('../models/token-model');
const axios = require('axios');

class TokenService {
    async generateToken() {
        let token;
        await tokenModel.deleteMany({});

        await axios.post(process.env.AMADEUS_API_URL_V1 + '/security/oauth2/token', {
            grant_type: 'client_credentials',
            client_id: process.env.AMADEUS_CLIENT_ID,
            client_secret: process.env.AMADEUS_CLIENT_SECRET
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(async response => {
            token = response.data.access_token;
            await tokenModel.create({accessToken: token});
        })
        .catch(error => {
            console.log(error);
        });

        return token;
    }

    async getToken() {
        const tokens = await tokenModel.find();
        const token = tokens[0].accessToken

        return token;
    };
}

module.exports = new TokenService();