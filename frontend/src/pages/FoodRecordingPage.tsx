import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel, TextareaAutosize, TextField } from '@material-ui/core';

const FoodRecordingPage: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  return (<>
      <FormControl>
        <TextField id={'food-name'} label={'Name'} variant={'outlined'} value={name} onChange={(event) => setName(event.target.value)}/>
        <TextareaAutosize minRows={3} value={description} onChange={(event) => {
          setDescription(event.target.value);
        }}/>
        <Input type={'file'}/>
        <Button
          variant={'contained'}
          onClick={() => { alert(JSON.stringify({ name, description })); }}
        >Add</Button>
      </FormControl>
    </>);
};

export default FoodRecordingPage;
