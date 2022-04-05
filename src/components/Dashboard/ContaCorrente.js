import React, { Component } from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from "./StyledContaCorrente";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Icon1 from "../../images/events.svg";
import { Button } from "../StyledButton";

ChartJS.register(ArcElement, Tooltip, Legend);

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Total Entregue", "Comparticipado", "Saldo"],
      dataMedicamentos: [
        {
          data: [108.41, 81.31, 543.69],
          backgroundColor: [
            "rgba(87, 85, 85, 0.5)",
            "rgba(166, 166, 165, 0.5)",
            "rgba(209, 49, 44, 0.5)",
          ],
          borderColor: [
            "rgba(87, 85, 85, 1)",
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderWidth: 2,
        },
      ],
      dataAmbulatorio: [
        {
          data:[105, 68.25, 671.75],
          backgroundColor: [
            "rgba(87, 85, 85, 0.5)",
            "rgba(166, 166, 165, 0.5)",
            "rgba(209, 49, 44, 0.5)",
          ],
          borderColor: [
            "rgba(87, 85, 85, 1)",
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderWidth: 2,
        },
      ],
      dataEstomatologia: [
        {

          data:[60, 39, 491],
          backgroundColor: [
            "rgba(87, 85, 85, 0.5)",
            "rgba(166, 166, 165, 0.5)",
            "rgba(209, 49, 44, 0.5)",
          ],
          borderColor: [
            "rgba(87, 85, 85, 1)",
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderWidth: 2,
        },
      ],
      dataProteses: [
        {

          data:[0, 0, 530],
          backgroundColor: [
            "rgba(87, 85, 85, 0.5)",
            "rgba(166, 166, 165, 0.5)",
            "rgba(209, 49, 44, 0.5)",
          ],
          borderColor: [
            "rgba(87, 85, 85, 1)",
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderWidth: 2,
        },
      ],
      
    };
  }
  render() {
    return (
      <>
        <ServicesContainer id="Services">
          <ServicesWrapper>
            <ServicesCard>
              <ServicesCard.Body>
                <ServicesH2>Medicamentos</ServicesH2>
                <Pie
                  data={{
                    labels: this.state.labels,
                    datasets: this.state.dataMedicamentos,
                  }}
                  options={{
                    options: this.state.options,
                  }}
                />
              </ServicesCard.Body>
            </ServicesCard>
            <ServicesCard>
              <ServicesCard.Body>
                <ServicesH2>Ambulatório</ServicesH2>
                <Pie
                  data={{
                    labels: this.state.labels,
                    datasets: this.state.dataAmbulatorio,
                  }}
                  options={{
                    options: this.state.options,
                  }}
                />
              </ServicesCard.Body>
            </ServicesCard>
            <ServicesCard>
              <ServicesCard.Body>
                <ServicesH2>Estomatologia</ServicesH2>
                <Pie
                  data={{
                    labels: this.state.labels,
                    datasets: this.state.dataEstomatologia,
                  }}
                  options={{
                    options: this.state.options,
                  }}
                />
              </ServicesCard.Body>
            </ServicesCard>
            <ServicesCard>
              <ServicesCard.Body>
                <ServicesH2>Próteses e Ortóteses</ServicesH2>
                <Pie
                  data={{
                    labels: this.state.labels,
                    datasets: this.state.dataProteses,
                  }}
                  options={{
                    options: this.state.options,
                  }}
                />
              </ServicesCard.Body>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
      </>
    );
  }
}
