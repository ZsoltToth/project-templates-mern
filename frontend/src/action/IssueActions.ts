import axios from 'axios';

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

export const fetchIssues = async () : Promise<Issue[]> => {
  console.log('hello');
  return [
    {
      _id: '619f64a8ce72c4001416daef',
      title: 'title',
      description: 'desc',
      state: 'open',
      __v: 0
    },
    {
      _id: '619f64efce72c4001416daf2',
      title: 'title',
      description: 'desc',
      state: 'open',
      __v: 0
    }
  ];
};
