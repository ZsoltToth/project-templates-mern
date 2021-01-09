const Issue = require('../model/issue');
const issueState = require('../model/issueState');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/service.log'
    }),
    new winston.transports.Console()
  ]
});

const createIssue = (issue) => {
  return new Promise((resolve, reject) => {
    Issue.create({ ...issue, state: issueState.OPEN })
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => { reject(err); });
  });
};

const readIssues = () => {
  return new Promise((resolve, reject) => {
    Issue.find()
      .then((documents) => { resolve(documents); })
      .catch((err) => { reject(err); });
  });
};

const readIssuesById = (id) => {
  return new Promise((resolve, reject) => {
    Issue.findById(id)
      .then((documents) => {
        resolve(documents);
      })
      .catch((err) => {
        logger.info(`Issue Not Found with id: ${id}`);
        reject(err);
      });
  });
};

const changeSate = (id, state) => {
  return readIssuesById(id)
    .then(issue => {
      if (!isStateChangeAllowed(issue.state, state)) {
        logger.info(`Invalid State Change ${issue.state} => ${state}`);
        throw new Error({ msg: `Invalid State ohange ${issue.state} => ${state}` });
      }
      return issue;
    }).then(issue => {
      return Issue.findByIdAndUpdate(id, { state: state }, { new: true });
    });
};

const isStateChangeAllowed = (from, to) => {
  if (from === issueState.OPEN && to === issueState.IN_PROGRESS) return true;
  if (from === issueState.IN_PROGRESS && to === issueState.RESOLVED) return true;
  if (from === issueState.RESOLVED && [issueState.IN_PROGRESS, issueState.CLOSED].includes(to)) return true;
  return false;
};

const changeStateToInProgress = (id) => {
  return changeSate(id, issueState.IN_PROGRESS);
};
const changeStateToResolved = (id) => {
  return changeSate(id, issueState.RESOLVED);
};
const changeStateToClosed = (id) => {
  return changeSate(id, issueState.CLOSED);
};

module.exports = {
  createIssue: createIssue,
  readIssues: readIssues,
  readIssuesById: readIssuesById,
  changeStateToInProgress: changeStateToInProgress,
  changeStateToResolved: changeStateToResolved,
  changeStateToClosed: changeStateToClosed
};
