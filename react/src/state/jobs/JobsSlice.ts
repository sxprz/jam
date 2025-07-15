import { createSlice } from '@reduxjs/toolkit';
import type { Job } from '@/domain/model/jobs/Job.ts';

interface StoreState {
    isLoading: boolean;
    jobs: Job[];
}

const initialState: StoreState = {
    isLoading: false,
    jobs: [],
};

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
});

export default jobsSlice.reducer;
