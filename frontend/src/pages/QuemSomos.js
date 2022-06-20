import React from "react";
import { Component } from "react";
import QuemSomos from "../components/AMUT/QuemSomos/QuemSomos";
import Footer from "../components/Footer/Footer";


export default class QuemSomosPage extends Component {
  componentDidMount() {
    document.title = 'Quem Somos - AMUT Gondomar';
  }
  render() {
    
    return (
      <>
        <QuemSomos/>
        <Footer/>
      </>
    );
  }
}
