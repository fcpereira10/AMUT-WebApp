import React from "react";
import { Component } from "react";
import Video from "../components/VideoSection/Video"
import Info from "../components/InfoSection/Info"
import Services from "../components/ServicesSection/Services";
import { homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import News from "../components/NewsSection/News";

export default class Home extends Component {
  render() {
    return (
      <>
        <Video />
        <News />
        <Info {...homeObjTwo}/>
        <Services />
        <Info {...homeObjThree}/>
        </>

    );
  }
}
