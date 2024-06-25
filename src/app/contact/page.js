import Image from "next/image";
import Background from "/public/assets/contact.png";

const Contact = () => {
    return (
        <>
        <div className="hero min-h-screen snap-center" style={{backgroundImage:`url(${Background.src})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1836712916734!2d110.79870307367968!3d-7.5549419924588035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14234667a3fd%3A0xc2dc8c1f0bdce20f!2sSMK%20Negeri%202%20Surakarta!5e0!3m2!1sid!2sid!4v1717993132483!5m2!1sid!2sid" width={400} height={320}></iframe>
                <div><div className="text-white">
                    <h1 className="text-2xl font-bold pt-4">About Us!</h1>
                    <div className="pt-6">
                        <p className="text-lg text-white ">
                        Welcome To Zelig Trans<br></br>
                        We are a leading car rental company dedicated to providing the best service to our customers. With years of experience in the industry, we understand how important comfort, safety and reliability are in your journey.
                        </p>
                        <p className="indent-8 text-justify"></p>
                    </div>
                </div>
                <br></br>
                <div className="text-white ">
                    <h1 className="text-2xl font-bold ">Contact Us!</h1>
                    <div className="py-5">
                        <p className="text-xl text-white">
                        Email : zeliglagi@gmail.com<br></br>
                        Alamat : Jln Srigunting VIII Gremet,Gremet,Manahan,Surakarta<br></br>
                        No Telp : 085337565648
                        </p>
                        
                        <p className="indent-8 text-justify"></p>
                    </div>
                </div></div>
            </div>
        </div>
        </>
    )
}
export default Contact;