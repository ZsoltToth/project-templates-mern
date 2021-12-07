import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { fetchAll } from '../store/issuesReducer';

type Issue = {
  _id: string,
  title: string,
  description: string,
  state: string,
  __v: number
};

export type issue = Issue;

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
