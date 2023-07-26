const $amadeusApi = require('../http');

class SearchService {
    async flightMostTraveledDestinationsService(originCityCode, period) {
        let searchResult;

        await $amadeusApi.get(process.env.AMADEUS_API_URL_V1 + '/travel/analytics/air-traffic/traveled', {
            params: {
                originCityCode,
                period,
            }
        })
        .then(response => {
            searchResult = response.data;
        })
        .catch(error => {
            console.log(error.response.data);
        });

        return searchResult;
    }
}

module.exports = new SearchService();