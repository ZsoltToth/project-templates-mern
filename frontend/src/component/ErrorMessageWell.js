import React from 'react';
import {default as store} from '../store/ErrorMessageStore'

class ErrorMessageWell extends React.Component{

    constructor() {
        super();
        this.state = { errorMsg : ""}
        this._errorMsgChange = this._errorMsgChange.bind(this);
    }

    _errorMsgChange(){
        this.setState({errorMsg : store._errorMsg});
    }


    componentDidMount() {
        store.addOnChangeListener(this._errorMsgChange);
    }

    componentWillUnmount() {
        store.removeOnChangeListener(this._errorMsgChange);
    }

    render(){
        const msg = this.state.errorMsg;
        return (
            msg !== "" &&
                    <div className={["alert", "alert-danger"].join(' ')}>
                        {msg}
                    </div>
        );
    }
}

export default ErrorMessageWell;
