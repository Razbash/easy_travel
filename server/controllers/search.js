const searchService = require("../service/search-service");

class SearchController {
    async flightMostTraveledDestinations(req, res, next) {
        try {
            const {originCityCode, period} = req.query;

            const searchResult = await searchService.flightMostTraveledDestinationsService(originCityCode, period);
            return res.json(searchResult.data);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new SearchController();