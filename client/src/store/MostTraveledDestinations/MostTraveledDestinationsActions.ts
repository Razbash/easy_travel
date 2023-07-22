import { AppDispatch } from '..';
import axios from '../../http/axios';
import { MostTraveledDestinationsSlice } from './MostTraveledDestinationsSlice';

export const fetchMostTraveledDestinations = (originCityCode: any, period: any) => { //todo
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(MostTraveledDestinationsSlice.actions.fetching());
            const response = await axios.get(`/flight-most-traveled-destinations?originCityCode=${originCityCode}&period=${period}`);

            dispatch(MostTraveledDestinationsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(MostTraveledDestinationsSlice.actions.fetchError(error as Error));
        }
    };
};