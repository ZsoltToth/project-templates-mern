import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { issue } from '../action/IssueActions';

const emptyIssues:issue[] = [];

export const issuesReducer = createSlice({
  name: 'issues',
  initialState: {
    issues: emptyIssues
  },
  reducers: {
    fetchAll: (state, action: PayloadAction<issue[]>) => {
      state.issues = [...action.payload];
    }
  }
});

export const { fetchAll } = issuesReducer.actions;

export default issuesReducer.reducer;
