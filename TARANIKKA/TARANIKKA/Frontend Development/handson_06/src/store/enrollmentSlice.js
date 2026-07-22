import { createSlice } from '@reduxjs/toolkit';

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: { enrolledCourses: [] },
  reducers: {
    enroll: (state, action) => {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload);
      }
    },
    unenroll: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(id => id !== action.payload);
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;