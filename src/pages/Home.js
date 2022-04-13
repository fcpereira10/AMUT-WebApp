import React from "react";
import { Component } from "react";
import Video from "../components/Home/VideoSection/Video";
import Info from "../components/Home/InfoSection/Info";
import { homeObjTwo, homeObjThree } from "../components/Home/InfoSection/Data";
import News from "../components/Home/NewsSection/News";
import Footer from "../components/Footer/Footer";
import Events from "../components/Home/EventsSection/Events";

export default class HomePage extends Component {
  render() {
    return (
      <>

        <Video />
        <News />
        <Info info={{ ...homeObjTwo }} />
        <Events />
        <Info info={{ ...homeObjThree }} />
        <Footer /> 
      </>
    );
  }
}
