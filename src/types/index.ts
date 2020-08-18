import { SerializedError } from '@reduxjs/toolkit';
import { fetchingStatuses, sliceNames } from '../constants';

export type IServerException = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  class?: string;
};

export type IError = {
  error: null | SerializedError;
  payload: null | IServerException;
};

/*
  Constants types
*/

export type IFetchingStatuses = typeof fetchingStatuses[keyof typeof fetchingStatuses];
export type ISliceNames = typeof sliceNames[keyof typeof sliceNames];

/* * */
