import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import useReducer from '../feartures/user/userSlice';
import movieReducer from '../feartures/movie/movieSlice';

const store = configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
