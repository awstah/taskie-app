import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

export interface ListItem {
    id: string;
    todo: string;
    status: string;
    priority: string;
    createdAt: string;
    updatedAt: string;
}

export interface ListState {
    items: ListItem[];
    filters: {
        priority: string;
    };
    search: string;
}

const initialState: ListState = {
    items: [],
    filters: {
        priority: "",
    },
    search: "",
};

export const selectListItems = (state: RootState) => state.list.items || [];
export const selectFilters = (state: RootState) => state.list.filters;
export const selectSearch = (state: RootState) => state.list.search || "";

export const selectSearchedListItems = createSelector(
    [selectListItems, selectSearch, selectFilters],
    (items, search, filters) =>
        items.filter(
            (item) =>
                item.todo.toLowerCase().includes(search.toLowerCase()) &&
                (filters.priority === "" || item.priority === filters.priority)
        )
);

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        newTodo: (state: ListState, action: PayloadAction<ListItem>) => {
            state.items.push(action.payload);
        },
        updateTodo: (state: ListState, action: PayloadAction<ListItem>) => {
            const updatedItem = action.payload;
            const index = state.items.findIndex(
                (item) => item.id === updatedItem.id
            );
            if (index !== -1) {
                state.items[index] = updatedItem;
            }
        },
        deleteTodo: (state: ListState, action: PayloadAction<string>) => {
            const idToDelete = action.payload;
            state.items = state.items.filter((item) => item.id !== idToDelete);
        },
        setFilterPriority: (
            state: ListState,
            action: PayloadAction<string>
        ) => {
            state.filters.priority = action.payload;
        },

        setSearch: (state: ListState, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        changeStatus: (state: ListState, action: PayloadAction<string>) => {
            const idToChange = action.payload;
            const index = state.items.findIndex(
                (item) => item.id === idToChange
            );
            if (index !== -1) {
                state.items[index].status = "Completed";
            }
        },
    },
});

export const {
    newTodo,
    updateTodo,
    deleteTodo,
    setFilterPriority,
    setSearch,
    changeStatus,
} = listSlice.actions;

export default listSlice.reducer;
