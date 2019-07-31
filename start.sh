#!/bin/sh
yarn compile
pm2 start pm2.json --no-daemon