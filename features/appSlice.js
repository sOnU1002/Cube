import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
    yearId: null,
    yearName: null,
    departmentId: null,
    departmentName: null,

    studentYear:null,

  },
  reducers: {
    setChannelInfo: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    setYearInfo: (state,action) => {
      state.yearId = action.payload.yearId;
      state.yearName = action.payload.yearName;
    },
    setDepInfo: (state,action) => {
      state.departmentId = action.payload.departmentId;
      state.departmentName = action.payload.departmentName;
      state.departmentLogo = action.payload.departmentLogo;
    },


    setStudentInfo: (state,action) => {
      state.studentYear = action.payload.studentYear;
    }


  },
});

export const { setYearInfo,setDepInfo } = appSlice.actions;
export const { setChannelInfo } = appSlice.actions;



export const { setStudentInfo } = appSlice.actions;
export const selectStudentYear = (state) => state.app.studentYear;


export const selectChannelId = (state) => state.app.channelId;
export const selectYearId = (state) => state.app.yearId;
export const selectDepId = (state) => state.app.departmentId;

export const selectChannelName = (state) => state.app.channelName;
export const selectYearName = (state) => state.app.yearName;
export const selectDepName = (state) => state.app.departmentName;

export default appSlice.reducer;