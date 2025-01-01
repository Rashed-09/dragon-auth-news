import swimming from "../../assets/swimming.png"
import clases from "../../assets/class.png"
import playGround from "../../assets/playground.png"
const Qzone = () => {
    return (
      <div className="bg-blue-100 space-y-3 p-4 rounded">
        <h2 className="font-bold text-black">Q-Zone</h2>
        <div className="space-y-4 flex flex-col justify-center">
          <img src={swimming} alt="" />
          <img src={clases} alt="" />
          <img src={playGround} alt="" />
        </div>
      </div>
    );
};

export default Qzone;