import React, { Component } from "react";

class AnimeApi extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
        try {
            var url = 'https://api.jikan.moe/v3/user/k0ley/history/anime'
            const response = await fetch(url);
            const json = await response.json();
            this.setState({data: json.history})
        if (!response.ok) {
            throw Error(response.statusText);
        }
        } catch (error) {
            console.log(error);
        }
    }


  render() {
    return (
      <>
      {this.state.data.map(history => <div key={history.meta.mal_id}>{history.meta.name}</div>)}
      </>
    );
  }
}

export default AnimeApi;