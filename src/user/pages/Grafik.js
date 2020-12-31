import React from "react";
import GrafikCard from "../components/GrafikCard";
import SelectForm from "../components/SelectForm";
import M from "materialize-css/dist/js/materialize";

import "./Grafik.css";

const Grafik = ({dataGrafik}) => {

  document.addEventListener("DOMContentLoaded", () => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  });

  console.log(dataGrafik);
  return (
    <div className="row begin">
      <div className="input-field col s7 m3 offset-s5 offset-m9 offset-l9">
        <SelectForm />
      </div>
      <GrafikCard dataGrafik ={dataGrafik} />
      {/* <GrafikCard  dataGrafik ={dataGrafik} /> */}
    </div>
  );
};

export default Grafik;
