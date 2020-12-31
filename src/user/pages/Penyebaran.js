import React, { useState } from "react";
import PenyebaranCard from "../components/PenyebaranCard";
import PenyebaranPeta from "../components/PenyebaranPeta";

import "./Penyebaran.css";

const Penyebaran = ({ dataUpdate, dataProvinsi }) => {
  const [TipeKasus, setTipeKasus] = useState("meninggal");

  const {
    jumlah_positif: Kasus,
    jumlah_meninggal: Meninggal,
    jumlah_sembuh: Sembuh,
  } = dataUpdate;

  return (
    <div className="row begin">
      <PenyebaranCard
        onClick={(e) => setTipeKasus("kasus")}
        active={TipeKasus === "kasus"}
        id={"Kasus"}
        data={Kasus}
      />
      <PenyebaranCard
        onClick={(e) => setTipeKasus("meninggal")}
        active={TipeKasus === "meninggal"}
        col={"s6"}
        id={"Meninggal"}
        data={Meninggal}
      />
      <PenyebaranCard
        onClick={(e) => setTipeKasus("sembuh")}
        active={TipeKasus === "sembuh"}
        col={"s6"}
        id={"Sembuh"}
        data={Sembuh}
      />
      <PenyebaranPeta provinsi={dataProvinsi} Tipe={TipeKasus} />
    </div>
  );
};

export default Penyebaran;
