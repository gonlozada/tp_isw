import React from "react";
import {FormControl, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";


const DateReception = ({actions, system}) => {
  const todayDate = new Date().toISOString();

  const handleChange = (e) => {
    actions.changeTypeDeliver(e.target.value);
    const div = document.getElementById('selector');
    console.log(div);

    if(e.target.value === "Lo antes posible") {
      div.classList.remove("aparecer");
      div.classList.add("desaparecer");
    } else {
      div.classList.remove("desaparecer");
      div.classList.add("aparecer");
    }
  }

  return (
    <div>
      <FormControl>
        <RadioGroup value={system.typeDeliver} onChange={handleChange}>
          <FormControlLabel value={"Lo antes posible"} control={<Radio />} label="Lo antes posible" />
          <FormControlLabel value={"Indicar fecha y hora"} control={<Radio />} label="Indicar fecha y hora" />
        </RadioGroup>
      </FormControl>

      <div id="selector" className="container-date-deliver">
        <span>Indique fecha y hora de recepción:  &nbsp;&nbsp;</span>
        <input className="input" type="datetime-local" min={todayDate} onChange={e => actions.changeDateDeliver(e.target.value)} />
      </div>
    </div>
  )
}

export default DateReception;