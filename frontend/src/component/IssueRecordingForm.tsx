import React, { useState } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import { recordIssue } from '../action/IssueActions';

const IssueRecordingForm:React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
      <FormControl>
          <TextField
              id={'issue-recording-form-title-input-field'}
              name={'title-input-field'}
              variant={'outlined'}
              label={'Title'}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
          />
          <TextField
              id={'issue-recording-form-description-input-field'}
              name={'description-input-field'}
              variant={'outlined'}
              label={'Description'}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
          />
        <Button
            variant={'contained'}
            onClick={() => { recordIssue({ title: title, description: description }); }}
        >Submit</Button>
      </FormControl>
  );
};

export default IssueRecordingForm;
