import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { errorsReducer } from './errrosSlice';
import { fetchingStatusesReducer } from './fetchingStatusesSlice';
import { sliceNames } from '../constants';

export const store = configureStore({
  reducer: {
    [sliceNames.errors]: errorsReducer,
    [sliceNames.fetchingStatuses]: fetchingStatusesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
