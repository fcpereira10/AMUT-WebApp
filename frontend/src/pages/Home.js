import React from "react";
import { Component } from "react";
import Video from "../components/Home/VideoSection/Video";
import Info from "../components/Home/InfoSection/Info";
import { homeObjTwo, homeObjThree } from "../components/Home/InfoSection/Data";
import News from "../components/Home/NewsSection/News";
import Footer from "../components/Footer/Footer";

export default class HomePage extends Component {
  componentDidMount() {
    document.title = 'AMUT Gondomar';
  }
  render() {
    
    return (
      <>

        <Video />
        <News />
        <Info info={{ ...homeObjTwo }} />
        <Info info={{ ...homeObjThree }} />
        <Footer /> 
      </>
    );
  }
}
