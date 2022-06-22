import React, { Component } from "react";
import {
  Atencao,
  IconAtencao,
  IconTextTipologia,
  SubmissaoContainer,
  TextTipologia,
  Wrapper,
} from "./StyledSubmissao";
import "chart.js/auto";
import { Col, Form, Row, InputGroup, FormControl } from "react-bootstrap";
import { SubmitButton } from "../StyledButton";
import api from "../../api";
import moment from "moment";

const value = `1 – Todas as faturas-recibo ou faturas simplificadas apresentadas, devem conter o nome e número de contribuinte;
2 - As faturas-recibo referentes à aquisição de medicamentos, têm que ser acompanhadas por um dos seguintes documentos: prescrição médica, guia de tratamento ou guia de aviamento;
3 - As faturas/recibo referentes à aquisição de outros produtos farmacêuticos, são comparticipadas, desde que prescritos por médicos inscritos na Ordem dos Médicos e acompanhados de respetiva declaração médica que ateste a necessidade e imprescindibilidade do seu uso para tratamento médico;
4 - O reembolso de despesas respeitantes a próteses e/ou ortóteses, só será efetuado se a fatura-recibo vier acompanhada de prescrição médica;
5 - As faturas-recibo emitidas por pessoas singulares (recibo verde eletrónico) e os emitidos por pessoas coletivas deverão conter a especialidade médica e a discriminação dos atos médicos realizados.
6 - O pedido de reembolso, com todos os documentos necessários, deve ser submetido no prazo de 90 dias, a contar da data da emissão da fatura/recibo, referente à realização do ato ou cuidado de saúde;
7 - O envio digital da documentação dispensa a necessidade de entrega dos originais (exceto em caso de necessidade de esclarecimento). O Associado deverá conservar na sua posse os documentos originais pelo prazo de 5 anos, para efeitos legais;
8 - Cuidados a ter com a submissão de despesas:
  - Digitalizar um documento por página e de forma legível;
  - Apenas são permitidos ficheiros em formato PDF;
  - Ao inserir os documentos deve seguir a seguinte ordem: fatura/recibo, prescrição médica/guia de aviamento e declaração médica (quando houver lugar);
  - Deverá ser feita uma submissão por cada documento a anexar;
9 - Os Associados para terem direito a receber as comparticipações, têm que ter as suas quotas em dia.`;

