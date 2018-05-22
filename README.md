
# Ada's Timeline

In this project you will read information from a JSON file and display it as a social media timeline similar to a Facebook or Twitter feed.

## Learning Goals
In this project you will learn to:
- Build React components which recieve data through props
- Build React container components which pass information to their subcomponents

## Project Outline

We have provided you an initial Application Skeleton generated with `create-react-app`.  In the `src/data` folder you will have a JSON file filled with timeline data for a specific user.  The application will have the following components:

- `App` - This component is the traditional outer component of the React App. The App component will read in the data from the JSON file and pass the timeline events to the `Timeline` component which it will contain.
- `Timeline` - This component will take a list of timeline events as a prop and render a list of `TimelineEvent` components.
- `TimelineEvent` - This component will take an individual timeline event data and render it.  Each `TimelineEvent` will contain a person who posted the event, a status message and a timestamp.  You will need to use the `Timestamp` component inside this component.

Implement the `render` functions of each component.  An effective strategy could be to implement each component individually testing their output on the screen with hard-coded prop data before trying to integrate the entire app.

Below is a sample solution:

![Sample App](./images/example-timeline.png)

## Going Further

Add some styling to the application to make it look more like a social media feed.
