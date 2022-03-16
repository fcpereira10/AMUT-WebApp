import React from "react";
import { Component } from "react";
import Navb from "../../components/Navb/Navb";
import Video from "../../components/VideoSection/Video"

export default class Home extends Component {
  render() {
    return (
      <>
        <Navb />
        <Video />
      </>
    );
  }
}
