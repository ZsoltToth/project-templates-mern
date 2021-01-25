import React from "react";
import * as actions from '../../action/Issues';
class IssueRecordingForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
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
                <label htmlFor={"title"} >Title</label>
                <input type={"text"} id={"title"} name={"title"} value={this.state.title} onChange={this.formOnChange}/>
                <br/>
                <label htmlFor={"description"}>Description</label>
                <input type={"text"} id={"description"} name={"description"} value={this.state.description} onChange={this.formOnChange}/>
                <br/>
                <button onClick={()=> actions.recordTask(this.state)}>Submit</button>
            </div>
        );
    }
}

export default IssueRecordingForm;
