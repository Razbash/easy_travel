import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tabsReducer from './Tabs/TabsSlice';
import mostTraveledDestinationsReducer from './MostTraveledDestinations/MostTraveledDestinationsSlice';

const rootReducer = combineReducers({
    tabs: tabsReducer,
    mostTraveledDestinations: mostTraveledDestinationsReducer
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];