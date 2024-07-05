import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

interface InitialState {
  status: string;
  dataList: Array<{ [key: string]: any }>;
  data: {
    [key: string]: any;
  };
  message: string;
}

export const getFakeProducts = createAsyncThunk(
  "products",
  async (page: number) => {
    try {
      const res: AxiosResponse = await axios.get(
        `https://fakestoreapi.com/products?limit=${page}`
      );
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response);
      }
    }
  }
);

const initialState: InitialState = {
  status: "pending",
  dataList: [],
  data: {},
  message: "",
};

export const fakeProductsSlice = createSlice({
  name: "fake-products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFakeProducts.fulfilled, (state, action) => {
      const data = action.payload;
      state.dataList.push(...data);
      state.status = "fulfilled";
    });
  },
});
