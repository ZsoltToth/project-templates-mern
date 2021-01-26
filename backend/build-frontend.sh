#!/usr/bin/env bash

npm install --prefix ../frontend
npm run build --prefix ../frontend
cp -R ../frontend/build/ public
