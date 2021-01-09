jest.mock('../model/issue');
const Issue = require('../model/issue');
const issueState = require('../model/issueState');
const service = require('./issues');

const OPEN_ISSUE_ID = '5ff6ed85f1c52e5bb6d4a7f9';
const INVALID_ISSUE_ID = '000000000000000000000000';
const ISSUE_CREATION_REQUEST = {
  title: 'Issue Template',
  description: 'Description'
};
const OPEN_ISSUE = {
  ...ISSUE_CREATION_REQUEST,
  _id: OPEN_ISSUE_ID,
  state: issueState.OPEN,
  __v: 0
};

describe('Issue Service Test', () => {
  it('Test Create Issue', () => {
    Issue.create.mockImplementation(() => Promise.resolve());
    expect.assertions(1);
    service.createIssue(ISSUE_CREATION_REQUEST);
    expect(Issue.create).toHaveBeenCalled();
  });
  it('Test Create Issue with Error', () => {
    Issue.create.mockImplementation(() => Promise.reject(new Error()));
    expect.assertions(1);
    service.createIssue(ISSUE_CREATION_REQUEST);
    expect(Issue.create).toHaveBeenCalled();
  });

  it('find an issue by ID', () => {
    expect.assertions(2);
    Issue.findById.mockImplementation(() => Promise.resolve(OPEN_ISSUE));
    service.readIssuesById(OPEN_ISSUE_ID).then((issue) => {
      expect(issue).toEqual(OPEN_ISSUE);
    });
    expect(Issue.findById).toHaveBeenCalled();
  });

  it('find a not existing issue by ID', () => {
    expect.assertions(2);
    Issue.findById.mockImplementation(() => Promise.reject(new Error()));
    service.readIssuesById(INVALID_ISSUE_ID).catch(err => {
      expect(err).toBeDefined();
    });
    expect(Issue.findById).toHaveBeenCalled();
  });
});
