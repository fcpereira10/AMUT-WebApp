import React, { Component } from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  PainelRow,
  Associado,
  GraphWrapper,
  ServicesIcon,
  TipologiaWrapper,
  TipologiaTitle,
  IconTextTipologia,
  TextTipologia,
  TipologiaValor,
  IconMedicamentos,
  IconAmbulatorio,
} from "./StyledPainel";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Comparticipado", "Saldo"],
      datasets: [
        {
          data: [81.31, 543.69],
          backgroundColor: [
            "rgba(166, 166, 165, 0.5)",
            "rgba(209, 49, 44, 0.5)",
          ],
          hoverBackgroundColor: [
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderColor: ["rgba(166, 166, 165, 1)", "rgba(209, 49, 44, 1)"],
          borderWidth: 2,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <ServicesContainer>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesH2>Resumo Anual</ServicesH2>

              <ServicesIcon>
                <Pie
                  data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets,
                  }}
                  options={{
                    plugins: {
                      responsive: true,
                      maintainAspectRatio: false,
                      legend: {
                        display: true,
                        position: "bottom",
                        align: "center",
                        labels: {
                          font: {
                            weight: "bold",
                            family: "Encode Sans Expanded",
                          },
                          usePointStyle: true,
                          padding: 20,
                        },
                      },
                    },
                  }}
                />
              </ServicesIcon>
            </ServicesCard>

            <TipologiaWrapper>
              <ServicesCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                    <IconMedicamentos />
                    <TextTipologia>
                      <TipologiaTitle>Medicamentos</TipologiaTitle>
                      <TipologiaValor>300,00€ / 350,00€</TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar now={60} variant="danger" animated />
                </div>
              </ServicesCard>
              <ServicesCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                    <IconAmbulatorio/>
                    <TextTipologia>
                      <TipologiaTitle>Ambulatório</TipologiaTitle>
                      <TipologiaValor>300,00€ / 350,00€</TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar now={60} variant="danger" animated />
                </div>
              </ServicesCard>
            </TipologiaWrapper>
            <TipologiaWrapper>
              <ServicesCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                  <IconMedicamentos />
                    <TextTipologia>
                      <TipologiaTitle>Estomatologia</TipologiaTitle>
                      <TipologiaValor>300,00€ / 350,00€</TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar now={60} variant="danger" animated />
                </div>
              </ServicesCard>
              <ServicesCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                  <IconMedicamentos />
                    <TextTipologia>
                      <TipologiaTitle>Próteses e Ortóteses</TipologiaTitle>
                      <TipologiaValor>300,00€ / 350,00€</TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar now={60} variant="danger" animated />
                </div>
              </ServicesCard>
            </TipologiaWrapper>
          </ServicesWrapper>
        </ServicesContainer>
      </>
    );
  }
}
