import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = () => {
    const movie = axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "Ready"}</div>;
  }
}

export default App;
