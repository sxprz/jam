import { configureStore } from '@reduxjs/toolkit';
import JobsReducer from '@/state/jobs/JobsSlice.ts';

export const store = configureStore({
    reducer: {
        jobs: JobsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
