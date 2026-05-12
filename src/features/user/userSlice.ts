import { getAddress } from "../../services/apiGeocoding";

import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Position } from "../../types";

function getPosition() {
  return new Promise<GeolocationPosition>(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


export const fetchAddress = createAsyncThunk<{ position: Position; address: string }, void>(
  "user/fetchAdress",
  async function () {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };


  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;


  return { position, address };
});


type UserState = {
  username: string;
  status: "idle" | "loading" | "error";
  position: Position;
  address: string;
  error: string;
};

const initialState: UserState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(fetchAddress.pending,
    (state) => { state.status = 'loading'; })
    .addCase(fetchAddress.fulfilled, (state, action) => {
      state.position = action.payload.position;
      state.address = action.payload.address;
      state.status = 'idle';
    })
    .addCase(fetchAddress.rejected, (state) => {
      state.status = 'error';
      state.error = 'there was an error getting your address';

    })
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer; 
