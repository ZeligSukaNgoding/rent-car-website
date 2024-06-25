import Background1 from "/public/assets/bg4.png";
import Background2 from "/public/assets/bg2.png";
import Background4 from "/public/assets/bg5.png";


const Tujuan = () => {
  return (
    <div className="min-h-screen bg-[#640000] text-white grid grid-cols-1 xl:grid-cols-3 snap-center">
      <div className="hero min-h-screen`" style={{backgroundImage: `url(${Background1.src})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold text-white">Best Quality</h1>
      <p className="mb-5 text-white">Providing a fleet of high-quality cars that are always well-maintained, ensuring safety, comfort, and customer satisfaction.</p>
    </div>
  </div>
</div>
<div className="hero min-h-screen" style={{backgroundImage: `url(${Background2.src})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold text-white">Superior Customer Service</h1>
      <p className="mb-5 text-white">Prioritizing customer satisfaction through responsive, friendly and professional services, and providing flexible solutions according to individual needs.</p>
    </div>
  </div>
</div>
<div className="hero min-h-screen" style={{backgroundImage: `url(${Background4.src})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold text-white">Technology Innovation</h1>
      <p className="mb-5 text-white">Adopt the latest technology in the process of booking, picking up and returning cars, as well as communication with customers, to provide a more efficient and convenient experience.</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Tujuan;