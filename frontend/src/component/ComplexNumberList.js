import React from 'react';
import {default as store} from '../store/ComplexNumberStore'
import ComplexNumberListItem from "./ComplexNumberListItem";

class ComplexNumberList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {complexNumbers : []};
        this._updateState = this._updateState.bind(this);
    }


    componentDidMount() {
        store.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({complexNumbers : store._complexNumbers});
    }

    render() {
        return(
            <div>
                {this.state.complexNumbers.map(({real,imaginary}, index)=>{
                    return(
                        <ComplexNumberListItem key={index} real={real} imaginary={imaginary}/>
                );
                })}
            </div>
        );
    }
}

export default ComplexNumberList;
