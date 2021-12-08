import React, { useEffect } from 'react';
import { fetchIssues } from '../action/IssueActions';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchAll } from '../store/issuesReducer';

const IssueTable:React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  // const [issues, setIssues] = useState<issue[]>([]);
  const issues = useAppSelector((state) => state.issuesReducer.issues);

  useEffect(() => {
    fetchIssues().then(issues => appDispatch(fetchAll(issues)));
    // fetchIssues().then((issues) => setIssues(issues));
  }, []);

  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            issues.map((issue, index) => {
              return (
                  <TableRow key={index}>
                    <TableCell>{issue._id}</TableCell>
                    <TableCell>{issue.title}</TableCell>
                    <TableCell>{issue.description}</TableCell>
                    <TableCell>{issue.state}</TableCell>
                  </TableRow>
              );
            })
          }

        </TableBody>
      </Table>
  );
};

export default IssueTable;
