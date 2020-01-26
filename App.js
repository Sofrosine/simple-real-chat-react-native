import React, {Component} from 'react'
import Router from './src/config/router'
import BackgroundTask from 'react-native-background-task';

BackgroundTask.define(() => {
  console.log('Hello from a background task');
  BackgroundTask.finish();
});

class App extends Component {
  componentDidMount() {
    BackgroundTask.schedule({
      period: 60
    });
  }
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;