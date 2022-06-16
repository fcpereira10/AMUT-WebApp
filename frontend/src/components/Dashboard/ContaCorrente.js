import React, { Component } from "react";
import {
  ContaCorrenteContainer,
  ContaCorrenteWrapper,
  ContaCorrenteCard,
  ContaCorrenteH2,
  ContaCorrenteIcon,
  TipologiaWrapper,
  TipologiaTitle,
  IconTextTipologia,
  TextTipologia,
  TipologiaValor,
  IconMedicamentos,
  IconAmbulatorio,
  IconEstomatologia,
  IconProteses,
  HistoricWrapper,
  Doc,
} from "./StyledContaCorrente";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { ProgressBar,Table } from "react-bootstrap";


export default class ContaCorrente extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      labels: ["Comparticipado", "Saldo"],
      medicamentosComp: 81.31,
      medicamentosTotal: 625,
      ambulatorioComp: 68.25,
      ambulatorioTotal: 740,
      estomatologiaComp: 39,
      estomatologiaTotal: 530,
      protesesComp: 0,
      protesesTotal: 530,
    };
  }
  render() {
    return (
      <>
        <ContaCorrenteContainer>
          <ContaCorrenteWrapper>
            <ContaCorrenteCard>
              <ContaCorrenteH2>Resumo Anual</ContaCorrenteH2>

              <ContaCorrenteIcon>
                <Pie
                  data={{
                    labels: this.state.labels,
                    datasets: [
                      {
                        data: [
                          this.state.medicamentosComp +
                            this.state.ambulatorioComp +
                            this.state.estomatologiaComp +
                            this.state.protesesComp,
                          this.state.medicamentosTotal +
                            this.state.ambulatorioTotal +
                            this.state.estomatologiaTotal +
                            this.state.protesesTotal,
                        ],
                        backgroundColor: [
                          "rgba(166, 166, 165, 0.5)",
                          "rgba(209, 49, 44, 0.5)",
                        ],
                        hoverBackgroundColor: [
                          "rgba(166, 166, 165, 1)",
                          "rgba(209, 49, 44, 1)",
                        ],
                        borderColor: [
                          "rgba(166, 166, 165, 1)",
                          "rgba(209, 49, 44, 1)",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      tooltip: {
                        usePointStyle: true,
                        callbacks: {
                          labelPointStyle: function (context) {
                            return {
                              pointStyle: "circle",
                            };
                          },
                        },
                      },
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
              </ContaCorrenteIcon>
            </ContaCorrenteCard>

            <TipologiaWrapper>
              <ContaCorrenteCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                    <IconMedicamentos />
                    <TextTipologia>
                      <TipologiaTitle>Medicamentos</TipologiaTitle>
                      <TipologiaValor>
                        {this.state.medicamentosComp}€ /{" "}
                        {this.state.medicamentosTotal}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.medicamentosComp}
                    max={this.state.medicamentosTotal}
                    variant="danger"
                    animated
                  />
                </div>
              </ContaCorrenteCard>
              <ContaCorrenteCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                    <IconAmbulatorio />
                    <TextTipologia>
                      <TipologiaTitle>Ambulatório</TipologiaTitle>
                      <TipologiaValor>
                        {this.state.ambulatorioComp}€ /{" "}
                        {this.state.ambulatorioTotal}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.ambulatorioComp}
                    max={this.state.ambulatorioTotal}
                    variant="danger"
                    animated
                  />
                </div>
              </ContaCorrenteCard>
            </TipologiaWrapper>
            <TipologiaWrapper>
              <ContaCorrenteCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                    <IconEstomatologia />
                    <TextTipologia>
                      <TipologiaTitle>Estomatologia</TipologiaTitle>
                      <TipologiaValor>
                        {this.state.estomatologiaComp}€ /{" "}
                        {this.state.estomatologiaTotal}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.estomatologiaComp}
                    max={this.state.estomatologiaTotal}
                    variant="danger"
                    animated
                  />
                </div>
              </ContaCorrenteCard>
              <ContaCorrenteCard>
                <div style={{ width: "100%", height: "100%" }}>
                  <IconTextTipologia>
                    <IconProteses />
                    <TextTipologia>
                      <TipologiaTitle>Próteses e Ortóteses</TipologiaTitle>
                      <TipologiaValor>
                        {this.state.protesesComp}€ / {this.state.protesesTotal}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.protesesComp}
                    max={this.state.protesesTotal}
                    variant="danger"
                    animated
                  />
                </div>
              </ContaCorrenteCard>
            </TipologiaWrapper>
          </ContaCorrenteWrapper>
          <HistoricWrapper>
            <ContaCorrenteCard>
              <ContaCorrenteH2>Histórico de Documentos</ContaCorrenteH2>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Nº Fatura/Recibo</th>
                    <th>Data</th>
                    <th>Beneficiário</th>
                    <th>Tipo de Despesa</th>
                    <th>Fatura/Recibo</th>
                    <th>Prescrição</th>
                    <th>Declaração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123</td>
                    <td>07/04/2022</td>
                    <td>Francisco Correia Pereira</td>
                    <td>Medicamentos</td>
                    <td>
                      <Doc to="/">fatura.pdf</Doc>
                    </td>
                    <td>
                      <Doc to="/">prescrição.pdf</Doc>
                    </td>
                    <td>
                      <Doc to="/">declaração.pdf</Doc>
                    </td>
                  </tr>
                  <tr>
                    <td>999</td>
                    <td>01/01/2022</td>
                    <td>Francisco Correia Pereira</td>
                    <td>Próteses e Ortóteses</td>
                    <td>
                      <Doc to="/">fatura.pdf</Doc>
                    </td>
                    <td>
                      <Doc to="/">prescrição.pdf</Doc>
                    </td>
                    <td>
       
                    </td>
                  </tr>
                  <tr>
                    <td>666</td>
                    <td>07/02/2022</td>
                    <td>Francisco Correia Pereira</td>
                    <td>Estomatologia</td>
                    <td>
                      <Doc to="/">fatura.pdf</Doc>
                    </td>
                    <td>
               
                    </td>
                    <td>
                  
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ContaCorrenteCard>
          </HistoricWrapper>
        </ContaCorrenteContainer>
      </>
    );
  }
}
