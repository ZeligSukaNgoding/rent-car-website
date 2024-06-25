import Wedding from "/public/assets/wed.png";
import Weekend from "/public/assets/week.png";
import Festival from "/public/assets/festival.png";
import Road from "/public/assets/road.png";
import Image from "next/image";

const Event = () => {
  return (
    <div className="min-h-screen bg-[#640000] text-white grid grid-cols-1 xl:grid-cols-4 snap-center">
      <div
        className="hero min-h-screen`"
        style={{ backgroundImage: `url(${Wedding.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Wedding</h1>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Weekend.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Weekend</h1>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Festival.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Festival</h1>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Road.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Road Trip</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
