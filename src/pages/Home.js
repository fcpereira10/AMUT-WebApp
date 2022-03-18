import React from "react";
import { Component } from "react";
import Navb from "../components/Navb/Navb";
import Video from "../components/VideoSection/Video"
import Info from "../components/InfoSection/Info"
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
export default class Home extends Component {
  render() {
    return (
      <>
        <Navb />
        <Video />
        <Info {...homeObjOne}/>
        <Info {...homeObjTwo}/>
        <Info {...homeObjThree}/>
      </>
    );
  }
}
