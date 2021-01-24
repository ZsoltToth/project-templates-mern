#!/usr/bin/env bash

if [ -z $(whereis gh | cut -d: -f2 | wc -w) ]
then
  echo "GitHub CLI is not installed properly"
  echo "Please visit this site: https://github.com/cli/cli"
  exit 1
fi

if [ $# -ne 1 ]
then
  echo "issue id is required!"
  exit 1
fi

if ! [[ $1 =~ ^[0-9]+$ ]]
then
  echo "$1 is not a number"
  exit 1
fi

ISSUE_ID=$1
ISSUE_TITLE=$(gh issue list | grep ^$1 | cut -d$'\t' -f3)
if [ -z "$ISSUE_TITLE" ]
then
  echo "Issue ($ISSUE_ID) is not found!"
  exit 1
fi

BRANCH_TITLE=$(echo $ISSUE_TITLE | tr [:upper:] [:lower:] | tr " " "_")
BRANCH_NAME="#${ISSUE_ID}_${BRANCH_TITLE}"

#echo "Issue Id: $ISSUE_ID, Title: $ISSUE_TITLE, Branch: $BRANCH_NAME"

git branch $BRANCH_NAME 2>/dev/null
if [ $? -eq 0 ]
then
  echo "Branch $BRANCH_NAME was created successfully."
fi

git checkout $BRANCH_NAME