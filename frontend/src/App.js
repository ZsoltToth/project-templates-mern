import React from 'react';
import './App.scss';
import ComplexNumberRecordingForm from "./component/ComplexNumberRecordingForm";
import ComplexNumberList from "./component/ComplexNumberList";
import IssuesList from "./component/issues/IssuesList";
import * as quadraticActions from './action/Issues';
import IssueRecordingForm from "./component/issues/IssueRecordingForm";

function App() {
  return (
    <div className={["App","container"]}>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
                <ComplexNumberRecordingForm/>
                <ComplexNumberList/>
                <IssuesList/>
                <button onClick={()=>{quadraticActions.fetchAllTasks();}}>Click</button>
                <IssueRecordingForm/>
            </div>
            <div className={"col-md-3"}></div>
        </div>
    </div>
  );
}

export default App;
