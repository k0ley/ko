import React, { Component } from "react";
import publicIp from "public-ip";
const apikey = 'e422e158514cbecdcb310b82eb9787cd430300e77c603069f8e6258c'

class IpApi extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
        try {
            const ipv4 = await publicIp.v4();
            var url = `https://api.ipdata.co/${ipv4}?api-key=${apikey}`
            const response = await fetch(url);
            const json = await response.json();
            this.setState({data: json})
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
      Looks like you are simply connected from {this.state.data.city} in {this.state.data.region} with IP {this.state.data.ip} {this.state.data.emoji_flag} somewhere in {this.state.data.country_name}!
      </>
    );
  }
}

export default IpApi;