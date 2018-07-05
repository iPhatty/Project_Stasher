# Project Stasher - Best viewed on mobile: [https://project-stasher.netlify.com/](https://project-stasher.netlify.com/);

Boilerplate used : [Create React App](https://github.com/facebook/create-react-app);

## Hosted on netlify by:

```
cd client

npm run build

npm install netlify-cli -g
netlify deploy
```

Then follow the netlify command line prompts

## Tech Stack:

- React
- Styled Components

## Packages Used:

- query-string

## Issues Faced:

I had difficulties with setting up query parameters and allowing multiple filters such as the city and active to be used together. Initially I started with creating a string template which took a string value from the dropdown menu to create the API call for the city.

I then quickly realised that this was an issue as I needed to find a way to keep the city searched in state for any further filtering as they would all be done through the API.

I decided to make use of the query-string package and this allowed me to create a query object in the app state, which was then converted into a query string to be used for any further API calls.
