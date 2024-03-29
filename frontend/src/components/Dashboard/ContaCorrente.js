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
import { ProgressBar, Table } from "react-bootstrap";
import { MdOpenInNew } from "react-icons/md";
import api from "../../api";
import moment from "moment";
import { FaLongArrowAltRight } from "react-icons/fa";

export default class ContaCorrente extends Component {
  async componentDidMount() {
    await api.getPlafondsByUser(this.props.id).then((res) => {
      this.setState({
        medicinesYearly: res.data.plafonds.medicinesYearly,
        medicinesUsed: res.data.plafonds.medicinesUsed,
        ambulatoryYearly: res.data.plafonds.ambulatoryYearly,
        ambulatoryUsed: res.data.plafonds.ambulatoryUsed,
        dentistYearly: res.data.plafonds.dentistYearly,
        dentistUsed: res.data.plafonds.dentistUsed,
        prosthesisYearly: res.data.plafonds.prosthesisYearly,
        prosthesisUsed: res.data.plafonds.prosthesisUsed,
      });
    });
    let expenses = await api.getExpensesByUser(this.props.id).then((res) => {
      let expensesData = res.data.expenses.map(async el =>  ({...el,
        statementFileUrl: await Promise.resolve(this.checkFile("http://localhost:3000/static/" +
        el._id +
        "-statement.pdf")).then(result => {return result;}), 
        prescriptionFileUrl:  await Promise.resolve(this.checkFile("http://localhost:3000/static/" +
        el._id +
        "-prescription.pdf")).then(result => { return result;  }), 
        invoiceFileUrl: await Promise.resolve(this.checkFile("http://localhost:3000/static/" +
        el._id +
        "-invoice.pdf")).then(result => { return result;  })

      }));  
      return expensesData;
    });
    Promise.all(expenses).then(result => {
      this.setState({
        expenses: result,
        waitForLoadingStop: false,
      })
    })
    
  }

   async checkFile(url) {
     return await fetch(url).then((res) => {
      if(res.status === 200) 
        return url;
      return null;
    }).catch(err => {
      return null;
    })
};


  constructor(props) {
    super(props);
    this.state = {
      labels: ["Comparticipado", "Saldo"],
      expenses: [],
      waitForLoadingStop: true, 
    };
  }
  render() {
    const { expenses, waitForLoadingStop } = this.state;
    return (
      <>
       {!waitForLoadingStop && <ContaCorrenteContainer>
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
                          this.state.medicinesUsed +
                            this.state.ambulatoryUsed +
                            this.state.dentistUsed +
                            this.state.prosthesisUsed,
                          this.state.medicinesYearly +
                            this.state.ambulatoryYearly +
                            this.state.dentistYearly +
                            this.state.prosthesisYearly,
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
                        {this.state.medicinesUsed}€ /{" "}
                        {this.state.medicinesYearly}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.medicinesUsed}
                    max={this.state.medicinesYearly}
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
                        {this.state.ambulatoryUsed}€ /{" "}
                        {this.state.ambulatoryYearly}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.ambulatoryUsed}
                    max={this.state.ambulatoryYearly}
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
                        {this.state.dentistUsed}€ / {this.state.dentistYearly}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.dentistUsed}
                    max={this.state.dentistYearly}
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
                        {this.state.prosthesisUsed}€ /{" "}
                        {this.state.prosthesisYearly}€
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <ProgressBar
                    now={this.state.prosthesisUsed}
                    max={this.state.prosthesisYearly}
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
                    <th>Tipo</th>
                    <th>Fatura/Recibo</th>
                    <th>Prescrição</th>
                    <th>Declaração</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  expenses.map((expense) => (
                    <tr>
                      <td>{expense.invoiceNr}</td>
                      <td>{moment(expense.date).format("DD-MM-YYYY")}</td>
                      <td>{expense.name}</td>
                      <td>{expense.type}</td>
                      <td>
                        <Doc
                          href={
                            expense.invoiceFileUrl
                          }
                          target="_blank"
                          download
                        >
                          Fatura
                          <MdOpenInNew />
                        </Doc>
                      </td>
                      <td>
                        {expense.prescriptionFileUrl != null && <Doc
                          href={
                            "http://localhost:3000/static/" +
                            expense._id +
                            "-prescription.pdf"
                          }
                          target="_blank"
                          download
                        >
                          Receita
                          <MdOpenInNew />
                        </Doc>}
                      </td>
                      <td>
                        {expense.statementFileUrl != null && <Doc
                          href={
                            "http://localhost:3000/static/" +
                            expense._id +
                            "-statement.pdf"
                          }
                          target="_blank"
                          download
                        >
                          Declaração
                          <MdOpenInNew />
                        </Doc>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ContaCorrenteCard>
          </HistoricWrapper>
        </ContaCorrenteContainer>
  }
      </>
    );
  }
}
