import React from 'react';
import store from '../../store/QuadraticEquationTasksStore';

class QuadraticEqTaskList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {qeTasks : []};
        this._updateStateFromStore = this._updateStateFromStore.bind(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateStateFromStore);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateStateFromStore);
    }

    _updateStateFromStore(){
        this.setState({qeTasks: store._qeTasks});
    }

    render() {
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>State</th>
                        <th>Version</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.qeTasks.map(({_id, title, description, state, __v}) => {
                            return (
                                <tr key={_id}>
                                    <td>{_id}</td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td>{state}</td>
                                    <td>{__v}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuadraticEqTaskList;
