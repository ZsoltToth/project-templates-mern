import React from 'react';
import './App.scss';
import ComplexNumberRecordingForm from "./component/ComplexNumberRecordingForm";
import ComplexNumberList from "./component/ComplexNumberList";
import IssuesList from "./component/qe/IssuesList";
import * as quadraticActions from './action/Issues';

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
            </div>
            <div className={"col-md-3"}></div>
        </div>
    </div>
  );
}

export default App;
