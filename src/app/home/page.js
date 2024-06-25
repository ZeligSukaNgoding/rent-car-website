import Background from "/public/assets/rentcarr.png";
import Testi from "/public/assets/testi.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      className="hero min-h-screen snap-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={Testi} width={600} />
        <div>
          <div className="text-white">
            <div className="pt-6">
              <p className="text-4sm text-white text-center non-italic">
                "Layanan rental mobil ini luar biasa! Mobilnya bersih dan dalam
                kondisi sangat baik. Proses penyewaannya cepat dan stafnya
                sangat ramah dan profesional. Sangat direkomendasikan!"
              </p>
              <h1 className="text-2xl pt-4 flex-row text-center italic">
                Ranu Lapisan Ozon
              </h1>
              <p className="indent-8 text-justify"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
