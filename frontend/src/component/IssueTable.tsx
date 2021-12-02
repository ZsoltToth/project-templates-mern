import React, { useEffect, useState } from 'react';
import { fetchIssues, issue } from '../action/IssueActions';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
const IssueTable:React.FC = () => {
  const [issues, setIssues] = useState<issue[]>([]);

  useEffect(() => {
    fetchIssues().then((issues) => setIssues(issues));
  });

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
