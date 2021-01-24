import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/QuadraticEqActionConstants';
import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
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

export const fetchAllTasks = _fetchAllTasks;

