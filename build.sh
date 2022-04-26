#!/bin/bash

npm install
npm run test
npx eslint -f json -o eslint-report.json .
npm run build