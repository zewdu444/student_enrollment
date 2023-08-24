import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';



const store = configureStore({
    reducer: {
        student: studentReducer
    }
});

export default store;
