import { createSlice } from '@reduxjs/toolkit';
import { IError } from '../types';
import { toast } from 'react-toastify';
import { fetchingStatuses, sliceNames } from '../constants';

const sliceName = sliceNames.errors;

const initialError = {};

const rejectedRegExp = new RegExp(`/${fetchingStatuses.rejected}`);

const errors = createSlice({
  name: sliceName,
  initialState: {} as Record<string, IError>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      // @ts-ignore
      (action) => action.type.endsWith(fetchingStatuses.rejected),
      (state, action) => {
        const { error, payload } = action;
        const actionType = action.type.replace(rejectedRegExp, '');
        state[actionType] = {
          error,
          payload,
        } as IError;
        const message = payload?.detail || error?.message;
        toast.error(message);
      }
    );
  },
});

export const errorsActions = errors.actions;

export const errorsSelectors = {
  selectState: (state) => state[sliceName],
  selectByType: (type) => (state) => state[sliceName][type] || initialError,
};

export const errorsReducer = errors.reducer;
