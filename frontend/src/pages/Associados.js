import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import QuemSomos from "../components/AMUT/QuemSomos/QuemSomos";
import Associados from "../components/AMUT/Associados/SerAssociadoSection";
import SerAssociadoSection from "../components/AMUT/Associados/SerAssociadoSection";
import BeneficiosSection from "../components/AMUT/Associados/BeneficiosSection";
import QuotaslimitesSection from "../components/AMUT/Associados/QuotasLimitesSection";
import InscricaoSection from "../components/AMUT/Associados/InscricaoSection";

export default class AssociadosPage extends Component {
  componentDidMount() {
    document.title = 'Associados - AMUT Gondomar';
  }
  render() {
    
    return (
      <>
        <SerAssociadoSection/>
        <BeneficiosSection/>
        <QuotaslimitesSection/>
        <InscricaoSection/>
        <Footer/>
      </>
    );
  }
}
