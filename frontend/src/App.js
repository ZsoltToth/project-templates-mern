import React from 'react';
import './App.scss';
import ComplexNumberRecordingForm from "./component/ComplexNumberRecordingForm";
import ComplexNumberList from "./component/ComplexNumberList";
import QuadraticEqTaskList from "./component/qe/QuadraticEqTaskList";
import * as quadraticActions from './action/QuadraticEquations';

function App() {
  return (
    <div className={["App","container"]}>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
                <ComplexNumberRecordingForm/>
                <ComplexNumberList/>
                <QuadraticEqTaskList/>
                <button onClick={()=>{quadraticActions.fetchAllTasks();}}>Click</button>
            </div>
            <div className={"col-md-3"}></div>
        </div>
    </div>
  );
}

export default App;
