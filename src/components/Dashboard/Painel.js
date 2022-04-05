import React, { Component } from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  GraficoCircular,
} from "./StyledPainel";

import { Pie } from "react-chartjs-2";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Entregue", "Comparticipado", "Saldo"],
      data: [
        {
          data: [108.41, 81.31, 543.69],
          backgroundColor: [
            "rgba(87, 85, 85, 0.5)",
            "rgba(166, 166, 165, 0.5)",
            "rgba(209, 49, 44, 0.5)",
          ],
          hoverBackgroundColor: [
            "rgba(87, 85, 85, 1)",
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderColor: [
            "rgba(87, 85, 85, 1)",
            "rgba(166, 166, 165, 1)",
            "rgba(209, 49, 44, 1)",
          ],
          borderWidth: 2,
          offset: 20,
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
                <ServicesH2>Resumo</ServicesH2>
    
                  <Pie
                    data={{
                      labels: this.state.labels,
                      datasets: this.state.data,
                    }}
                    options={
                      ({ responsive: true }, { maintainAspectRatio: false },
                      {
                        legend: {
                          display: true,
                          position: "left",
                          align: "center",
                        },
                      })
                    }
                  />
              </ServicesCard.Body>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
      </>
    );
  }
}
