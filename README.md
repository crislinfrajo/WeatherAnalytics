# WeatherAnalytics Project
[![Build Status](https://travis-ci.com/crislinfrajo/WeatherAnalytics.svg?branch=master)](https://travis-ci.com/crislinfrajo/WeatherAnalytics) [![codecov](https://codecov.io/gh/crislinfrajo/WeatherAnalytics/branch/master/graph/badge.svg?token=7YY143IT0W)](https://codecov.io/gh/crislinfrajo/WeatherAnalytics)

This is a project that will help the SurfSky company that provides flying service. For the company, it is important to identify the regions that have the ideal climatic conditions, since the duration of the activity is subject to the climatic conditions. This type of flight depends on air currents.

### Who is SurfSky company:

SurfSky company Sl. has 5 years of experience, it's located at Barcelona, Spain.

The main fying services the company offers are:

- Initiation flights: for novice people who have never done this activity.
- Flight without a motor of 15 to 20 minutes duration with Accident and Civil Liability Insurance.
- Course for the Title of Glider

### Tools and Tecnologies:
- Node.js
- TypeScript
- Express framework
- Log4js
- Travis
- Mocha
- chai
- condecov
- Visual Studio Code


### Solution (Solución):

To solve the requirements from the SurfSky company, we will extract
data from the public [API](https://openweathermap.org/api) and we will
create an API REST with Azure Cosmos DB's and Node.js Express that
retrieve these data to the client through the app

### Team members:

- Francisdailin Cobas Sierra
- Cristina Vaillant Valdéz
- Jose María Moreno

# Install

To install this service follow next steps:
```
npm install
npm run start
```
Then your service will be avialable at http://127.0.0.1:4000 that should response with an ok message.

If you want to set another port set it in enviroment variable PORT.

# Test

In folder test you can find all test/spec files.

To run tests
```
npm run test
```


# Run code coverage
Run test with Mocha and Chai and code coverage with nyc (Istanbul). Yo can see HTML Report in coverage/index.html
```
npm run coverage
```
