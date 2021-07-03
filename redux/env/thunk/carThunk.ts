import { createAsyncThunk } from "@reduxjs/toolkit";
import { CarModel } from "../types";

// cars request
export const requestCarList = createAsyncThunk<
  CarModel[],
  any,
  { rejectValue: any }
>("get/carList", async (data, thunkApi) => {
  const response = await fetch(`https://run.mocky.io/v3/54e572f0-e034-4789-a7d1-941c2430ec6c`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });

  const resData = await response.json();
  // console.log("status===>", resData)
  if (response.status >= 400 && response.status < 500) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue(resData.message);
  }

  if (response.status >= 500) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue("something went wrong with server");
  }

  return resData as CarModel[];
});
