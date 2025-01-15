import { createSlice } from "@reduxjs/toolkit";
import actGetProductByPrefix from "./act/actGetCategories";
import { ICategory } from "@types";
import { TLoading } from "customTypes";
interface ICategoriesState {
  records: ICategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductByPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductByPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductByPrefix.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { actGetProductByPrefix };
export default categoriesSlice.reducer;
