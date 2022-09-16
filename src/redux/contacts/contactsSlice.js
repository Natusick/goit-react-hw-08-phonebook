import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getContacts, addContacts, removeContacts } from "./contactsOperations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },

  extraReducers: {
    [addContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [getContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [removeContacts.pending]: (state) => {
      state.isLoading = true;
    },

    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },

    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },

    [removeContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.filter(item => item.id !== action.payload.id);
    }
  },
});

export const { addContact, removeContact, filterItems } =
  contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
);

