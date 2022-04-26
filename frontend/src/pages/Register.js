import React, {Component} from 'react'
import Footer from '../components/Footer/Footer'
import Register from '../components/Login/Register'

export default class RegisterPage extends Component {
  componentDidMount() {
    document.title = 'Registo - AMUT Gondomar';
  }
  render() {
  return (
    <>
      <Register />
      <Footer />
    </>
  )
}
}