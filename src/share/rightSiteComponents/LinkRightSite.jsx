import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const LinkRightSite = () => {
    return (
      <div className="space-y-2">
        <h2 className="font-bold text-black">Find Us ON</h2>
        <div className="">
          <button className="w-full p-4 flex border items-center gap-3 rounded-t-md">
            <FaFacebook className="text-blue-800"></FaFacebook>
            <span>Facebook</span>
          </button>
          <button className="flex border-x w-full p-4 items-center gap-3">
            <FaTwitter className="text-blue-400"></FaTwitter>
            <span>Twitter</span>
          </button>
          <button className="flex border w-full p-4 items-center gap-3 rounded-b-md">
            <FaInstagram className="text-red-400"></FaInstagram>
            <span>Instagram</span>
          </button>
        </div>
      </div>
    );
};

export default LinkRightSite;