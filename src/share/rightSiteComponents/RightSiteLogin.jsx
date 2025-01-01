import { FaGoogle, FaGithub } from "react-icons/fa";
const RightSiteLogin = () => {
  return (
    <div className="space-y-2">
      <h2 className="font-bold text-black">Login With</h2>
      <div className="w-full flex justify-center flex-col gap-3">
        <button className="flex border-2 border-blue-600 gap-3 items-center rounded p-2 text-blue-600 justify-center">
          <FaGoogle></FaGoogle>
          <span>Login With Google</span>
        </button>
        <button className="flex border-2 gap-3 items-center rounded p-2 text-gray-600 border-gray-600 justify-center">
          <FaGithub></FaGithub>
          <span className="flex items-center">Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default RightSiteLogin;
