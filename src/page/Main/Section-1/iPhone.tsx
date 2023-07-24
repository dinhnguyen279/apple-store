import iPhoneLeft from "../../../assets/images/iPhoneLeft-Prop.png";
import iPhoneRight from "../../../assets/images/iPhoneRight-Prop.png";
import { Link } from "react-router-dom";
const Iphone = () => {
  return (
    <>
      <Link to={"/product"}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center animate__animated animate__fadeInDown">
            <h1 className="text-6xl font-semibold">iPhone 14</h1>
            <p className="text-xl font-normal">Big and bigger</p>
            <div className="space-x-10 text-blue-600 text-xl font-normal">
              <a href="/product" className="hover:underline">
                Learn more {">"}
              </a>
              <a href="/product" className="hover:underline">
                Buy {">"}
              </a>
            </div>
          </div>
          <div className="flex">
            <img
              src={iPhoneLeft}
              alt="iPad"
              className="w-1/2 object-cover animate__animated animate__bounceInLeft"
            />
            <img
              src={iPhoneRight}
              alt="iPad"
              className="w-1/2 object-cover animate__animated animate__bounceInRight"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Iphone;
