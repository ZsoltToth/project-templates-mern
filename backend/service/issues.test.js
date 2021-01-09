jest.mock('../model/issue');
const Issue = require('../model/issue');
const issueState = require('../model/issueState');
const service = require('./issues');

const OPEN_ISSUE_ID = '5ff6ed85f1c52e5bb6d4a7f9';
const IN_PROGRESS_ISSUE_ID = '5ff97028863e24203a6cbfe2';
const RESOLVED_ISSUE_ID = '5ff97029863e24203a6cbfe3';
const CLOSED_ISSUE_ID = '5ff97029863e24203a6cbfe4';
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
const IN_PROGRESS_ISSUE = {
  ...ISSUE_CREATION_REQUEST,
  _id: IN_PROGRESS_ISSUE_ID,
  state: issueState.IN_PROGRESS,
  __v: 0
};
const RESOLVED_ISSUE = {
  ...ISSUE_CREATION_REQUEST,
  _id: RESOLVED_ISSUE_ID,
  state: issueState.RESOLVED,
  __v: 0
};
const CLOSED_ISSUE = {
  ...ISSUE_CREATION_REQUEST,
  _id: CLOSED_ISSUE_ID,
  state: issueState.CLOSED,
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

  it('reads all issues', () => {
    const issues = [OPEN_ISSUE, IN_PROGRESS_ISSUE, RESOLVED_ISSUE, CLOSED_ISSUE];
    Issue.find.mockImplementation(() => Promise.resolve(issues));
    expect.assertions(2);
    service.readIssues().then((docs) => expect(docs).toEqual(issues));
    expect(Issue.find).toHaveBeenCalled();
  });

  it('reads all issues with error', () => {
    Issue.find.mockImplementation(() => Promise.reject(new Error()));
    expect.assertions(2);
    service.readIssues().catch(err => expect(err).toEqual(new Error()));
    expect(Issue.find).toHaveBeenCalled();
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
