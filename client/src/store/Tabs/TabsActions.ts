import { AppDispatch } from '..';
import { tabsSlice } from './TabsSlice';

export const selectTab = (payload: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(tabsSlice.actions.switchTab(payload));
    };
};