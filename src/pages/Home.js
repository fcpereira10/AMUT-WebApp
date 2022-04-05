import React from "react";
import { Component } from "react";
import Video from "../components/VideoSection/Video";
import Info from "../components/InfoSection/Info";
import Services from "../components/ServicesSection/Services";
import { homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import News from "../components/NewsSection/News";
import Footer from "../components/Footer/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>

        <Video />
        <News />
        <Info info={{ ...homeObjTwo }} />
        <Services />
        <Info info={{ ...homeObjThree }} />
        <Footer /> 
      </>
    );
  }
}
