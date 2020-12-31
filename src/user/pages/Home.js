import React from "react";
import HomeCard from "../components/HomeCard";
import BackImg from "../../shared/Asset/background.png";
import MaskMan from "../../shared/Asset/4128553(3).png";
import PenyebaranImg from "../../shared/Asset/sembuh.png";
import GrafikImg from "../../shared/Asset/grafik sembuh.png";
import klasementImg from "../../shared/Asset/klasement.png";

import "./Home.css";

const Home = () => {
  const styles = {
    marginTop: "2rem",
  };

  return (
    <div className="row">
      <div className="coba">
        <img className="responsive-img" src={BackImg} alt="backgound" />
        <img className="bg" src={MaskMan} alt="Man With Mask" />
        <div className="text">
          <h1>Always Wear Your Mask</h1>
        </div>
      </div>

      <HomeCard
        styles={styles}
        src={PenyebaranImg}
        href={"Penyebaran"}
        alt={"Peta Penyebaran Virus"}
        paraf={
          "Penyebaran pasien terpapar virus dan jumlah pasien yang sembuh, hingga maninggal berdasarkan 34 provinsi yang ada diIndonesia"
        }
      />
      <HomeCard
        styles={styles}
        src={GrafikImg}
        href={"Grafik"}
        alt={"Grafik Penambahan Kasus"}
        paraf={
          "Grafik penambahan pasien per Hari-nya yang terpapar sekaligus yang sembuh hingga telas meninggal dar virus ini."
        }
      />

      <HomeCard
        styles={styles}
        src={klasementImg}
        href={"Klasemen"}
        alt={"Klasemen Penyebaran Virus"}
        paraf={
          "Pasien yang terpapar virus berdasarkan Klasemen-nya(seperti: Umur, Jenis Kelamin, dan yang masih di Rawat) dari setiap provinsi"
        }
      />
    </div>
  );
};

export default Home;
