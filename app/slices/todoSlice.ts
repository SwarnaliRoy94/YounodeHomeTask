import {createSlice} from '@reduxjs/toolkit';

export interface TodoItem {
  id: number;
  title: string;
  body: string;
  image: string;
}

const initialState = [] as TodoItem[];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    storeTodos: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {storeTodos} = todoSlice.actions;
export default todoSlice.reducer;
