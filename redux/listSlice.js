import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },

  reducers: {
    addToList: (state, action) => {
      state.list.push({ ...action.payload });
    },
    removeFromList: (state, action) => {
      const removeFromList = state.list.filter(
        (item) => item.id !== action.payload.id
      );
      state.list = removeFromList;
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export default listSlice.reducer;
