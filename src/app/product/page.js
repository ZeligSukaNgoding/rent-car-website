import Image from "next/image";
import Alphard from "/public/assets/alphard.png";
import Vellfire from "/public/assets/velfire.png";
import Voxy from "/public/assets/voxyyy.png";
import Serena from "/public/assets/serena.png";

import Fortuner from "/public/assets/fort.png"
import Pajero from "/public/assets/paj.png"
import Avanza from "/public/assets/avan.png"
import Inova from "/public/assets/inovaa.png"

import Background from "/public/assets/whitewall.jpg";

const Product = () => {
  return (
    <div
      className="min-h-screen grid grid-cols-2 xl:grid-cols-4 gap-4 p-8 justify-center snap-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Alphard} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-36 bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-lg">Alphard</p>
          <p>
          The new MPV from Toyota comes in a total of 3 variants. Toyota Alphard engine specs then the Petrol engine displacement is 2498 cc.
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Vellfire} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-36 bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Vellfire</p>
          <p>
          The Vellfire gets new active and passive safety features. Along with six airbags, a 360-degree camera, and hill-assist control.
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Voxy} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-40  bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Voxy</p>
          <p>
          The new MPV from Toyota comes in a total of 1 variants. If we talk about Toyota Voxy engine specs then the Petrol engine displacement is 1986 cc.
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Serena} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-40  bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Serena  </p>
          <p>
          The Nissan Serena is a excellent car. I like that the fact that the Nissan Serena is a very roomy and spacious car. There are also many clever features such as the sliding doors.
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Fortuner} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-36 bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Fortuner</p>
          <p>
          The Fortuner comes with both diesel and petrol engine options. The SUV comes in a 2.7-liter petrol engine (166 PS and 245 Nm).
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Pajero} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-36 bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Pajero</p>
          <p>
          Pajero should be at the top of your list. Its robust four-wheel-drive system, impressive ground clearance,  make it a capable and trustworthy companion on any terrain.
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Avanza} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-36 bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Avanza</p>
          <p>
          The Toyota Avanza and Daihatsu Xenia are a series of multi-purpose vehicles (MPV) developed by Daihatsu and marketed by both Toyota and Daihatsu, mainly sold with three-row seating.
          </p>
        </div>
      </div>
      <div className="card w-full h-96 glass text-white">
        <figure>
          <Image src={Inova} width={230} alt="Shoes" />
        </figure>
        <div className="card-body h-36 bg-[#640000] rounded-b-xl text-sm">
          <p className="card-title text-xl">Inova Reborn</p>
          <p>
          Overview. The All-New Toyota Innova Reborn is a 5-seater premium MPV with a brand new design as the manifestation of pleasure and performance in one riding experience.
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default Product;
