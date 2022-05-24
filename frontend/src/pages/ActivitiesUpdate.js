import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import Event from "../components/Events/Event";
import ActivitiesUpdate from "../components/Admin/Activities/ActivitiesUpdate";


export default class ActivitiesUpdatePage extends Component {
  componentDidMount() {
    document.title = 'Atualizar Evento - AMUT Gondomar';
  }
  render() {
    return (
      <>
        <ActivitiesUpdate />
        <Footer />
      </>
    );
  }
}