import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import coursesReducer from './features/courses/coursesSlice';
import progressReducer from './features/progress/progressSlice';
import assessmentReducer from './features/assessment/assessmentSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        courses: coursesReducer,
        progress: progressReducer,
        assessment: assessmentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
