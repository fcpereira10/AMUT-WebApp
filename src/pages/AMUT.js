import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import QuemSomos from "../components/AMUT/QuemSomos/QuemSomos";

export default class AmutPage extends Component {
  componentDidMount() {
    document.title = 'AMUT - AMUT Gondomar';
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
