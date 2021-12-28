/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize our state
    // THIS IS THE ONLY TIME we ever do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Update our state object
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  // React requires that we define render()
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
