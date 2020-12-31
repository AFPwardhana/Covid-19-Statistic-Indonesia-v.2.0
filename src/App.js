import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./shared/Navigation/NavBar";
import Home from "./user/pages/Home";
import Penyebaran from "./user/pages/Penyebaran";
import Grafik from "./user/pages/Grafik";
import Klasemen from "./user/pages/Klasemen";
import FetchApi from "./shared/UtilsElement/FetchApi";

import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataUpdateKasus, setDataUpdateKasus] = useState({});
  const [dataKasusHarian, setDataKasusHarian] = useState([]);

  const [urlAPI, urlAPI2] = [
    "https://data.covid19.go.id/public/api/update.json",
    "https://data.covid19.go.id/public/api/prov.json",
  ];
  useEffect(() => {
    const getDataUpdate = async () => {
      await FetchApi(urlAPI).then((data) => {
        const {
          update: { total: totalDataIndo, harian: updateDataHarian },
        } = data;
        setDataUpdateKasus(totalDataIndo);
        setDataKasusHarian(updateDataHarian);
      });
    };
    getDataUpdate();
  }, []);

  useEffect(() => {
    const getDataProvinsi = async () => {
      await FetchApi(urlAPI2).then((data) => {
        const { list_data: dataUpdateProvinsi } = data;
        setDataProvinsi(dataUpdateProvinsi);
      });
    };
    getDataProvinsi();
  }, []);

  // console.log(dataProvinsi, dataUpdateKasus);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Penyebaran" exact>
            <Penyebaran
              dataUpdate={dataUpdateKasus}
              dataProvinsi={dataProvinsi}
            />
          </Route>
          <Route path="/Grafik" exact>
            <Grafik dataGrafik={dataKasusHarian} />
          </Route>
          <Route path="/Klasemen" exact>
            <Klasemen dataKlasemen ={dataProvinsi} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
