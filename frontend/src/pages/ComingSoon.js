import React, {Component} from 'react'
import Footer from "../components/Footer/Footer";
import ComingSoon from '../components/Coming Soon/ComingSoon';
export default class ComingSoonPage extends Component {
  componentDidMount() {
    document.title = 'Em Breve! - AMUT Gondomar';
  }
  render() {
  return (
    <>
      <ComingSoon />
      <Footer />
    </>
  )
}
}