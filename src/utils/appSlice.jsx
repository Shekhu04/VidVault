import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app", // The name of this slice of state.
    initialState: {
        isMenuOpen: true, // Initial state: the menu is open by default.
    },

    reducers: {
       toggleMenu : (state) => {
        state.isMenuOpen = !state.isMenuOpen; // This toggles (reverses) the current state of the menu.
       },
       closeMenu: (state) => {
        state.isMenuOpen = false;
       },
    },
});


export default appSlice.reducer;
export const {toggleMenu, closeMenu} = appSlice.actions;