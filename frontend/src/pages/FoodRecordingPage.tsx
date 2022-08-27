import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel, TextareaAutosize, TextField } from '@material-ui/core';
import { uploadFood } from '../action/FoodActions';

const FoodRecordingPage: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  return (<>
      <FormControl>
        <TextField id={'food-name'} label={'Name'} variant={'outlined'} value={name} onChange={(event) => setName(event.target.value)}/>
        <TextareaAutosize minRows={3} value={description} onChange={(event) => {
          setDescription(event.target.value);
        }}/>
        <Input type={'file'} onChange={(event) => {
          const target = event.target as HTMLInputElement;
          const fileList: FileList = target.files || new FileList();
          if (fileList[0] === null) {
            console.log('No file was selected!');
            return;
          }
          setImage(fileList[0]);
        }}/>
        <Button
          variant={'contained'}
          onClick={() => { uploadFood({ name, description, image }); }}
        >Add</Button>
      </FormControl>
    </>);
};

export default FoodRecordingPage;
