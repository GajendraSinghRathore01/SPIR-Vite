import { call, location, message, whiteLogo } from "../assets";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-theme text-white py-8 rounded-t-xl ">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            {/* <img className='w-40' src={whiteLogo} /> */}
            <h1
              className="text-5xl font-bold text-white cursor-pointer"
              onClick={() => navigate("/home")}
            >
              SPIR
            </h1>
            <p className="text-justify">
              3rd floor, CoDesk Innovation Center 12, Ajmer Rd, near DCM, Swroop
              Colony, Tagore Nagar, Jaipur, Rajasthan 302021
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Quick Links</h3>
            <Link to="/home">
              <p>Home</p>
            </Link>
            <Link to="#">
              <p>About Us</p>
            </Link>
            <Link to="#">
              <p>Events</p>
            </Link>
            <Link to="/schemes">
              <p>Schemes</p>
            </Link>
            <Link to="#">
              <p>Industrial Report</p>
            </Link>
          </div>
          <div className="flex flex-col gap-5  ">
            <h3 className="text-xl m-0 ">Help</h3>
            <Link to="#">
              <p>Terms of Service</p>
            </Link>
            <Link to="#">
              <p>Privacy Policy</p>
            </Link>
            <Link to="#">
              <p>FAQ's</p>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl">Contact</h3>
            <div className="flex  space-x-2 items-center">
              <img src={call} /> <div className="flex flex-wrap gap-2"><p>91+ 9876xxxxxx, </p> <p> 91+ 9876xxxxxx</p></div>
            </div>
            <div className="flex  flex-wrap space-x-2 items-center ">
              {" "}
              <img src={message} /> <p className="lg:text-md">support@spir.org.in</p>
            </div>
            <div className="flex  items-center space-x-2   ">
              <img  src={location} />
              <p className="text-justify">3rd floor, CoDesk Innovation Center 12, Ajmer Rd, near DCM, Swroop
              Colony, Tagore Nagar, Jaipur, Rajasthan 302021</p>
            </div>
          </div>
        </div>
        <hr className="mt-8 opacity-30"></hr>
        <div className="flex justify-center pt-6">
          <p>© 2025 SPIR. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
