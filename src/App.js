import React from "react";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Home />
          </header>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
