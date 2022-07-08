#!/usr/bin/env bash

if [ ! -d 'backend' ]
then
    echo "Link Backend into Infrastructure"
    ln -s ../backend backend
fi

if [ ! -d 'frontend' ]
then
    echo "Link Frontend into Infrastructure"
    ln -s ../frontend frontend
fi