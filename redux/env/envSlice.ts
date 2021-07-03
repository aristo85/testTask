import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {requestCarList} from './thunk/carThunk';
import {CarModel} from './types';

export interface envState {
  status: 'loading' | 'idle';
  error: string | null;
  carList: CarModel[];
}

const initialState: envState = {
  error: null,
  status: 'idle',
  carList: [],
};

const envSlice = createSlice({
  name: 'env',
  initialState,
  reducers: {
    sorListtByName: (state, action) => {
      return {
        ...state,
        carList: [...state.carList].sort((a, b) =>
          a.model.localeCompare(b.model),
        ),
      };
    },
    sorListtByRating: (state, action) => ({
      ...state,
      carList: [...state.carList].sort((a, b) =>
        a.rating > b.rating ? 1 : -1,
      ),
    }),
  },
  extraReducers: builder => {
    // confirm account
    builder.addCase(requestCarList.pending, state => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(requestCarList.fulfilled, (state, {payload}) => {
      state.carList = payload;
      state.status = 'idle';
    });

    builder.addCase(requestCarList.rejected, (state, {payload}) => {
      if (payload) state.error = payload;
      state.status = 'idle';
    });
  },
});

export const {sorListtByName, sorListtByRating} = envSlice.actions;
export default envSlice.reducer;
