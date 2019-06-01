//Purpose: Be able to select a song to see its info.
//Practiced React and Redux to accomplish simple tasks

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
//my components
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />,
  </Provider>,
  document.getElementById("root")
);

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
