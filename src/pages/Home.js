import React from "react";
import { Component } from "react";
import Navb from "../components/Navb/Navb";
import Video from "../components/VideoSection/Video"
import Info from "../components/InfoSection/Info"
import Services from "../components/ServicesSection/Services";
import { homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import News from "../components/NewsSection/News";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navb/>
        <Video />
        <News />
        <Info {...homeObjTwo}/>
        <Services />
        <Info {...homeObjThree}/>
        </>

    );
  }
}
