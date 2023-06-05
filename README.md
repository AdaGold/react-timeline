# React Timeline

## At a Glance

- Individual, [stage 1](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/classroom/rule-of-three.md#stage-1) project
- Due before class on **DATE HERE**

## Learning Goals
- Build React components which receive data through props
- Build React container components which pass information to their subcomponents

## Objective

We will read information from a JSON file and display it as a social media timeline similar to a Facebook or Twitter feed.

## What's Already Here

We've provided for you the following things:

1. An initial application skeleton generated with `create-react-app`, which loads React and all the tools we need to run the server
2. Several components already defined
3. Data for your Timeline in JSON format

### Components

The application will have the following components:

- `TimelineEvent` - This component will take an individual timeline event data and render it.  Each `TimelineEvent` will contain a person who posted the event, a status message and a timestamp.  You will need to use the `Timestamp` component inside this component.
- `Timeline` - This component will take a list of timeline events as a prop and render a list of `TimelineEvent` components.
- `App` - This component is the traditional outer component of the React App. The App component will read in the data from the JSON file and pass the timeline events to the `Timeline` component which it will contain.

Hint: An effective strategy could be to implement each component individually testing their output on the screen with hard-coded prop data before trying to integrate the entire app.

### Data for your Timeline in JSON

In this project, we also gave you the file `src/data/timeline.json`. This file holds a JavaScript object that we will load into our `App` component.

If you look at `src/App.js`, we see on line 4:

```javascript
import timelineData from './data/timeline.json';
```

This line is one way of saying, "Hey! Let's make a variable named `timelineData`. Its value should be whatever is in the file `./data/timeline.json`.

In the `App` component, we can see the first time we use the variable named `timelineData`:

```javascript
  console.log(timelineData);
```

When we run our React server, we should be able to see this console log print out, and confirm that we get the JSON data that lives in the file `data/timeline.json`.

We should use the `timelineData` variable in our `App` component.

We should also pass `timelineData` around as a prop if it is appropriate.

Hint: take a few minutes to confirm the shape of `timelineData`. What are the keys? What are the values? What data structures are nested? How would we access or, better yet, iterate over this?

### Already Implemented: `Timestamp` Component and CSS

We have already implemented some pieces of this project:
- A component `Timestamp`, that displays a time in a human-readable format
- CSS files. These should be included in the project automatically, but you will need to figure out how to attach the styles to the HTML you render.

## Setup Requirements

1. Fork and clone this repo
1. Install this project's dependencies with `$ yarn install`
1. Start the local development server that runs our React project with `$ yarn start`

## Wave 1

For wave 1 implement the `TimelineEvent` component function.  It should take 3 props.
  - `person` - the person making the post.
  - `status` - the message being posted.
  - `timestamp` - the date-time of the event.

Test the component by rendering it with hardcoded data inside the `App` component.  `TimelineEvent` should use the existing `Timestamp` component to render the time & date of the event.

## Wave 2

For wave 2, you will implement the `Timeline` component.  The `Timeline` component will take one prop, `events`, an array of JavaScript objects.  The `render` function will use the array to render a set of `TimelineEvent` components.

Then read in the `/src/data/timeline.json` file into an array of objects in `/src/App.js`.  In the `render` function of the `App` component, render a `TimeLine` component using the array of objects as the `events` prop.

## Sample Solution

Below is a sample solution:

![Sample App](./images/example-timeline.png)

## Tests

We have provided some tests that simply verify that if the properly named props are passed into the components their values show up in the browser.  You can run the tests with `yarn test`.

## Going Further

Add some styling to the application to make it look more like a social media feed.

## What We Are Looking For

You can check [here](./feedback.md) for things the instructors will be looking for.
