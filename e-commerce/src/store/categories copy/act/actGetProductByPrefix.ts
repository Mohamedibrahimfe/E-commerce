import { ICategory } from '@types';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = ICategory[];

const actGetProductByPrefix = createAsyncThunk(
  "categories/getCategories",
  async ({ prefix }: { prefix: string }, thunkAPI) => {
    const { rejectionWithValue } = thunkAPI;
    try {
      const res = await axios.get<TResponse>(
      `http://localhost:3001/products?cat_prefix=${prefix}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectionWithValue(
          error.response?.data.message || error.message
        );
      } else {
        return rejectionWithValue("unknown error");
      }
    }
  }
);

export default actGetProductByPrefix;
