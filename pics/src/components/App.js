import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  onSubmitSearch = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSubmitSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
