import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './student/StudentSlice';
import settingReducer from './setting/SettingSlice';

const store = configureStore({
    reducer: {
        student: studentReducer,
        setting: settingReducer,
    }
});

export default store;
