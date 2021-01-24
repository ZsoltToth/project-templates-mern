jest.dontMock('./QuadraticEquations');
import  * as actions from './QuadraticEquations';
jest.mock('axios');
import axios from 'axios';
jest.mock('../dispatcher/Dispatcher');
import dispatcher from "../dispatcher/Dispatcher";

describe('', () => {

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

    it('', () => {
        // given
        axios.get.mockReturnValue( Promise.resolve(issues));
        dispatcher.dispatch();
        // when
        actions.fetchAllTasks();
        // then
        expect(axios.get).toHaveBeenCalled();
        expect(dispatcher.dispatch).toHaveBeenCalled();

    });
});