export default class Submissao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoiceNr: "",
      name: this.props.name,
      date: moment(Date.now()).format("YYYY-MM-DD"),
      type: "Medicamentos",
      price: "",
      beneficiary: "Associado",
      userId: this.props.id,
      isNameDisabled: true,
      selectedInvoice: "",
      selectedPrescription: "",
      selectedStatement: "",
    };
  }

  // On file select (from the pop up)
  onInvoiceFileChange = (event) => {
    // Update the state
    const file = event.target.files[0];
    this.setState ({selectedInvoice: file})
  };

    // On file select (from the pop up)
  onPrescriptionFileChange = (event) => {
    // Update the state
    const file = event.target.files[0];
    this.setState ({selectedPrescription: file})
  };

    // On file select (from the pop up)
  onStatementFileChange = (event) => {
  // Update the state
  const file = event.target.files[0];
  this.setState ({selectedStatement: file})
  };

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };
  handleChangeInputInvoiceNr = async (event) => {
    const invoiceNr = event.target.value;
    this.setState({ invoiceNr });
  };
  handleChangeInputDate = async (event) => {
    const date = event.target.value;
    this.setState({ date });
  };
  handleChangeInputPrice = async (event) => {
    const price = event.target.value;
    this.setState({ price });
  };
  handleChangeInputType = async (type) => {
    this.setState({ type });
  };
  handleChangeInputBeneficiaryType = async (beneficiary) => {
    // const beneficiary = value;
    this.setState({ beneficiary });
    if (beneficiary === "Associado") {
      this.setState({ name: this.props.name, isNameDisabled: true });
    } else {
      this.setState({ name: "", isNameDisabled: false });
    }
  };

  handleIncludeExpense = async (event) => {
    event.preventDefault()
    const { invoiceNr, name, date, type, price, userId } = this.state;
    const payload = { invoiceNr, name, date, type, price, userId };
    await api.createExpense(payload).then((res) => {
      if (res.data.success) {
       
        this.setState({
          invoiceNr: "",
          name: this.props.name,
          date: moment(Date.now()).format("YYYY-MM-DD"),
          type: "Medicamentos",
          price: "",
          beneficiary: "Associado",
          userId: this.props.id,
          isNameDisabled: true,
        });
        const id = res.data.id;
        const extension = this.state.selectedInvoice.name.substring(
          this.state.selectedInvoice.name.lastIndexOf(".")
        );
        const formData = new FormData();
        formData.append("files", this.state.selectedInvoice, id + "-invoice"+ extension);
        if (this.state.selectedPrescription !== ""){
          formData.append("files", this.state.selectedPrescription, id + "-prescription" +extension);
        }
        if (this.state.selectedStatement !== ""){
          formData.append("files", this.state.selectedStatement, id + "-statement" + extension);
        }
        // Request made to the backend api
        // Send formData object
        api.uploadFiles(id, formData);

        this.setState({
          title: "",
          date: moment(Date.now()).format("YYYY-MM-DD"),
          description: "",
        });
        window.alert(`Despesa registada com Sucesso!`);
      } else {
        window.alert(`Verifique os Dados!`);
      }
      
    });
  };



  render() {
    const { name, date, invoiceNr, type, price, beneficiary } = this.state;
    return (
      <>
        <SubmissaoContainer>
          <Wrapper>
            
            <Form onSubmit={this.handleIncludeExpense}>
            <Atencao >
              <IconTextTipologia>
                <IconAtencao />
                <TextTipologia>
                  <Atencao.Heading>Atenção</Atencao.Heading>
                  Deve fazer uma submissão para cada despesa a reembolsar.
                </TextTipologia>
              </IconTextTipologia>
            </Atencao>
            <Form.Group role="form">
              <Row className="mb-3">
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Tipo Beneficiário</Form.Label>
                  <Form.Control
                    as="select"
                    value={beneficiary}
                    onChange={(e) =>
                      this.handleChangeInputBeneficiaryType(e.target.value)
                    }
                  >
                    <option value="Associado">Associado Efetivo</option>
                    <option value="Subscritor">Subscritor (Familiar)</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} hasValidation>
                  <Form.Label>Nome Beneficiário</Form.Label>
                  <Form.Control
                    required
                    //isInvalid
                    value={name}
                    onChange={this.handleChangeInputName}
                    disabled={this.state.isNameDisabled}
                  />
                 {/*  <Form.Control.Feedback type="invalid">
                    Por favor, preencha o nome do beneficiário.
                  </Form.Control.Feedback> */} 
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} sm={3} hasValidation>
                  <Form.Label>Tipo Despesa</Form.Label>
                  <Form.Control
                    as="select"
                    value={type}
                    onChange={(e) => this.handleChangeInputType(e.target.value)}
                  >
                    <option value="Medicamentos">Medicamentos</option>
                    <option value="Ambulatório">Ambulatório</option>
                    <option value="Estomatologia">Estomatologia</option>
                    <option value="Próteses e Ortóteses">
                      Próteses e Ortóteses
                    </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} sm={3} hasValidation>
                  <Form.Label>Nº Fatura/Recibo</Form.Label>
                  <Form.Control
                    value={invoiceNr}
                    onChange={this.handleChangeInputInvoiceNr}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} sm={3}>
                  <Form.Label>Data Fatura/Recibo</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={this.handleChangeInputDate}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label>Preço Fatura/Recibo</Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="0,00"
                      type={"number"}
                      step={"0.01"}
                      min={0}
                      value={price}
                      onChange={this.handleChangeInputPrice}
                      required
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Fatura/Recibo</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" onChange={this.onInvoiceFileChange} required/>
                  </Form.Group>
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label>Prescrição Médica</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" onChange={this.onPrescriptionFileChange} />
                  </Form.Group>
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label>Declaração Médica</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" onChange={this.onStatementFileChange}/>
                  </Form.Group>
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Requisitos para Reembolso conforme Regulamento de Benefícios:
                </Form.Label>
                <Form.Control value={value} as="textarea" rows={5} readOnly />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="Concordo com os Requisitos para o Reembolso"
                />
              </Form.Group>
           
            </Form.Group>
            <SubmitButton type="submit">
              Submeter
            </SubmitButton>
            </Form>
          </Wrapper>
        </SubmissaoContainer>
      </>
    );
  }
}
