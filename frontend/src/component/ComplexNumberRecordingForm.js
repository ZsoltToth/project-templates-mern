import React from "react";
import * as actions from '../action/ComplexNumberActions';
import ErrorMessageWell from "./ErrorMessageWell";
class ComplexNumberRecordingForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            real : 0,
            imag : 0
        };
        this.formOnChange = this.formOnChange.bind(this);
    }

    formOnChange(event){
        const {name,value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div>
                <ErrorMessageWell/>
                    <label htmlFor={"real"} >Real</label>
                    <input type={"number"} id={"real"} name={"real"} value={this.state.real} onChange={this.formOnChange}/>
                    <br/>
                    <label htmlFor={"imag"}>Imag</label>
                    <input type={"number"} id={"imag"} name={"imag"} value={this.state.imag} onChange={this.formOnChange}/>
                    <br/>
                    <button onClick={()=> actions.recordComplexNumber(this.state)}>Submit</button>
            </div>
        );
    }
}

export default ComplexNumberRecordingForm
