import React from "react";
import KlasementCard from "../components/KlasementCard";
import SelectForm from "../components/SelectForm";
import M from "materialize-css/dist/js/materialize";

import "./Klasemen.css";
const Klasemen = ({dataKlasemen}) => {
  document.addEventListener("DOMContentLoaded", () => {
    const elems = document.querySelectorAll("select");
    const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elemsDropdown);
    M.FormSelect.init(elems);
  });
  console.log(dataKlasemen);
  return (
    <div className="row begin">
      <KlasementCard>
        <span className="card-title">
          <SelectForm />
        </span>
      </KlasementCard>

      <KlasementCard className="kasus">
        <span className="card-title">+12,11</span>
        <p className="cd">Penembahan Kasus Hari ini</p>
      </KlasementCard>

      <KlasementCard className="meninggal">
        <span className="card-title">+15</span>
        <p className="cd">Meninggal</p>
      </KlasementCard>

      <KlasementCard className="kasus">
        <span className="card-title">82,190</span>
        <p className="cd">Total Kasus</p>
      </KlasementCard>

      <KlasementCard className="meninggal">
        <span className="card-title">1817</span>
        <p className="cd">Total Meninggal</p>
      </KlasementCard>

      <KlasementCard className="sembuh">
        <span className="card-title">67,216</span>
        <p className="cd">Total Sembuh </p>
      </KlasementCard>

      <KlasementCard offset="offset-m4">
        <a className="dropdown-trigger" href="#!" data-target="dropdown3">
          Klasemen Umur
          <i className="material-icons right">arrow_drop_down</i>
        </a>
        <span className="card-title">1915</span>
      </KlasementCard>

      <KlasementCard>
        <p>
          <a className="dropdown-trigger" href="#!" data-target="dropdown4">
            Gender <i className="material-icons right">arrow_drop_down</i>
          </a>
        </p>
        <span className="card-title">1915</span>
      </KlasementCard>

      <ul id="dropdown3" className="dropdown-content">
        <li>
          <a href="#!">0-5</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">6-18</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">19-30</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">31-45</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">46-59</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">≥ 60</a>
        </li>
      </ul>

      <ul id="dropdown4" className="dropdown-content">
        <li>
          <a href="#!">Pria</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">Wanita</a>
        </li>
      </ul>
    </div>
  );
};

export default Klasemen;
