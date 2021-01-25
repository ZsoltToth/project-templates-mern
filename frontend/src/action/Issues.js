import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/IssueActionConstants';
import * as notificationActions from '../dispatcher/NotificatonActionConstants';
import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
});

const _fetchAllTasks = () => {
   axios.get('/issues')
       .then(resp => {
           dispatcher.dispatch({
               action: actionConstants.refreshTasks,
               payload: resp.data
           });
       })
       .catch(err => {
           logger.error(err);
       });
};

const _recordTask = ({title, description}) => {
    axios.post('/issues', {
        title: title,
        description: description})
        .then(() =>{
            dispatcher.dispatch({
                action: notificationActions.showSuccess,
                payload: `Issue recorded`
            });
        })
        .catch(err => {
            dispatcher.dispatch({
                action: notificationActions.showFailure,
                payload: err
            });
        });
};

export const fetchAllTasks = _fetchAllTasks;
export const recordTask = _recordTask;

