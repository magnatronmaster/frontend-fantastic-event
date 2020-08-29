import React from "react";

import {
  AgendaPlantilla,
  ContenedorTablaPlantilla,
  FechaPlantilla,
  PrimerDia,
  SegundoDia,
  TablaEventoPlantilla
} from "./styles";

export const Agenda = () => {
  return (
    <AgendaPlantilla>
      <h2>Agenda</h2>

      <ContenedorTablaPlantilla>
        <FechaPlantilla>
          <PrimerDia>first-day</PrimerDia>
          <SegundoDia>second-day</SegundoDia>
        </FechaPlantilla>
        <h3>Workshops day</h3>
        <div class="tabla">
          <TablaEventoPlantilla>
            {[1, 2, 3, 5, 6].map(() => {
              return (
                <tr>
                  <td>9:30 am - 11:30 am</td>
                  <td>
                    Primera actividad
                    <br />
                    <strong> Conferencista1</strong>
                  </td>
                </tr>
              );
            })}
          </TablaEventoPlantilla>
        </div>
      </ContenedorTablaPlantilla>
    </AgendaPlantilla>
  );
};
