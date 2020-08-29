import React from "react";

import {
  AgendaPlantilla,
  ContenedorTablaPlantilla,
  FechaPlantilla,
  PrimerDia,
  SegundoDia,
  TablaEventoPlantilla
} from "./styles";

export const Agenda = ({dateEvent, conference}) => {
  return (
    <AgendaPlantilla>
      <h2>Agenda</h2>

      <ContenedorTablaPlantilla>
        <FechaPlantilla>
          <PrimerDia>{dateEvent || "first-day"}</PrimerDia>
          <SegundoDia>{dateEvent || "second-day"}</SegundoDia>
        </FechaPlantilla>
        <h3>Workshops day</h3>
        <div>
          <TablaEventoPlantilla>
            <tbody>
            {[1, 2, 3, 5, 6].map((conferenceItem) => {
              return (
                <tr key = {event}>
                  <td>{conferenceItem || "9:30 am - 11:30 am"}</td>
                  <td>
                    {conferenceItem || "Primera actividad"}
                    <br />
                    <strong>{conferenceItem.speaker || "Conferencista1"} </strong>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </TablaEventoPlantilla>
        </div>
      </ContenedorTablaPlantilla>
    </AgendaPlantilla>
  );
};
