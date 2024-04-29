import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

export interface ViewState {
    isTableView: string;
}

const initialState: ViewState = {
    isTableView: "table",
};

export const selectView = (state: RootState) =>
    state.view.isTableView || "table";

export const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        setView: (state: ViewState, action: PayloadAction<ViewState>) => {
            state.isTableView = action.payload.isTableView;
        },
    },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
