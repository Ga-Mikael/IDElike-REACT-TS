import {configureStore} from "@reduxjs/toolkit";
import tabs from "./features/tabs.ts";
import preview from "./features/preview.ts";

export const store = configureStore({
    reducer: {
        tabs,
        preview
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch