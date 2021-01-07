jest.mock('../model/issue')
const Issue = require('../model/issue')
// const issueState = require('../model/issueState')
const service = require('./issues')

// const ISSUE_ID = '5ff6ed85f1c52e5bb6d4a7f9'
const ISSUE_CREATION_REQUEST = {
  title: 'Issue Template',
  description: 'Description'
}
/*
const OPEN_ISSUE = {
    ...ISSUE_CREATION_REQUEST,
    _id: ISSUE_ID,
    state: issueState.OPEN,
    __v: 0
}
 */

describe('Issue Service Test', () => {
  it('Test Create Issue', () => {
    Issue.create.mockImplementation(() => Promise.reject(new Error({})))
    expect.assertions(1)
    service.createIssue(ISSUE_CREATION_REQUEST)
    expect(Issue.create).toHaveBeenCalled()
  })
})
