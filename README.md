# Before You Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

To bypas CORS: https://the-ultimate-api-challenge-v2.herokuapp.com was used.

For routing: react-router-dom version 6 was used.

For testing: Jest and Enzyme.

Detail of API used: https://www.metaweather.com/api/#locationsearch

## Available Scripts

To start the project:

Clone the repo

Run
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To run the tests use the command

### `npm test`


### `npm run build`

Builds the app for production to the `build` folder.


## Bonus build and run the web app in a docker container

Build Docker image

### `docker build -t ipf-test .`

Run the React App in a container

### `docker run -p 8080:3000 ipf-test`

Open [http://localhost:8080](http://localhost:8080) to view it in your browser.