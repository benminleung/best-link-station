# Nordcloud assignment - Find the best link station for devices

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v7.0.0

    $ npm --version
    5.6.0

## Install

Download the repository "best-link-station".
Navigate to the repository via command line.

    $ cd best-link-station

The application can run without external packages. However, if you would like to run tests and have eslint working, run the following command to install all required packages

    $ npm install


## Start

Run the following command to start the program. The console will return the results of the best link stations for all devices.

    $ npm run start

### Start indexLineChallenge.js

indexLineChallenge.js logs on console the same result as expected from index.js. However, it is written in what I consider shortest possible and understandable code, while sacrificing unit testing with carlity. You can run indexLineChallenge.js by running the following command

    $ npm run lineChallenge

## Test

Run the following command to start the test. The test utilizes Jest for testing.

    $ npm run test

## References

This README.md is based off of the README.md template written by MoOx. https://gist.github.com/MoOx/4378f7c43f6e948e7216