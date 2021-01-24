import {it} from "@jest/globals";

jest.dontMock('./Issues');
import  * as actions from './Issues';
import  * as actionsConstants from '../dispatcher/IssueActionConstants';
jest.mock('axios');
import axios from 'axios';
jest.mock('../dispatcher/Dispatcher');
import dispatcher from "../dispatcher/Dispatcher";

describe('Testing Issues Actions', () => {

    const issues = [
        {
            "_id": "600d4a9e2e0f9e001bd9b796",
            "title": "Issue 1",
            "description": "string",
            "state": "in progress",
            "__v": 0
        },
        {
            "_id": "600d4b0b2e0f9e001bd9b797",
            "title": "Issue 2",
            "description": "string",
            "state": "open",
            "__v": 0
        }
    ];

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    it('fetches issues and dispatch them', async () => {
        // given
        axios.get.mockReturnValue( Promise.resolve({data: issues}));
        const expectedDispatchedEvent = {
            action: actionsConstants.refreshTasks,
            payload: issues
        };
        // when
        await actions.fetchAllTasks();
        // then
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(dispatcher.dispatch).toBeCalledTimes(1);
        expect(dispatcher.dispatch).toHaveBeenCalledWith(expectedDispatchedEvent);
    });

    it('gets error during fetching issues', () => {
        // given
        axios.get.mockReturnValue( Promise.reject());
        // when
        actions.fetchAllTasks();
        // then
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(dispatcher.dispatch).toHaveBeenCalledTimes(0);
    });
});
