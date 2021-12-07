import { configureStore } from '@reduxjs/toolkit';
import issuesReducer from './issuesReducer';

const store = configureStore({
  reducer: {
    issuesReducer: issuesReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
