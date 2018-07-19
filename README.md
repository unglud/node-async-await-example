# Node.js async / await example
Simple example of Node.js application with async / await usage

## Setup

Copy the configuration file `default.json.dist`
```bash
cp config/default.json.dis config/default.json
```

Add API keys for services:

`weatherApiKey` - https://openweathermap.org/api

`googleApiKey` - https://developers.google.com/maps/documentation/geocoding/start#get-a-key


Run
```bash
npm install
npm test
npm run dev
```

## Getting started
Put any city after slash
```
http://localhost:8008/getCityInformation/london
```

In response will be returned json with data from other APIs
```json
{
  weather: {
    temperature: 26
  },
  time: {
    localTime: "16:7"
  }
}
```
