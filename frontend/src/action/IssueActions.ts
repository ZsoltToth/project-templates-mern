import axios from 'axios';
import { issue } from '../types/Issue';

export const recordIssue = async ({ title, description } : {title: string, description: string}) => {
  const resp = await axios.post('/issues', { title: title, description: description });
  if (resp.status === 200) {
    console.log('Success');
  } else {
    console.log('Problem');
  }
};

export const fetchIssues = async () : Promise<issue[]> => {
  const resp = await axios.get('/issues');
  if (resp.status === 200) {
    console.log({ data: resp.data });
  } else {
    console.error({ error: resp.data });
  }
  return resp.data;
};
