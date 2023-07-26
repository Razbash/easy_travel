import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IMostTravelDestination from '../../features/FlightMostTraveledDestinations/interface';

interface ProductsState {
    loading: boolean,
    error: string,
    flights: IMostTravelDestination[],
}

const initialState:ProductsState = {
    loading: false,
    error: '',
    flights: [],
};

export const MostTraveledDestinationsSlice = createSlice({
    name: 'flights',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IMostTravelDestination[]>) {
            state.loading = false;
            state.flights = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.error = action.payload.message;
        },
    },
});

export default MostTraveledDestinationsSlice.reducer;