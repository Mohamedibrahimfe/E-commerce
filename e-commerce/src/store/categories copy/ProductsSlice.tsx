import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByPrefix from "./act/actGetProductByPrefix";
import { ICategory } from "@types";
import { IProduct } from "customTypes";
interface ICategoriesState {
  records: ICategory[];
  loading: IProduct;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};
const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByPrefix.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { actGetProductsByPrefix };
export default ProductsSlice.reducer;
