import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ComplexNumberActionConstants'

export const recordComplexNumber = ({real,imag}) =>{
    axios.post('/complex-number/record',
        {
            real : real,
            imag : imag
        })
        .then(() => {
            fetchComplexNumbers();
            dispatcher.dispatch({action : actionConstants.clearError});
        })
        .catch((err) => {
            dispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });
            fetchComplexNumbers();
        });
}

export const fetchComplexNumbers = () =>{

    axios.get('/complex-number/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    })
}
