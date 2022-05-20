import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import Event from "../components/Events/Event";


export default class EventPage extends Component {
  componentDidMount() {
    document.title = 'Evento - AMUT Gondomar';
  }
  render() {
    return (
      <>
        <Event />
        <Footer />
      </>
    );
  }
}