import {createSlice,} from '@reduxjs/toolkit';

const initialState = {
   gotbutton: false,
}

const studentSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setGotButton: (state, action) => {
            state.gotbutton = action.payload;
        },
    }
});

export const {setGotButton} = studentSlice.actions;
export default  studentSlice.reducer;

