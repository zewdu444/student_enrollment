import {createSlice,} from '@reduxjs/toolkit';

const initialState = {
    student : {
        name: '',
        age: '',
    }
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.student.name = action.payload;
        },
        setAge: (state, action) => {
            state.student.age = action.payload;
        }
    }
});

export const {setName, setAge} = studentSlice.actions;
export default  studentSlice.reducer;



