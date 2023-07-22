import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 0,
};

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState: initialState,
    reducers: {
        switchTab(state, action: PayloadAction<number>) {
            state.activeTab = action.payload;
        }
    },
});

export default tabsSlice.reducer;