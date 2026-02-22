import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
  availableProperties: [],
  filters: {
    bhk: [],
    residential: [],
    commercial: [],
    preferenceHousing: "",
    genderPreference: "",
    houseType: [],
    ownerLocation: "",
  },
  searchQuery: "",
  loading: false,
  noPropertiesFound: false,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setAvailableProperties: (state, action) => {
      state.availableProperties = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setNoPropertiesFound: (state, action) => {
      state.noPropertiesFound = action.payload;
    },
  },
});

export const {
  setProperties,
  setAvailableProperties,
  setFilters,
  resetFilters,
  setSearchQuery,
  setLoading,
  setNoPropertiesFound,
} = propertySlice.actions;

export default propertySlice.reducer;
