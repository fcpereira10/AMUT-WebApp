import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import Events from "../components/Events/Events"


export default class EventsPage extends Component {
  componentDidMount() {
    document.title = 'Notícias - AMUT Gondomar';
  }
  render() {
    return (
      <>
        <Events />
        <Footer />
      </>
    );
  }
}