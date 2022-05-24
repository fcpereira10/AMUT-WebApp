import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";

import Article from "../components/News/Article";


export default class ArticlePage extends Component {
  componentDidMount() {
    document.title = 'Artigo - AMUT Gondomar';
  }
  render() {
    return (
      <>
        <Article />
        <Footer />
      </>
    );
  }
}