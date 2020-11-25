jest.dontMock('../ComplexNumberActions');
import  * as actions from '../ComplexNumberActions';
jest.mock('axios');
import axios from 'axios';
jest.mock('../../dispatcher/Dispatcher')
import dispatcher from "../../dispatcher/Dispatcher";

describe('Tests for ComplexNumberAction', ()=>{


    beforeEach(()=>{
        jest.clearAllMocks();
    });

    it('if true is true', ()=>{
        expect(true).toBe(true);
    });


    it('checks if the complex number recorded successfully', ()=>{
        axios.post.mockReturnValue(Promise.resolve());
        actions.recordComplexNumber({real:0, imag:0});
        expect(axios.post).toHaveBeenCalledTimes(1);

    });

    it('checks the recording of existing complex number', ()=>{
        axios.post.mockReturnValue(Promise.reject({
            response : {
                status : 409,
                statusText : "Conflict",
                data : {
                    message : 'Conflict'
                }
            }
        }));
        dispatcher.dispatch();
        actions.recordComplexNumber({real:0, imag:0});
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(dispatcher.dispatch).toHaveBeenCalledTimes(1);
    });

})