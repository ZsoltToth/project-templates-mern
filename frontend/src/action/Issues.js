import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/IssueActionConstants';
import winston from 'winston';
import BrowserConsole from "winston-transport-browserconsole"; 'winston-transport-browserconsole';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new BrowserConsole()
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
        .then(resp =>{
           logger.info(resp);
        })
        .catch(err => logger.error(err));
};

export const fetchAllTasks = _fetchAllTasks;
export const recordTask = _recordTask;

