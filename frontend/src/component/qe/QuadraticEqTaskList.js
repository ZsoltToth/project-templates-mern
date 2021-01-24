import React from 'react';

class QuadraticEqTaskList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {qeTasks : [
                {
                    "_id": "600d4a9e2e0f9e001bd9b796",
                    "title": "Issue 1",
                    "description": "string",
                    "state": "open",
                    "__v": 0
                },
                {
                    "_id": "600d4b0b2e0f9e001bd9b797",
                    "title": "Issue 2",
                    "description": "string",
                    "state": "open",
                    "__v": 0
                }
            ]};
        this._updateStateFromStore = this._updateStateFromStore.bind(this);
    }

    componentDidMount() {
    }

    _updateStateFromStore(){
        this.setState({
            qeTasks: [
                {
                    "_id": "600d4a9e2e0f9e001bd9b796",
                    "title": "Issue 1",
                    "description": "string",
                    "state": "open",
                    "__v": 0
                },
                {
                    "_id": "600d4b0b2e0f9e001bd9b797",
                    "title": "Issue 2",
                    "description": "string",
                    "state": "open",
                    "__v": 0
                }
            ]
        });
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
