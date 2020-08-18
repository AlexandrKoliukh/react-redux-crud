export const sliceNames = {
  errors: 'errors' as const,
  fetchingStatuses: 'fetchingStatuses' as const,
};

export const fetchingStatuses = {
  pending: 'pending' as const,
  rejected: 'rejected' as const,
  fulfilled: 'fulfilled' as const,
  idle: 'idle' as const,
};
