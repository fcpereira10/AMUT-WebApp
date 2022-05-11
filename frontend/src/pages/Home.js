import React from "react";
import { Component } from "react";
import Video from "../components/Home/VideoSection/Video";
import Info from "../components/Home/InfoSection/Info";
import { homeObjTwo, homeObjThree } from "../components/Home/InfoSection/Data";
import Footer from "../components/Footer/Footer";
import NewsActivities from "../components/Home/NewsActivitiesSection/NewsActivities";

export default class HomePage extends Component {
  componentDidMount() {
    document.title = 'AMUT Gondomar';
  }
  render() {
    
    return (
      <>

        <Video />
        <NewsActivities />
        <Info info={{ ...homeObjTwo }} />
        <Footer /> 
      </>
    );
  }
}
