import axios from 'axios';

export const recordIssue = async ({ title, description } : {title: string, description: string}) => {
  const resp = await axios.post('/issues', { title: title, description: description });
  if (resp.status === 200) {
    console.log('Success');
  } else {
    console.log('Problem');
  }
};
